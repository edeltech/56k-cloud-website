/**
 * solution controller
 */

import {factories} from '@strapi/strapi'
import {getAllSlugs, getContentTypeBySlug} from '../../../utils/toolbox'

const uid = 'api::solution.solution'

export default factories.createCoreController(uid, () => ({
  findOne: (ctx) => getContentTypeBySlug(ctx, uid),
  slugs: () => getAllSlugs(uid)
}))