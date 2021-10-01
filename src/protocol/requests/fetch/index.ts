// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'ISOLATION_... Remove this comment to see the full error message
const ISOLATION_LEVEL = require('../../isolationLevel')

// For normal consumers, use -1
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'REPLICA_ID... Remove this comment to see the full error message
const REPLICA_ID = -1
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'NETWORK_DE... Remove this comment to see the full error message
const NETWORK_DELAY = 100

/**
 * The FETCH request can block up to maxWaitTime, which can be bigger than the configured
 * request timeout. It's safer to always use the maxWaitTime
 **/
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'requestTim... Remove this comment to see the full error message
const requestTimeout = (timeout: any) => Number.isSafeInteger(timeout + NETWORK_DELAY) ? timeout + NETWORK_DELAY : timeout

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'versions'.
const versions = {
  0: ({
    replicaId = REPLICA_ID,
    maxWaitTime,
    minBytes,
    topics
  }: any) => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const request = require('./v0/request')
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const response = require('./v0/response')
    return {
      request: request({ replicaId, maxWaitTime, minBytes, topics }),
      response,
      requestTimeout: requestTimeout(maxWaitTime),
    }
  },
  1: ({
    replicaId = REPLICA_ID,
    maxWaitTime,
    minBytes,
    topics
  }: any) => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const request = require('./v1/request')
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const response = require('./v1/response')
    return {
      request: request({ replicaId, maxWaitTime, minBytes, topics }),
      response,
      requestTimeout: requestTimeout(maxWaitTime),
    }
  },
  2: ({
    replicaId = REPLICA_ID,
    maxWaitTime,
    minBytes,
    topics
  }: any) => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const request = require('./v2/request')
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const response = require('./v2/response')
    return {
      request: request({ replicaId, maxWaitTime, minBytes, topics }),
      response,
      requestTimeout: requestTimeout(maxWaitTime),
    }
  },
  3: ({
    replicaId = REPLICA_ID,
    maxWaitTime,
    minBytes,
    maxBytes,
    topics
  }: any) => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const request = require('./v3/request')
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const response = require('./v3/response')
    return {
      request: request({ replicaId, maxWaitTime, minBytes, maxBytes, topics }),
      response,
      requestTimeout: requestTimeout(maxWaitTime),
    }
  },
  4: ({
    replicaId = REPLICA_ID,
    isolationLevel = ISOLATION_LEVEL.READ_COMMITTED,
    maxWaitTime,
    minBytes,
    maxBytes,
    topics
  }: any) => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const request = require('./v4/request')
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const response = require('./v4/response')
    return {
      request: request({ replicaId, isolationLevel, maxWaitTime, minBytes, maxBytes, topics }),
      response,
      requestTimeout: requestTimeout(maxWaitTime),
    }
  },
  5: ({
    replicaId = REPLICA_ID,
    isolationLevel = ISOLATION_LEVEL.READ_COMMITTED,
    maxWaitTime,
    minBytes,
    maxBytes,
    topics
  }: any) => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const request = require('./v5/request')
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const response = require('./v5/response')
    return {
      request: request({ replicaId, isolationLevel, maxWaitTime, minBytes, maxBytes, topics }),
      response,
      requestTimeout: requestTimeout(maxWaitTime),
    }
  },
  6: ({
    replicaId = REPLICA_ID,
    isolationLevel = ISOLATION_LEVEL.READ_COMMITTED,
    maxWaitTime,
    minBytes,
    maxBytes,
    topics
  }: any) => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const request = require('./v6/request')
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const response = require('./v6/response')
    return {
      request: request({ replicaId, isolationLevel, maxWaitTime, minBytes, maxBytes, topics }),
      response,
      requestTimeout: requestTimeout(maxWaitTime),
    }
  },
  7: ({
    replicaId = REPLICA_ID,
    isolationLevel = ISOLATION_LEVEL.READ_COMMITTED,
    sessionId = 0,
    sessionEpoch = -1,
    forgottenTopics = [],
    maxWaitTime,
    minBytes,
    maxBytes,
    topics
  }: any) => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const request = require('./v7/request')
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const response = require('./v7/response')
    return {
      request: request({
        replicaId,
        isolationLevel,
        sessionId,
        sessionEpoch,
        forgottenTopics,
        maxWaitTime,
        minBytes,
        maxBytes,
        topics,
      }),
      response,
      requestTimeout: requestTimeout(maxWaitTime),
    }
  },
  8: ({
    replicaId = REPLICA_ID,
    isolationLevel = ISOLATION_LEVEL.READ_COMMITTED,
    sessionId = 0,
    sessionEpoch = -1,
    forgottenTopics = [],
    maxWaitTime,
    minBytes,
    maxBytes,
    topics
  }: any) => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const request = require('./v8/request')
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const response = require('./v8/response')
    return {
      request: request({
        replicaId,
        isolationLevel,
        sessionId,
        sessionEpoch,
        forgottenTopics,
        maxWaitTime,
        minBytes,
        maxBytes,
        topics,
      }),
      response,
      requestTimeout: requestTimeout(maxWaitTime),
    }
  },
  9: ({
    replicaId = REPLICA_ID,
    isolationLevel = ISOLATION_LEVEL.READ_COMMITTED,
    sessionId = 0,
    sessionEpoch = -1,
    forgottenTopics = [],
    maxWaitTime,
    minBytes,
    maxBytes,
    topics
  }: any) => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const request = require('./v9/request')
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const response = require('./v9/response')
    return {
      request: request({
        replicaId,
        isolationLevel,
        sessionId,
        sessionEpoch,
        forgottenTopics,
        maxWaitTime,
        minBytes,
        maxBytes,
        topics,
      }),
      response,
      requestTimeout: requestTimeout(maxWaitTime),
    }
  },
  10: ({
    replicaId = REPLICA_ID,
    isolationLevel = ISOLATION_LEVEL.READ_COMMITTED,
    sessionId = 0,
    sessionEpoch = -1,
    forgottenTopics = [],
    maxWaitTime,
    minBytes,
    maxBytes,
    topics
  }: any) => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const request = require('./v10/request')
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const response = require('./v10/response')
    return {
      request: request({
        replicaId,
        isolationLevel,
        sessionId,
        sessionEpoch,
        forgottenTopics,
        maxWaitTime,
        minBytes,
        maxBytes,
        topics,
      }),
      response,
      requestTimeout: requestTimeout(maxWaitTime),
    }
  },
  11: ({
    replicaId = REPLICA_ID,
    isolationLevel = ISOLATION_LEVEL.READ_COMMITTED,
    sessionId = 0,
    sessionEpoch = -1,
    forgottenTopics = [],
    maxWaitTime,
    minBytes,
    maxBytes,
    topics,
    rackId
  }: any) => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const request = require('./v11/request')
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const response = require('./v11/response')
    return {
      request: request({
        replicaId,
        isolationLevel,
        sessionId,
        sessionEpoch,
        forgottenTopics,
        maxWaitTime,
        minBytes,
        maxBytes,
        topics,
        rackId,
      }),
      response,
      requestTimeout: requestTimeout(maxWaitTime),
    }
  },
}

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
export {
  versions: Object.keys(versions),
  protocol: ({
    version
  // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  }: any) => versions[version],
}