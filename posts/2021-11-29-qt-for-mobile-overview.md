---
title: Is Qt a good choice for cross-platform mobile development?
excerpt: Qt offers a rich framework for building cross-platform solutions, but it is not the most beginner friendly, is more suited for companies than indie developers and its mobile solution is better suited to porting existing Qt apps to mobile.
date: "2021-12-02"
author: John Ingram
image: "/images/posts/qt-banner.jpg"
caption: "..."
---

![](/images/posts/qt-banner.jpg)


Using Qt to develop mobile applications (iOS + Android) is an interesting choice that often goes under the radar. With more and more cross-platform solutions available (e.g. React Native, Ionic, Kotlin Cross-Platform, Xamarin, Flutter) I think it is worth taking a moment to look at Qt, a mobile cross-platform solution since 2013.

Where does Qt sit in the world of cross-platform solutions? Well, Qt takes the custom rendering engine approach, i.e. not only is your app's logic layer reused but so is your user interface since your app ships with its own rendering engine to render the UI without the need for native components. Flutter takes a similar approach. By default your app has the exact same UI on both Android and iOS.

![Mobile state of the art](/images/posts/mobile-state-of-the-art.png)

Having worked some time at Edeltech on a large mobile app developed with Qt I would like to take a moment and provide some thoughts on my experience. The app in question is Phototales, a consumer orientated mobile app that leverages machine learning algorithms to automatically design photo-books from the user's photo library. The app is a classic Qt Quick 5 app with the UI layer written in QML and the "logic" layer in C++.

The app has all the hallmarks of a modern large mobile app:

* A few dozen UI screens with some complex UI: a custom built photo gallery and a photo-book viewer
* Integrate with many external SDKs (AWS, Firebase, PayPal, etc...)
* Multiple authentication methods (Sign in With Apple, Google Auth, etc...)
* Run machine learning TensorFlow models on device
* Communicate with a backend cloud infrastructure

![The Phototales app](/images/posts/qt-phototales.gif)

In terms of a language breakdown, **90%** of the codebase is fully reusable as it is written in C++ (backend) and QML (UI). The rest is mainly integration with the native platform using Java (Android) and Objective-C (iOS).

![Phototales app language breakdown](/images/posts/qt-pt-code-breakdown.png)

So having seen one of the main advantages of using Qt, maximum code reusability, let's now take a look at a few positive and negative aspects of developing mobile applications with it.

## The good
### QML
Qt's proprietary UI language is quite intuitive. With its declarative syntax and being built from the ground up to be a UI language and nothing else it offers good flexibility to compose simple or complex UIs with a syntax that is easy to read.

QML comes with all the usual basic building block for UIs:

* **Components and controls:**
Buttons, text fields, images, list views, stack views etc... the QML Quick component library has all the necessary atomic elements that can be easily manipulated and styled to match whatever design one is going for.

*  **Propagating changes:**
QML uses a [property binding](https://doc.qt.io/qt-5/qtqml-syntax-propertybinding.html) approach to propagate changes throughout the UI that is simple to implement.

*  **Animation:**
QML provides a wide range of animations that one can sprinkle over the code to animate property changes and create smooth transitions.

*  **Touch based inputs:**
Swipe, pinch and tap gestures are handled.

*  **Custom shapes:**
One is not restricted to just rectangles and circles, complex shapes can be defined using the QML Shape type. Shapes can be animated and interactive.

*  **Shader effects:**
QML provides prebuilt shader effects (for example classic shadow effects) but you can also write inline OpenGL code if you are motivated.

*  **3D:**
If one gets bored of working in 2 dimensions, Qt provides various modules for working and simulating in 3 dimensions with QML.

#### Language interoperability

* **JavaScript:**
Whatever one's personal opinions are on JavaScript, being able to write and run JavaScript directly inline in one's QML UI code comes in handy, especially for those cases where writing small pieces of "logic" that cannot be expressed in a declarative syntax. It is possible of course to take things further and write all the app's logic (data models, API calls, etc...) directly with JavaScript, bypassing the need to even touch C++. However I would not recommend this approach for large apps as completely mixing UI and logic can lead to a messy codebase.

* **C++:**
The foundational language behind Qt is C++, so it comes has no surprise that integrating QML with C++ is made easy.

### C++ made easy(ier)
Speaking of C++, a complaint that is often mentioned when talking about developing with Qt is having to use C++, the mere thought of which can evoke fear and dread in some. However the Qt C++ library does a good job of reducing the complexities of the language. For starters Qt's class ownership model simplifies memory management. Furthermore Qt provides many data classes and types geared specifically toward app development . Finally Qt's signal / slot mechanism is easy to use, allows decoupling when architecting an app and is the key element behind a Qt app's event-driven architecture.

On top of the above, C++ itself offers the advantage of a strongly-typed language with high performance.

### Integrate with native capabilities
For mobile development, C++ allows developers to interact with native APIs :

* For iOS, by using Objective-C++ `.mm` source files where C++ and Objective-C can be written together in the same file.
* For Android, by using the Java Native Interface (JNI) for C++ / Java interoperability.

### Testing
For UI unit and integration testing Qt provides the Qt Quick Test framework where you can write JavaScript functions to test your UI items. Qt provides all the necessary to simulate keyboard, mouse and touch events to drive the tests. Data models and external dependencies can easily be mocked directly inside QML.

For C++, the provided Qt Test framework gives basic testing functionality and is good for testing Qt flavoured C++ code (e.g. signals and slots). However I like to augment it with gMock of the GoogleTest framework to take full advantage of mocking.

### Maturity
As of the time of posting this article, Qt is 26 years old and the Qt Quick framework with QML 11 years old. Suffice to say Qt has a long history of providing cross-platform solutions and is in it for the long run.

### Expanding your app to other platforms
Say you're developing a mobile first app and it becomes successful and you want to now have a desktop presence on Windows, MacOS or Linux. When developing the mobile app you've already been running it on desktop. Releasing it for desktop is mainly a question of feature parity and optimising your UI for the desktop experience. Qt's first raison d'être was cross-platform desktop development so porting your existing app poses no great difficulty and most of the code will be reusable.

Furthermore, for certain kinds of apps you can also target the web with WebAssembly which Qt supports since a few years now. I say for certain kinds of apps because for basic CRUD applications you're better off using classic web technologies. However if the app is say an image editor or something of the same complexity, porting your mobile / desktop Qt application to the Web is a possibility.

### Core documentation
Qt’s documentation of its core classes is quite good and detailed. Thus anything involving writing the UI in QML, creating data models, making network calls, accessing your C++ layer from QML, writing unit tests, etc. the Qt doc has got you well covered and you generally don’t need to look elsewhere for help. However I’m specifically mentioning core documentation here since when you start leaving this core "bubble" of Qt, the docs begin lacking information. This brings us to some of the less favourable points of the Qt development experience.

## The bad
### Mobile is not a priority for Qt
After developing with Qt on mobile for some time, you definitely get the feeling that the mobile ecosystem is not a priority for Qt. Historically Qt is a cross-platform framework for building desktop apps so it comes as no surprise that Qt's tooling is more geared towards desktop development. Their [vision statement for Qt 6](https://www.qt.io/blog/2019/08/07/technical-vision-qt-6) states clearly that the desktop market is the root of their offering. But even so I do find the following puzzling:

* Why is it that for common problems in the mobile world, the official documentation provides no help and the search for it in Qt's forum often lead to just "use Felgo"? For those who don't know [Felgo](https://felgo.com/) is a 3rd party SDK that provides many enhancements to Qt, especially for mobile and gaming development. Felgo is an official partner to Qt. I have nothing against Felgo, but the fact that a go-to response for some basic functionality is to use a 3rd party SDK instead of the actual cross-platform framework is pretty damning, especially if one has already paid for a commercial license. Here are a few examples:

- How do you make your UI respect iOS and Android safe area margins to avoid screens being cut off by device notches?
- How do you integrate Firebase, one of the most widely used mobile SDKs?
- How do I change the device's status bar style?
- How do I open the native share menu to share content to other apps?
- How do I block my app in portrait mode but programmatically change the device's screen orientation to landscape for a certain screen?

And I could go on. This is basic stuff for mobile platform development. Furthermore what is frustrating is that **these problems can easily be solved without writing too much code** and without the need for external SDKs like Felgo if you have some experience and know how to interface with the native platform. Surely Qt could provide APIs for some or just update their documentation with examples of solutions to these common problems. This would especially be welcomed by newcomers to the Qt ecosystem. I will most likely provide solutions to these common problems in coming posts, so stay tuned if you are interested.

Speaking of examples, Qt's documentation provides "Get Started" guides for iOS and Android. That is fine however these pages also talk about loading the Qt Example library in Qt Creator to look at examples that are able to run on mobile. Now imagine you are new to Qt and are interested in using it for a mobile app development and you see this:

![Qt Creator examples](/images/posts/qt-creator-examples.png)

Do those examples look relevant to mobile development and inspire confidence in the framework? Why can't Qt provide an example of a modern looking mobile application? I just think that Qt could put more effort in guiding new Qt developers into the world of mobile development.

### No support for Swift
Apple officially still supports both Objective-C and Swift. However more and more iOS SDKs are becoming Swift only. As of yet I've still not found a solution to this problem and to be honest I haven't spent a lot of time on it. Thankfully I've gotten by with just Objective-C.

### Small community
Qt is a large framework with a rich history. However in the world of mobile development native is still king, followed by React Native and Flutter in terms of popularity. You will be hard pressed to find many examples of non-gaming mobile apps built with Qt. There just aren't that many developers using Qt for mobile so you can't expect the kind of community support (plugins, libraries, tooling options, etc...) that other technologies may offer.

### Lack of useful pre-built styles or common mobile design patterns
Qt Quick and its Qt Quick Controls 2 library comes with a few predefined styles, including a Material one. However the latter has not been updated in a few years to reflect changes to Google's official style. Other than that there is no iOS style. Now this is not a deal-breaker since all of Qt's controls can be customized and you can get your UI close to feeling native if you are willing to put in the effort. However the usefulness of high fidelity native looking controls is debatable in 2021. For example Google's mobile apps (YouTube for example) just stick with Material design on both iOS and Android. So this really comes down the needs of the app in question in terms of design and branding and how important native looking components are to you.

Here is a little Qt app I put together showing how with QML you can get native looking (in this case iOS) UI components and animations:
![Imitating iOS design patterns](/images/posts/qt-ios-style.gif)

### Tooling
#### Using the IDE of your choice
Qt offers Qt Creator, its own IDE for developing Qt apps. It gets the job done and works fine for everything Qt related (configuring projects, parsing QML and Qt C++, running tests, deploying to target devices / simulators, etc...). If you want to use another IDE you may find a few unofficial plugins to say parse QML files if you are lucky but you will be hard pressed to completely optimize your preferred IDE for Qt development.

Personally when working on a Qt mobile project I usually have multiple IDEs open. For example when working on Objective-C or Java code I prefer to work outside of Qt Creator because I just find the developer experience better for those languages. I also use Xcode and Android Studio quite a lot when needing to do in-depth profiling.

#### QML language server
QML is great but I would love to have an official language server, especially to run code linting in CI/CD pipelines. It would be really useful to flag programmatic and stylistic errors in pull requests. Being able to run code coverage on QML would be welcome as well (technically already possible if you purchase Coco by Froglogic).

#### Hot reload
For rapid development of the UI, the ability to hot reload is undeniably useful to reduce development time. Other cross platform frameworks like Flutter make hot reloading a main selling point and works out of the box. Sure Qt offers [QML Live](https://doc.qt.io/QMLLive/qmllive-index.html) as part of their Automotive Suit, but for general purpose apps there is no prebuilt solution in Qt. Otherwise in terms of 3rd party prebuilt solutions Felgo offers hot reloading of QML either on desktop or directly on your mobile devices using their Live Client apps.

Now this is not a major pain point since it is possible to quickly set up basic hot reloading yourself when testing your app on desktop. You can for example have your app load the QML UI files from source instead of the application binary and then set up a file system watcher to reload the UI every time a QML file is saved. If your app's UI references the C++ layer to determine state, the app's state will be preserved. Note that of course any changes to your C++, Objective-C or Java code you will need to recompile the app.

## Final thoughts
Qt is a large framework with a long history that provides a rich ecosystem of cross-platform solutions, whether that be for desktop, embedded or mobile platforms. However I would only recommend using Qt for mobile for companies or teams that have already invested in Qt for other platforms and now need a mobile solution for one of their business cases. Such companies would not be mobile first companies and would already have the necessary development talent to port to mobile. For mobile indie developers or people just getting into mobile development, I would not recommend Qt as their licensing model is geared more towards Enterprise accounts and the framework is not very beginner friendly. Furthermore for simple run-of-the-mill CRUD mobile applications other open-source cross-platform solutions with a wider developer base would likely be preferable.