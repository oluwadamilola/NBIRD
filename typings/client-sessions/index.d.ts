// Type definitions for client-sessions 0.7
// Project: https://github.com/mozilla/node-client-sessions
// Definitions by: Bond <https://github.com/bondz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'client-sessions' {
  import * as express from 'express';

  function sessions(options?: sessions.SessionOptions): express.RequestHandler;

  namespace sessions {
    /**
     * Supported HMAC Signature Algorithm
     */
    type SIGNATURE_ALGORITHMS =
      'sha256' |
      'sha256-drop128' |
      'sha384' |
      'sha384-drop192' |
      'sha512' |
      'sha512-drop256';

    /**
     * Supported CBC-mode Encryption Algorithms
     */
    type ENCRYPTION_ALGORITHMS =
      'aes128' |
      'aes192' |
      'aes256';

    export const util: Util;

    export interface Util {
      encode: (
        opts: encodingOpts,
        content: string | Buffer,
        duration?: number,
        createdAt?: number
      ) => string;
      decode: (opts: encodingOpts, content: string) => {
        content: string;
        createdAt: string;
        duration: string;
      };
      computeHmac: (
        opts: computeHmacOpts,
        iv: string | Buffer,
        ciphertext: string | Buffer,
        duration: string | number | Date,
        createdAt: string | number | Date
      ) => Buffer;
    }

    interface computeHmacOpts {
      signatureAlgorithm: string;
      signatureKey: string;
    }

    interface encodingOpts {
      cookieName: string,
      secret: string | Buffer;
      encryptionAlgorithm?: string;
      encryptionKey?: string;
      signatureAlgorithm?: string;
      signatureKey?: string;
    }

    export interface SessionOptions {
      /**
       * Dictates the key name added to the request object
       * defaults to "session_state"
       *
       * @type {string}
       * @default {string} session_state
       * @memberOf SessionOptions
       */
      cookieName?: string;
      /**
       * The string used to encrypt the cookie.
       *
       * @type {(string | Buffer)}
       * @memberOf SessionOptions
       */
      secret: string | Buffer;
      /**
       * Overrides {cookieName} for the key name added to the request object.
       *
       * @type {string}
       * @memberOf SessionOptions
       */
      requestKey?: string;
      /**
       *
       *
       * @type {number}
       * @memberOf SessionOptions
       */
      duration?: number;
      activeDuration?: number;
      cookie?: Cookie;
      encryptionAlgorithm?: ENCRYPTION_ALGORITHMS;
      encryptionKey?: string | Buffer;
      signatureAlgorithm?: SIGNATURE_ALGORITHMS;
      signatureKey?: string | Buffer;
    }

    interface Cookie {
      /**
       * Specifies path where cookies should only be sent to.
       *
       * @type {string}
       * @memberOf Cookie
       */
      path?: string;
      /**
       * Specifies if cookie should be accessible via javascript
       *
       * @type {boolean}
       * @memberOf Cookie
       */
      httpOnly?: boolean;
      /**
       * cookie will only be sent over SSL.
       * Use key 'secureProxy' instead if you handle SSL outside your node process
       *
       * @type {boolean}
       * @memberOf Cookie
       */
      secure?: boolean
      ephemeral?: boolean;
      maxAge?: number;
    }
  }

  export = sessions;
}

declare namespace Express {
  export interface Request {
    session: {
      destroy: () => void;
      reset: () => void;
      setDuration: () => void;
      [prop: string]: any;
    }
  }
}
