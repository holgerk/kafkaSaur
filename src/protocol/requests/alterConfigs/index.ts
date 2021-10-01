/** @format */

const versions = {
  0: ({ resources, validateOnly }: any) => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const request = require('./v0/request');
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const response = require('./v0/response');
    return { request: request({ resources, validateOnly }), response };
  },
  1: ({ resources, validateOnly }: any) => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const request = require('./v1/request');
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const response = require('./v1/response');
    return { request: request({ resources, validateOnly }), response };
  },
};

export default {
  versions: Object.keys(versions),
  protocol: ({
    version,
  }: // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  any) => versions[version],
};
