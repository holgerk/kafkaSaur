// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'requestV0'... Remove this comment to see the full error message
const requestV0 = require('../v0/request')

/**
 * DeleteTopics Request (Version: 1) => [topics] timeout
 *   topics => STRING
 *   timeout => INT32
 */

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
export ({
 topics,
 timeout
}: any) =>
  // @ts-expect-error ts-migrate(2550) FIXME: Property 'assign' does not exist on type 'ObjectCo... Remove this comment to see the full error message
  Object.assign(requestV0({ topics, timeout }), { apiVersion: 1 })