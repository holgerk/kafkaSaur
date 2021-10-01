// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'requestV0'... Remove this comment to see the full error message
const requestV0 = require('../v0/request')

/**
 * SyncGroup Request (Version: 1) => group_id generation_id member_id [group_assignment]
 *   group_id => STRING
 *   generation_id => INT32
 *   member_id => STRING
 *   group_assignment => member_id member_assignment
 *     member_id => STRING
 *     member_assignment => BYTES
 */

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
export ({
 groupId,
 generationId,
 memberId,
 groupAssignment
}: any) =>
  // @ts-expect-error ts-migrate(2550) FIXME: Property 'assign' does not exist on type 'ObjectCo... Remove this comment to see the full error message
  Object.assign(requestV0({ groupId, generationId, memberId, groupAssignment }), { apiVersion: 1 })