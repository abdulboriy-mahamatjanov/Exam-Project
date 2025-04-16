
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Regions
 * 
 */
export type Regions = $Result.DefaultSelection<Prisma.$RegionsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Sessions
 * 
 */
export type Sessions = $Result.DefaultSelection<Prisma.$SessionsPayload>
/**
 * Model Contacts
 * 
 */
export type Contacts = $Result.DefaultSelection<Prisma.$ContactsPayload>
/**
 * Model DataAboutCompany
 * 
 */
export type DataAboutCompany = $Result.DefaultSelection<Prisma.$DataAboutCompanyPayload>
/**
 * Model ShowCases
 * 
 */
export type ShowCases = $Result.DefaultSelection<Prisma.$ShowCasesPayload>
/**
 * Model FAQ
 * 
 */
export type FAQ = $Result.DefaultSelection<Prisma.$FAQPayload>
/**
 * Model AboutOurPage
 * 
 */
export type AboutOurPage = $Result.DefaultSelection<Prisma.$AboutOurPagePayload>
/**
 * Model Partners
 * 
 */
export type Partners = $Result.DefaultSelection<Prisma.$PartnersPayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model Stars
 * 
 */
export type Stars = $Result.DefaultSelection<Prisma.$StarsPayload>
/**
 * Model Levels
 * 
 */
export type Levels = $Result.DefaultSelection<Prisma.$LevelsPayload>
/**
 * Model Capacity
 * 
 */
export type Capacity = $Result.DefaultSelection<Prisma.$CapacityPayload>
/**
 * Model Sizes
 * 
 */
export type Sizes = $Result.DefaultSelection<Prisma.$SizesPayload>
/**
 * Model Brands
 * 
 */
export type Brands = $Result.DefaultSelection<Prisma.$BrandsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
  VIEWER_ADMIN: 'VIEWER_ADMIN',
  USER_FIZ: 'USER_FIZ',
  USER_YUR: 'USER_YUR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Regions
 * const regions = await prisma.regions.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Regions
   * const regions = await prisma.regions.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.regions`: Exposes CRUD operations for the **Regions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.regions.findMany()
    * ```
    */
  get regions(): Prisma.RegionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **Sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.SessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contacts`: Exposes CRUD operations for the **Contacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contacts.findMany()
    * ```
    */
  get contacts(): Prisma.ContactsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataAboutCompany`: Exposes CRUD operations for the **DataAboutCompany** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataAboutCompanies
    * const dataAboutCompanies = await prisma.dataAboutCompany.findMany()
    * ```
    */
  get dataAboutCompany(): Prisma.DataAboutCompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.showCases`: Exposes CRUD operations for the **ShowCases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShowCases
    * const showCases = await prisma.showCases.findMany()
    * ```
    */
  get showCases(): Prisma.ShowCasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fAQ`: Exposes CRUD operations for the **FAQ** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FAQS
    * const fAQS = await prisma.fAQ.findMany()
    * ```
    */
  get fAQ(): Prisma.FAQDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aboutOurPage`: Exposes CRUD operations for the **AboutOurPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutOurPages
    * const aboutOurPages = await prisma.aboutOurPage.findMany()
    * ```
    */
  get aboutOurPage(): Prisma.AboutOurPageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partners`: Exposes CRUD operations for the **Partners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partners
    * const partners = await prisma.partners.findMany()
    * ```
    */
  get partners(): Prisma.PartnersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stars`: Exposes CRUD operations for the **Stars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stars
    * const stars = await prisma.stars.findMany()
    * ```
    */
  get stars(): Prisma.StarsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.levels`: Exposes CRUD operations for the **Levels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Levels
    * const levels = await prisma.levels.findMany()
    * ```
    */
  get levels(): Prisma.LevelsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.capacity`: Exposes CRUD operations for the **Capacity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Capacities
    * const capacities = await prisma.capacity.findMany()
    * ```
    */
  get capacity(): Prisma.CapacityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sizes`: Exposes CRUD operations for the **Sizes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sizes
    * const sizes = await prisma.sizes.findMany()
    * ```
    */
  get sizes(): Prisma.SizesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brands`: Exposes CRUD operations for the **Brands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brands.findMany()
    * ```
    */
  get brands(): Prisma.BrandsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Regions: 'Regions',
    Users: 'Users',
    Sessions: 'Sessions',
    Contacts: 'Contacts',
    DataAboutCompany: 'DataAboutCompany',
    ShowCases: 'ShowCases',
    FAQ: 'FAQ',
    AboutOurPage: 'AboutOurPage',
    Partners: 'Partners',
    Comments: 'Comments',
    Stars: 'Stars',
    Levels: 'Levels',
    Capacity: 'Capacity',
    Sizes: 'Sizes',
    Brands: 'Brands'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "regions" | "users" | "sessions" | "contacts" | "dataAboutCompany" | "showCases" | "fAQ" | "aboutOurPage" | "partners" | "comments" | "stars" | "levels" | "capacity" | "sizes" | "brands"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Regions: {
        payload: Prisma.$RegionsPayload<ExtArgs>
        fields: Prisma.RegionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          findFirst: {
            args: Prisma.RegionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          findMany: {
            args: Prisma.RegionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>[]
          }
          create: {
            args: Prisma.RegionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          createMany: {
            args: Prisma.RegionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>[]
          }
          delete: {
            args: Prisma.RegionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          update: {
            args: Prisma.RegionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          deleteMany: {
            args: Prisma.RegionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>[]
          }
          upsert: {
            args: Prisma.RegionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          aggregate: {
            args: Prisma.RegionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegions>
          }
          groupBy: {
            args: Prisma.RegionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionsCountArgs<ExtArgs>
            result: $Utils.Optional<RegionsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Sessions: {
        payload: Prisma.$SessionsPayload<ExtArgs>
        fields: Prisma.SessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findFirst: {
            args: Prisma.SessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findMany: {
            args: Prisma.SessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          create: {
            args: Prisma.SessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          createMany: {
            args: Prisma.SessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          delete: {
            args: Prisma.SessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          update: {
            args: Prisma.SessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          deleteMany: {
            args: Prisma.SessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          upsert: {
            args: Prisma.SessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.SessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      Contacts: {
        payload: Prisma.$ContactsPayload<ExtArgs>
        fields: Prisma.ContactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          findFirst: {
            args: Prisma.ContactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          findMany: {
            args: Prisma.ContactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          create: {
            args: Prisma.ContactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          createMany: {
            args: Prisma.ContactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          delete: {
            args: Prisma.ContactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          update: {
            args: Prisma.ContactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          deleteMany: {
            args: Prisma.ContactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          upsert: {
            args: Prisma.ContactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          aggregate: {
            args: Prisma.ContactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContacts>
          }
          groupBy: {
            args: Prisma.ContactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactsCountArgs<ExtArgs>
            result: $Utils.Optional<ContactsCountAggregateOutputType> | number
          }
        }
      }
      DataAboutCompany: {
        payload: Prisma.$DataAboutCompanyPayload<ExtArgs>
        fields: Prisma.DataAboutCompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataAboutCompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAboutCompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataAboutCompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAboutCompanyPayload>
          }
          findFirst: {
            args: Prisma.DataAboutCompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAboutCompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataAboutCompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAboutCompanyPayload>
          }
          findMany: {
            args: Prisma.DataAboutCompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAboutCompanyPayload>[]
          }
          create: {
            args: Prisma.DataAboutCompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAboutCompanyPayload>
          }
          createMany: {
            args: Prisma.DataAboutCompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataAboutCompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAboutCompanyPayload>[]
          }
          delete: {
            args: Prisma.DataAboutCompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAboutCompanyPayload>
          }
          update: {
            args: Prisma.DataAboutCompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAboutCompanyPayload>
          }
          deleteMany: {
            args: Prisma.DataAboutCompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataAboutCompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataAboutCompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAboutCompanyPayload>[]
          }
          upsert: {
            args: Prisma.DataAboutCompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataAboutCompanyPayload>
          }
          aggregate: {
            args: Prisma.DataAboutCompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataAboutCompany>
          }
          groupBy: {
            args: Prisma.DataAboutCompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataAboutCompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataAboutCompanyCountArgs<ExtArgs>
            result: $Utils.Optional<DataAboutCompanyCountAggregateOutputType> | number
          }
        }
      }
      ShowCases: {
        payload: Prisma.$ShowCasesPayload<ExtArgs>
        fields: Prisma.ShowCasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowCasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowCasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCasesPayload>
          }
          findFirst: {
            args: Prisma.ShowCasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowCasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCasesPayload>
          }
          findMany: {
            args: Prisma.ShowCasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCasesPayload>[]
          }
          create: {
            args: Prisma.ShowCasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCasesPayload>
          }
          createMany: {
            args: Prisma.ShowCasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShowCasesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCasesPayload>[]
          }
          delete: {
            args: Prisma.ShowCasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCasesPayload>
          }
          update: {
            args: Prisma.ShowCasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCasesPayload>
          }
          deleteMany: {
            args: Prisma.ShowCasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShowCasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShowCasesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCasesPayload>[]
          }
          upsert: {
            args: Prisma.ShowCasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCasesPayload>
          }
          aggregate: {
            args: Prisma.ShowCasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShowCases>
          }
          groupBy: {
            args: Prisma.ShowCasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowCasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowCasesCountArgs<ExtArgs>
            result: $Utils.Optional<ShowCasesCountAggregateOutputType> | number
          }
        }
      }
      FAQ: {
        payload: Prisma.$FAQPayload<ExtArgs>
        fields: Prisma.FAQFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FAQFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FAQFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findFirst: {
            args: Prisma.FAQFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FAQFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findMany: {
            args: Prisma.FAQFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          create: {
            args: Prisma.FAQCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          createMany: {
            args: Prisma.FAQCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FAQCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          delete: {
            args: Prisma.FAQDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          update: {
            args: Prisma.FAQUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          deleteMany: {
            args: Prisma.FAQDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FAQUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FAQUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          upsert: {
            args: Prisma.FAQUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          aggregate: {
            args: Prisma.FAQAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFAQ>
          }
          groupBy: {
            args: Prisma.FAQGroupByArgs<ExtArgs>
            result: $Utils.Optional<FAQGroupByOutputType>[]
          }
          count: {
            args: Prisma.FAQCountArgs<ExtArgs>
            result: $Utils.Optional<FAQCountAggregateOutputType> | number
          }
        }
      }
      AboutOurPage: {
        payload: Prisma.$AboutOurPagePayload<ExtArgs>
        fields: Prisma.AboutOurPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutOurPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutOurPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutOurPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutOurPagePayload>
          }
          findFirst: {
            args: Prisma.AboutOurPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutOurPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutOurPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutOurPagePayload>
          }
          findMany: {
            args: Prisma.AboutOurPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutOurPagePayload>[]
          }
          create: {
            args: Prisma.AboutOurPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutOurPagePayload>
          }
          createMany: {
            args: Prisma.AboutOurPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutOurPageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutOurPagePayload>[]
          }
          delete: {
            args: Prisma.AboutOurPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutOurPagePayload>
          }
          update: {
            args: Prisma.AboutOurPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutOurPagePayload>
          }
          deleteMany: {
            args: Prisma.AboutOurPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutOurPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AboutOurPageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutOurPagePayload>[]
          }
          upsert: {
            args: Prisma.AboutOurPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutOurPagePayload>
          }
          aggregate: {
            args: Prisma.AboutOurPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutOurPage>
          }
          groupBy: {
            args: Prisma.AboutOurPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutOurPageGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutOurPageCountArgs<ExtArgs>
            result: $Utils.Optional<AboutOurPageCountAggregateOutputType> | number
          }
        }
      }
      Partners: {
        payload: Prisma.$PartnersPayload<ExtArgs>
        fields: Prisma.PartnersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnersPayload>
          }
          findFirst: {
            args: Prisma.PartnersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnersPayload>
          }
          findMany: {
            args: Prisma.PartnersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnersPayload>[]
          }
          create: {
            args: Prisma.PartnersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnersPayload>
          }
          createMany: {
            args: Prisma.PartnersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartnersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnersPayload>[]
          }
          delete: {
            args: Prisma.PartnersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnersPayload>
          }
          update: {
            args: Prisma.PartnersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnersPayload>
          }
          deleteMany: {
            args: Prisma.PartnersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartnersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnersPayload>[]
          }
          upsert: {
            args: Prisma.PartnersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnersPayload>
          }
          aggregate: {
            args: Prisma.PartnersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartners>
          }
          groupBy: {
            args: Prisma.PartnersGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnersGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnersCountArgs<ExtArgs>
            result: $Utils.Optional<PartnersCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      Stars: {
        payload: Prisma.$StarsPayload<ExtArgs>
        fields: Prisma.StarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StarsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StarsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          findFirst: {
            args: Prisma.StarsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StarsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          findMany: {
            args: Prisma.StarsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>[]
          }
          create: {
            args: Prisma.StarsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          createMany: {
            args: Prisma.StarsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StarsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>[]
          }
          delete: {
            args: Prisma.StarsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          update: {
            args: Prisma.StarsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          deleteMany: {
            args: Prisma.StarsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StarsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StarsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>[]
          }
          upsert: {
            args: Prisma.StarsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarsPayload>
          }
          aggregate: {
            args: Prisma.StarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStars>
          }
          groupBy: {
            args: Prisma.StarsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StarsCountArgs<ExtArgs>
            result: $Utils.Optional<StarsCountAggregateOutputType> | number
          }
        }
      }
      Levels: {
        payload: Prisma.$LevelsPayload<ExtArgs>
        fields: Prisma.LevelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LevelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LevelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelsPayload>
          }
          findFirst: {
            args: Prisma.LevelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LevelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelsPayload>
          }
          findMany: {
            args: Prisma.LevelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelsPayload>[]
          }
          create: {
            args: Prisma.LevelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelsPayload>
          }
          createMany: {
            args: Prisma.LevelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LevelsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelsPayload>[]
          }
          delete: {
            args: Prisma.LevelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelsPayload>
          }
          update: {
            args: Prisma.LevelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelsPayload>
          }
          deleteMany: {
            args: Prisma.LevelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LevelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LevelsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelsPayload>[]
          }
          upsert: {
            args: Prisma.LevelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelsPayload>
          }
          aggregate: {
            args: Prisma.LevelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLevels>
          }
          groupBy: {
            args: Prisma.LevelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LevelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LevelsCountArgs<ExtArgs>
            result: $Utils.Optional<LevelsCountAggregateOutputType> | number
          }
        }
      }
      Capacity: {
        payload: Prisma.$CapacityPayload<ExtArgs>
        fields: Prisma.CapacityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CapacityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CapacityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          findFirst: {
            args: Prisma.CapacityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CapacityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          findMany: {
            args: Prisma.CapacityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>[]
          }
          create: {
            args: Prisma.CapacityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          createMany: {
            args: Prisma.CapacityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CapacityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>[]
          }
          delete: {
            args: Prisma.CapacityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          update: {
            args: Prisma.CapacityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          deleteMany: {
            args: Prisma.CapacityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CapacityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CapacityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>[]
          }
          upsert: {
            args: Prisma.CapacityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          aggregate: {
            args: Prisma.CapacityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCapacity>
          }
          groupBy: {
            args: Prisma.CapacityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CapacityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CapacityCountArgs<ExtArgs>
            result: $Utils.Optional<CapacityCountAggregateOutputType> | number
          }
        }
      }
      Sizes: {
        payload: Prisma.$SizesPayload<ExtArgs>
        fields: Prisma.SizesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SizesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SizesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>
          }
          findFirst: {
            args: Prisma.SizesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SizesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>
          }
          findMany: {
            args: Prisma.SizesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>[]
          }
          create: {
            args: Prisma.SizesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>
          }
          createMany: {
            args: Prisma.SizesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SizesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>[]
          }
          delete: {
            args: Prisma.SizesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>
          }
          update: {
            args: Prisma.SizesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>
          }
          deleteMany: {
            args: Prisma.SizesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SizesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SizesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>[]
          }
          upsert: {
            args: Prisma.SizesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>
          }
          aggregate: {
            args: Prisma.SizesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSizes>
          }
          groupBy: {
            args: Prisma.SizesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SizesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SizesCountArgs<ExtArgs>
            result: $Utils.Optional<SizesCountAggregateOutputType> | number
          }
        }
      }
      Brands: {
        payload: Prisma.$BrandsPayload<ExtArgs>
        fields: Prisma.BrandsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          findFirst: {
            args: Prisma.BrandsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          findMany: {
            args: Prisma.BrandsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>[]
          }
          create: {
            args: Prisma.BrandsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          createMany: {
            args: Prisma.BrandsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>[]
          }
          delete: {
            args: Prisma.BrandsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          update: {
            args: Prisma.BrandsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          deleteMany: {
            args: Prisma.BrandsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>[]
          }
          upsert: {
            args: Prisma.BrandsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          aggregate: {
            args: Prisma.BrandsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrands>
          }
          groupBy: {
            args: Prisma.BrandsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandsCountArgs<ExtArgs>
            result: $Utils.Optional<BrandsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    regions?: RegionsOmit
    users?: UsersOmit
    sessions?: SessionsOmit
    contacts?: ContactsOmit
    dataAboutCompany?: DataAboutCompanyOmit
    showCases?: ShowCasesOmit
    fAQ?: FAQOmit
    aboutOurPage?: AboutOurPageOmit
    partners?: PartnersOmit
    comments?: CommentsOmit
    stars?: StarsOmit
    levels?: LevelsOmit
    capacity?: CapacityOmit
    sizes?: SizesOmit
    brands?: BrandsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RegionsCountOutputType
   */

  export type RegionsCountOutputType = {
    Users: number
  }

  export type RegionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | RegionsCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RegionsCountOutputType without action
   */
  export type RegionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionsCountOutputType
     */
    select?: RegionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionsCountOutputType without action
   */
  export type RegionsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Regions
   */

  export type AggregateRegions = {
    _count: RegionsCountAggregateOutputType | null
    _min: RegionsMinAggregateOutputType | null
    _max: RegionsMaxAggregateOutputType | null
  }

  export type RegionsMinAggregateOutputType = {
    id: string | null
    nameUz: string | null
    nameRu: string | null
    nameEn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegionsMaxAggregateOutputType = {
    id: string | null
    nameUz: string | null
    nameRu: string | null
    nameEn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegionsCountAggregateOutputType = {
    id: number
    nameUz: number
    nameRu: number
    nameEn: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegionsMinAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegionsMaxAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegionsCountAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RegionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to aggregate.
     */
    where?: RegionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionsOrderByWithRelationInput | RegionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionsMaxAggregateInputType
  }

  export type GetRegionsAggregateType<T extends RegionsAggregateArgs> = {
        [P in keyof T & keyof AggregateRegions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegions[P]>
      : GetScalarType<T[P], AggregateRegions[P]>
  }




  export type RegionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionsWhereInput
    orderBy?: RegionsOrderByWithAggregationInput | RegionsOrderByWithAggregationInput[]
    by: RegionsScalarFieldEnum[] | RegionsScalarFieldEnum
    having?: RegionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionsCountAggregateInputType | true
    _min?: RegionsMinAggregateInputType
    _max?: RegionsMaxAggregateInputType
  }

  export type RegionsGroupByOutputType = {
    id: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt: Date
    updatedAt: Date
    _count: RegionsCountAggregateOutputType | null
    _min: RegionsMinAggregateOutputType | null
    _max: RegionsMaxAggregateOutputType | null
  }

  type GetRegionsGroupByPayload<T extends RegionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionsGroupByOutputType[P]>
            : GetScalarType<T[P], RegionsGroupByOutputType[P]>
        }
      >
    >


  export type RegionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | Regions$UsersArgs<ExtArgs>
    _count?: boolean | RegionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regions"]>

  export type RegionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["regions"]>

  export type RegionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["regions"]>

  export type RegionsSelectScalar = {
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RegionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameUz" | "nameRu" | "nameEn" | "createdAt" | "updatedAt", ExtArgs["result"]["regions"]>
  export type RegionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Regions$UsersArgs<ExtArgs>
    _count?: boolean | RegionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RegionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RegionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Regions"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameUz: string
      nameRu: string
      nameEn: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["regions"]>
    composites: {}
  }

  type RegionsGetPayload<S extends boolean | null | undefined | RegionsDefaultArgs> = $Result.GetResult<Prisma.$RegionsPayload, S>

  type RegionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionsCountAggregateInputType | true
    }

  export interface RegionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Regions'], meta: { name: 'Regions' } }
    /**
     * Find zero or one Regions that matches the filter.
     * @param {RegionsFindUniqueArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionsFindUniqueArgs>(args: SelectSubset<T, RegionsFindUniqueArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Regions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionsFindUniqueOrThrowArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionsFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsFindFirstArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionsFindFirstArgs>(args?: SelectSubset<T, RegionsFindFirstArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsFindFirstOrThrowArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionsFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.regions.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.regions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionsWithIdOnly = await prisma.regions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionsFindManyArgs>(args?: SelectSubset<T, RegionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Regions.
     * @param {RegionsCreateArgs} args - Arguments to create a Regions.
     * @example
     * // Create one Regions
     * const Regions = await prisma.regions.create({
     *   data: {
     *     // ... data to create a Regions
     *   }
     * })
     * 
     */
    create<T extends RegionsCreateArgs>(args: SelectSubset<T, RegionsCreateArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {RegionsCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const regions = await prisma.regions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionsCreateManyArgs>(args?: SelectSubset<T, RegionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {RegionsCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const regions = await prisma.regions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `id`
     * const regionsWithIdOnly = await prisma.regions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegionsCreateManyAndReturnArgs>(args?: SelectSubset<T, RegionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Regions.
     * @param {RegionsDeleteArgs} args - Arguments to delete one Regions.
     * @example
     * // Delete one Regions
     * const Regions = await prisma.regions.delete({
     *   where: {
     *     // ... filter to delete one Regions
     *   }
     * })
     * 
     */
    delete<T extends RegionsDeleteArgs>(args: SelectSubset<T, RegionsDeleteArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Regions.
     * @param {RegionsUpdateArgs} args - Arguments to update one Regions.
     * @example
     * // Update one Regions
     * const regions = await prisma.regions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionsUpdateArgs>(args: SelectSubset<T, RegionsUpdateArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {RegionsDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.regions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionsDeleteManyArgs>(args?: SelectSubset<T, RegionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const regions = await prisma.regions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionsUpdateManyArgs>(args: SelectSubset<T, RegionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions and returns the data updated in the database.
     * @param {RegionsUpdateManyAndReturnArgs} args - Arguments to update many Regions.
     * @example
     * // Update many Regions
     * const regions = await prisma.regions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regions and only return the `id`
     * const regionsWithIdOnly = await prisma.regions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegionsUpdateManyAndReturnArgs>(args: SelectSubset<T, RegionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Regions.
     * @param {RegionsUpsertArgs} args - Arguments to update or create a Regions.
     * @example
     * // Update or create a Regions
     * const regions = await prisma.regions.upsert({
     *   create: {
     *     // ... data to create a Regions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regions we want to update
     *   }
     * })
     */
    upsert<T extends RegionsUpsertArgs>(args: SelectSubset<T, RegionsUpsertArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.regions.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionsCountArgs>(
      args?: Subset<T, RegionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegionsAggregateArgs>(args: Subset<T, RegionsAggregateArgs>): Prisma.PrismaPromise<GetRegionsAggregateType<T>>

    /**
     * Group by Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionsGroupByArgs['orderBy'] }
        : { orderBy?: RegionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Regions model
   */
  readonly fields: RegionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Regions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Regions$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Regions$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Regions model
   */
  interface RegionsFieldRefs {
    readonly id: FieldRef<"Regions", 'String'>
    readonly nameUz: FieldRef<"Regions", 'String'>
    readonly nameRu: FieldRef<"Regions", 'String'>
    readonly nameEn: FieldRef<"Regions", 'String'>
    readonly createdAt: FieldRef<"Regions", 'DateTime'>
    readonly updatedAt: FieldRef<"Regions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Regions findUnique
   */
  export type RegionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where: RegionsWhereUniqueInput
  }

  /**
   * Regions findUniqueOrThrow
   */
  export type RegionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where: RegionsWhereUniqueInput
  }

  /**
   * Regions findFirst
   */
  export type RegionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionsOrderByWithRelationInput | RegionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * Regions findFirstOrThrow
   */
  export type RegionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionsOrderByWithRelationInput | RegionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * Regions findMany
   */
  export type RegionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionsOrderByWithRelationInput | RegionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * Regions create
   */
  export type RegionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Regions.
     */
    data: XOR<RegionsCreateInput, RegionsUncheckedCreateInput>
  }

  /**
   * Regions createMany
   */
  export type RegionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionsCreateManyInput | RegionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Regions createManyAndReturn
   */
  export type RegionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * The data used to create many Regions.
     */
    data: RegionsCreateManyInput | RegionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Regions update
   */
  export type RegionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Regions.
     */
    data: XOR<RegionsUpdateInput, RegionsUncheckedUpdateInput>
    /**
     * Choose, which Regions to update.
     */
    where: RegionsWhereUniqueInput
  }

  /**
   * Regions updateMany
   */
  export type RegionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionsUpdateManyMutationInput, RegionsUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionsWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Regions updateManyAndReturn
   */
  export type RegionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionsUpdateManyMutationInput, RegionsUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionsWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Regions upsert
   */
  export type RegionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Regions to update in case it exists.
     */
    where: RegionsWhereUniqueInput
    /**
     * In case the Regions found by the `where` argument doesn't exist, create a new Regions with this data.
     */
    create: XOR<RegionsCreateInput, RegionsUncheckedCreateInput>
    /**
     * In case the Regions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionsUpdateInput, RegionsUncheckedUpdateInput>
  }

  /**
   * Regions delete
   */
  export type RegionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter which Regions to delete.
     */
    where: RegionsWhereUniqueInput
  }

  /**
   * Regions deleteMany
   */
  export type RegionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionsWhereInput
    /**
     * Limit how many Regions to delete.
     */
    limit?: number
  }

  /**
   * Regions.Users
   */
  export type Regions$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Regions without action
   */
  export type RegionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regions
     */
    omit?: RegionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    phone: string | null
    password: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    avatar: string | null
    regionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    phone: string | null
    password: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    avatar: string | null
    regionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    fullName: number
    phone: number
    password: number
    role: number
    status: number
    avatar: number
    regionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    password?: true
    role?: true
    status?: true
    avatar?: true
    regionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    password?: true
    role?: true
    status?: true
    avatar?: true
    regionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    password?: true
    role?: true
    status?: true
    avatar?: true
    regionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    fullName: string
    phone: string
    password: string
    role: $Enums.UserRole
    status: $Enums.UserStatus
    avatar: string
    regionId: string
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    avatar?: boolean
    regionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    region?: boolean | RegionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    avatar?: boolean
    regionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    region?: boolean | RegionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    avatar?: boolean
    regionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    region?: boolean | RegionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    fullName?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    avatar?: boolean
    regionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "phone" | "password" | "role" | "status" | "avatar" | "regionId" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionsDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionsDefaultArgs<ExtArgs>
  }
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionsDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      region: Prisma.$RegionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      phone: string
      password: string
      role: $Enums.UserRole
      status: $Enums.UserStatus
      avatar: string
      regionId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    region<T extends RegionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionsDefaultArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly fullName: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'UserRole'>
    readonly status: FieldRef<"Users", 'UserStatus'>
    readonly avatar: FieldRef<"Users", 'String'>
    readonly regionId: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    userId: number
    ipAddress: number
    deviceInfo: number
    createdAt: number
    _all: number
  }


  export type SessionsMinAggregateInputType = {
    id?: true
    userId?: true
    ipAddress?: true
    createdAt?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    userId?: true
    ipAddress?: true
    createdAt?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    userId?: true
    ipAddress?: true
    deviceInfo?: true
    createdAt?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to aggregate.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type SessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithAggregationInput | SessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: SessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: string
    userId: string
    ipAddress: string
    deviceInfo: JsonValue
    createdAt: Date
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends SessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type SessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ipAddress?: boolean
    deviceInfo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ipAddress?: boolean
    deviceInfo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ipAddress?: boolean
    deviceInfo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectScalar = {
    id?: boolean
    userId?: boolean
    ipAddress?: boolean
    deviceInfo?: boolean
    createdAt?: boolean
  }

  export type SessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ipAddress" | "deviceInfo" | "createdAt", ExtArgs["result"]["sessions"]>

  export type $SessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sessions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ipAddress: string
      deviceInfo: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type SessionsGetPayload<S extends boolean | null | undefined | SessionsDefaultArgs> = $Result.GetResult<Prisma.$SessionsPayload, S>

  type SessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface SessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sessions'], meta: { name: 'Sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {SessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionsFindUniqueArgs>(args: SelectSubset<T, SessionsFindUniqueArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionsFindFirstArgs>(args?: SelectSubset<T, SessionsFindFirstArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionsFindManyArgs>(args?: SelectSubset<T, SessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {SessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends SessionsCreateArgs>(args: SelectSubset<T, SessionsCreateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionsCreateManyArgs>(args?: SelectSubset<T, SessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionsCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessions.
     * @param {SessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends SessionsDeleteArgs>(args: SelectSubset<T, SessionsDeleteArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {SessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionsUpdateArgs>(args: SelectSubset<T, SessionsUpdateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionsDeleteManyArgs>(args?: SelectSubset<T, SessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionsUpdateManyArgs>(args: SelectSubset<T, SessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionsUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessions.
     * @param {SessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends SessionsUpsertArgs>(args: SelectSubset<T, SessionsUpsertArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionsCountArgs>(
      args?: Subset<T, SessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionsGroupByArgs['orderBy'] }
        : { orderBy?: SessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sessions model
   */
  readonly fields: SessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sessions model
   */
  interface SessionsFieldRefs {
    readonly id: FieldRef<"Sessions", 'String'>
    readonly userId: FieldRef<"Sessions", 'String'>
    readonly ipAddress: FieldRef<"Sessions", 'String'>
    readonly deviceInfo: FieldRef<"Sessions", 'Json'>
    readonly createdAt: FieldRef<"Sessions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sessions findUnique
   */
  export type SessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findUniqueOrThrow
   */
  export type SessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findFirst
   */
  export type SessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findFirstOrThrow
   */
  export type SessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findMany
   */
  export type SessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions create
   */
  export type SessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data needed to create a Sessions.
     */
    data: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
  }

  /**
   * Sessions createMany
   */
  export type SessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionsCreateManyInput | SessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sessions createManyAndReturn
   */
  export type SessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionsCreateManyInput | SessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sessions update
   */
  export type SessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data needed to update a Sessions.
     */
    data: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
    /**
     * Choose, which Sessions to update.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions updateMany
   */
  export type SessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Sessions updateManyAndReturn
   */
  export type SessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Sessions upsert
   */
  export type SessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The filter to search for the Sessions to update in case it exists.
     */
    where: SessionsWhereUniqueInput
    /**
     * In case the Sessions found by the `where` argument doesn't exist, create a new Sessions with this data.
     */
    create: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
    /**
     * In case the Sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
  }

  /**
   * Sessions delete
   */
  export type SessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Filter which Sessions to delete.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions deleteMany
   */
  export type SessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Sessions without action
   */
  export type SessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
  }


  /**
   * Model Contacts
   */

  export type AggregateContacts = {
    _count: ContactsCountAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  export type ContactsMinAggregateOutputType = {
    id: string | null
    name: string | null
    surName: string | null
    phone: string | null
    address: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    surName: string | null
    phone: string | null
    address: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactsCountAggregateOutputType = {
    id: number
    name: number
    surName: number
    phone: number
    address: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactsMinAggregateInputType = {
    id?: true
    name?: true
    surName?: true
    phone?: true
    address?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactsMaxAggregateInputType = {
    id?: true
    name?: true
    surName?: true
    phone?: true
    address?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactsCountAggregateInputType = {
    id?: true
    name?: true
    surName?: true
    phone?: true
    address?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to aggregate.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactsMaxAggregateInputType
  }

  export type GetContactsAggregateType<T extends ContactsAggregateArgs> = {
        [P in keyof T & keyof AggregateContacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacts[P]>
      : GetScalarType<T[P], AggregateContacts[P]>
  }




  export type ContactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactsWhereInput
    orderBy?: ContactsOrderByWithAggregationInput | ContactsOrderByWithAggregationInput[]
    by: ContactsScalarFieldEnum[] | ContactsScalarFieldEnum
    having?: ContactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactsCountAggregateInputType | true
    _min?: ContactsMinAggregateInputType
    _max?: ContactsMaxAggregateInputType
  }

  export type ContactsGroupByOutputType = {
    id: string
    name: string
    surName: string
    phone: string
    address: string
    message: string
    createdAt: Date
    updatedAt: Date
    _count: ContactsCountAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  type GetContactsGroupByPayload<T extends ContactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactsGroupByOutputType[P]>
        }
      >
    >


  export type ContactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surName?: boolean
    phone?: boolean
    address?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contacts"]>

  export type ContactsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surName?: boolean
    phone?: boolean
    address?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contacts"]>

  export type ContactsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surName?: boolean
    phone?: boolean
    address?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contacts"]>

  export type ContactsSelectScalar = {
    id?: boolean
    name?: boolean
    surName?: boolean
    phone?: boolean
    address?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "surName" | "phone" | "address" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["contacts"]>

  export type $ContactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contacts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      surName: string
      phone: string
      address: string
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contacts"]>
    composites: {}
  }

  type ContactsGetPayload<S extends boolean | null | undefined | ContactsDefaultArgs> = $Result.GetResult<Prisma.$ContactsPayload, S>

  type ContactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactsCountAggregateInputType | true
    }

  export interface ContactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contacts'], meta: { name: 'Contacts' } }
    /**
     * Find zero or one Contacts that matches the filter.
     * @param {ContactsFindUniqueArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactsFindUniqueArgs>(args: SelectSubset<T, ContactsFindUniqueArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contacts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactsFindUniqueOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindFirstArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactsFindFirstArgs>(args?: SelectSubset<T, ContactsFindFirstArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindFirstOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contacts.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contacts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactsWithIdOnly = await prisma.contacts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactsFindManyArgs>(args?: SelectSubset<T, ContactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contacts.
     * @param {ContactsCreateArgs} args - Arguments to create a Contacts.
     * @example
     * // Create one Contacts
     * const Contacts = await prisma.contacts.create({
     *   data: {
     *     // ... data to create a Contacts
     *   }
     * })
     * 
     */
    create<T extends ContactsCreateArgs>(args: SelectSubset<T, ContactsCreateArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactsCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactsCreateManyArgs>(args?: SelectSubset<T, ContactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactsCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactsWithIdOnly = await prisma.contacts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactsCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contacts.
     * @param {ContactsDeleteArgs} args - Arguments to delete one Contacts.
     * @example
     * // Delete one Contacts
     * const Contacts = await prisma.contacts.delete({
     *   where: {
     *     // ... filter to delete one Contacts
     *   }
     * })
     * 
     */
    delete<T extends ContactsDeleteArgs>(args: SelectSubset<T, ContactsDeleteArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contacts.
     * @param {ContactsUpdateArgs} args - Arguments to update one Contacts.
     * @example
     * // Update one Contacts
     * const contacts = await prisma.contacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactsUpdateArgs>(args: SelectSubset<T, ContactsUpdateArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactsDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactsDeleteManyArgs>(args?: SelectSubset<T, ContactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactsUpdateManyArgs>(args: SelectSubset<T, ContactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactsUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactsWithIdOnly = await prisma.contacts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactsUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contacts.
     * @param {ContactsUpsertArgs} args - Arguments to update or create a Contacts.
     * @example
     * // Update or create a Contacts
     * const contacts = await prisma.contacts.upsert({
     *   create: {
     *     // ... data to create a Contacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacts we want to update
     *   }
     * })
     */
    upsert<T extends ContactsUpsertArgs>(args: SelectSubset<T, ContactsUpsertArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contacts.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactsCountArgs>(
      args?: Subset<T, ContactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactsAggregateArgs>(args: Subset<T, ContactsAggregateArgs>): Prisma.PrismaPromise<GetContactsAggregateType<T>>

    /**
     * Group by Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactsGroupByArgs['orderBy'] }
        : { orderBy?: ContactsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contacts model
   */
  readonly fields: ContactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contacts model
   */
  interface ContactsFieldRefs {
    readonly id: FieldRef<"Contacts", 'String'>
    readonly name: FieldRef<"Contacts", 'String'>
    readonly surName: FieldRef<"Contacts", 'String'>
    readonly phone: FieldRef<"Contacts", 'String'>
    readonly address: FieldRef<"Contacts", 'String'>
    readonly message: FieldRef<"Contacts", 'String'>
    readonly createdAt: FieldRef<"Contacts", 'DateTime'>
    readonly updatedAt: FieldRef<"Contacts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contacts findUnique
   */
  export type ContactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts findUniqueOrThrow
   */
  export type ContactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts findFirst
   */
  export type ContactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts findFirstOrThrow
   */
  export type ContactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts findMany
   */
  export type ContactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts create
   */
  export type ContactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * The data needed to create a Contacts.
     */
    data: XOR<ContactsCreateInput, ContactsUncheckedCreateInput>
  }

  /**
   * Contacts createMany
   */
  export type ContactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactsCreateManyInput | ContactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contacts createManyAndReturn
   */
  export type ContactsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactsCreateManyInput | ContactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contacts update
   */
  export type ContactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * The data needed to update a Contacts.
     */
    data: XOR<ContactsUpdateInput, ContactsUncheckedUpdateInput>
    /**
     * Choose, which Contacts to update.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts updateMany
   */
  export type ContactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactsUpdateManyMutationInput, ContactsUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactsWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contacts updateManyAndReturn
   */
  export type ContactsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactsUpdateManyMutationInput, ContactsUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactsWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contacts upsert
   */
  export type ContactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * The filter to search for the Contacts to update in case it exists.
     */
    where: ContactsWhereUniqueInput
    /**
     * In case the Contacts found by the `where` argument doesn't exist, create a new Contacts with this data.
     */
    create: XOR<ContactsCreateInput, ContactsUncheckedCreateInput>
    /**
     * In case the Contacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactsUpdateInput, ContactsUncheckedUpdateInput>
  }

  /**
   * Contacts delete
   */
  export type ContactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Filter which Contacts to delete.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts deleteMany
   */
  export type ContactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactsWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contacts without action
   */
  export type ContactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
  }


  /**
   * Model DataAboutCompany
   */

  export type AggregateDataAboutCompany = {
    _count: DataAboutCompanyCountAggregateOutputType | null
    _min: DataAboutCompanyMinAggregateOutputType | null
    _max: DataAboutCompanyMaxAggregateOutputType | null
  }

  export type DataAboutCompanyMinAggregateOutputType = {
    id: string | null
    INN: string | null
    MFO: string | null
    R_or_C: string | null
    bankCode: string | null
    Oked: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataAboutCompanyMaxAggregateOutputType = {
    id: string | null
    INN: string | null
    MFO: string | null
    R_or_C: string | null
    bankCode: string | null
    Oked: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataAboutCompanyCountAggregateOutputType = {
    id: number
    INN: number
    MFO: number
    R_or_C: number
    bankCode: number
    Oked: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DataAboutCompanyMinAggregateInputType = {
    id?: true
    INN?: true
    MFO?: true
    R_or_C?: true
    bankCode?: true
    Oked?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataAboutCompanyMaxAggregateInputType = {
    id?: true
    INN?: true
    MFO?: true
    R_or_C?: true
    bankCode?: true
    Oked?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataAboutCompanyCountAggregateInputType = {
    id?: true
    INN?: true
    MFO?: true
    R_or_C?: true
    bankCode?: true
    Oked?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DataAboutCompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataAboutCompany to aggregate.
     */
    where?: DataAboutCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataAboutCompanies to fetch.
     */
    orderBy?: DataAboutCompanyOrderByWithRelationInput | DataAboutCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataAboutCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataAboutCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataAboutCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataAboutCompanies
    **/
    _count?: true | DataAboutCompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataAboutCompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataAboutCompanyMaxAggregateInputType
  }

  export type GetDataAboutCompanyAggregateType<T extends DataAboutCompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateDataAboutCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataAboutCompany[P]>
      : GetScalarType<T[P], AggregateDataAboutCompany[P]>
  }




  export type DataAboutCompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataAboutCompanyWhereInput
    orderBy?: DataAboutCompanyOrderByWithAggregationInput | DataAboutCompanyOrderByWithAggregationInput[]
    by: DataAboutCompanyScalarFieldEnum[] | DataAboutCompanyScalarFieldEnum
    having?: DataAboutCompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataAboutCompanyCountAggregateInputType | true
    _min?: DataAboutCompanyMinAggregateInputType
    _max?: DataAboutCompanyMaxAggregateInputType
  }

  export type DataAboutCompanyGroupByOutputType = {
    id: string
    INN: string
    MFO: string
    R_or_C: string
    bankCode: string
    Oked: string
    address: string
    createdAt: Date
    updatedAt: Date
    _count: DataAboutCompanyCountAggregateOutputType | null
    _min: DataAboutCompanyMinAggregateOutputType | null
    _max: DataAboutCompanyMaxAggregateOutputType | null
  }

  type GetDataAboutCompanyGroupByPayload<T extends DataAboutCompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataAboutCompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataAboutCompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataAboutCompanyGroupByOutputType[P]>
            : GetScalarType<T[P], DataAboutCompanyGroupByOutputType[P]>
        }
      >
    >


  export type DataAboutCompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    INN?: boolean
    MFO?: boolean
    R_or_C?: boolean
    bankCode?: boolean
    Oked?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dataAboutCompany"]>

  export type DataAboutCompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    INN?: boolean
    MFO?: boolean
    R_or_C?: boolean
    bankCode?: boolean
    Oked?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dataAboutCompany"]>

  export type DataAboutCompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    INN?: boolean
    MFO?: boolean
    R_or_C?: boolean
    bankCode?: boolean
    Oked?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dataAboutCompany"]>

  export type DataAboutCompanySelectScalar = {
    id?: boolean
    INN?: boolean
    MFO?: boolean
    R_or_C?: boolean
    bankCode?: boolean
    Oked?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DataAboutCompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "INN" | "MFO" | "R_or_C" | "bankCode" | "Oked" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["dataAboutCompany"]>

  export type $DataAboutCompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataAboutCompany"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      INN: string
      MFO: string
      R_or_C: string
      bankCode: string
      Oked: string
      address: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dataAboutCompany"]>
    composites: {}
  }

  type DataAboutCompanyGetPayload<S extends boolean | null | undefined | DataAboutCompanyDefaultArgs> = $Result.GetResult<Prisma.$DataAboutCompanyPayload, S>

  type DataAboutCompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataAboutCompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataAboutCompanyCountAggregateInputType | true
    }

  export interface DataAboutCompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataAboutCompany'], meta: { name: 'DataAboutCompany' } }
    /**
     * Find zero or one DataAboutCompany that matches the filter.
     * @param {DataAboutCompanyFindUniqueArgs} args - Arguments to find a DataAboutCompany
     * @example
     * // Get one DataAboutCompany
     * const dataAboutCompany = await prisma.dataAboutCompany.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataAboutCompanyFindUniqueArgs>(args: SelectSubset<T, DataAboutCompanyFindUniqueArgs<ExtArgs>>): Prisma__DataAboutCompanyClient<$Result.GetResult<Prisma.$DataAboutCompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataAboutCompany that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataAboutCompanyFindUniqueOrThrowArgs} args - Arguments to find a DataAboutCompany
     * @example
     * // Get one DataAboutCompany
     * const dataAboutCompany = await prisma.dataAboutCompany.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataAboutCompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, DataAboutCompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataAboutCompanyClient<$Result.GetResult<Prisma.$DataAboutCompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataAboutCompany that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAboutCompanyFindFirstArgs} args - Arguments to find a DataAboutCompany
     * @example
     * // Get one DataAboutCompany
     * const dataAboutCompany = await prisma.dataAboutCompany.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataAboutCompanyFindFirstArgs>(args?: SelectSubset<T, DataAboutCompanyFindFirstArgs<ExtArgs>>): Prisma__DataAboutCompanyClient<$Result.GetResult<Prisma.$DataAboutCompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataAboutCompany that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAboutCompanyFindFirstOrThrowArgs} args - Arguments to find a DataAboutCompany
     * @example
     * // Get one DataAboutCompany
     * const dataAboutCompany = await prisma.dataAboutCompany.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataAboutCompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, DataAboutCompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataAboutCompanyClient<$Result.GetResult<Prisma.$DataAboutCompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataAboutCompanies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAboutCompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataAboutCompanies
     * const dataAboutCompanies = await prisma.dataAboutCompany.findMany()
     * 
     * // Get first 10 DataAboutCompanies
     * const dataAboutCompanies = await prisma.dataAboutCompany.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataAboutCompanyWithIdOnly = await prisma.dataAboutCompany.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataAboutCompanyFindManyArgs>(args?: SelectSubset<T, DataAboutCompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataAboutCompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataAboutCompany.
     * @param {DataAboutCompanyCreateArgs} args - Arguments to create a DataAboutCompany.
     * @example
     * // Create one DataAboutCompany
     * const DataAboutCompany = await prisma.dataAboutCompany.create({
     *   data: {
     *     // ... data to create a DataAboutCompany
     *   }
     * })
     * 
     */
    create<T extends DataAboutCompanyCreateArgs>(args: SelectSubset<T, DataAboutCompanyCreateArgs<ExtArgs>>): Prisma__DataAboutCompanyClient<$Result.GetResult<Prisma.$DataAboutCompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataAboutCompanies.
     * @param {DataAboutCompanyCreateManyArgs} args - Arguments to create many DataAboutCompanies.
     * @example
     * // Create many DataAboutCompanies
     * const dataAboutCompany = await prisma.dataAboutCompany.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataAboutCompanyCreateManyArgs>(args?: SelectSubset<T, DataAboutCompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataAboutCompanies and returns the data saved in the database.
     * @param {DataAboutCompanyCreateManyAndReturnArgs} args - Arguments to create many DataAboutCompanies.
     * @example
     * // Create many DataAboutCompanies
     * const dataAboutCompany = await prisma.dataAboutCompany.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataAboutCompanies and only return the `id`
     * const dataAboutCompanyWithIdOnly = await prisma.dataAboutCompany.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataAboutCompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, DataAboutCompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataAboutCompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataAboutCompany.
     * @param {DataAboutCompanyDeleteArgs} args - Arguments to delete one DataAboutCompany.
     * @example
     * // Delete one DataAboutCompany
     * const DataAboutCompany = await prisma.dataAboutCompany.delete({
     *   where: {
     *     // ... filter to delete one DataAboutCompany
     *   }
     * })
     * 
     */
    delete<T extends DataAboutCompanyDeleteArgs>(args: SelectSubset<T, DataAboutCompanyDeleteArgs<ExtArgs>>): Prisma__DataAboutCompanyClient<$Result.GetResult<Prisma.$DataAboutCompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataAboutCompany.
     * @param {DataAboutCompanyUpdateArgs} args - Arguments to update one DataAboutCompany.
     * @example
     * // Update one DataAboutCompany
     * const dataAboutCompany = await prisma.dataAboutCompany.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataAboutCompanyUpdateArgs>(args: SelectSubset<T, DataAboutCompanyUpdateArgs<ExtArgs>>): Prisma__DataAboutCompanyClient<$Result.GetResult<Prisma.$DataAboutCompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataAboutCompanies.
     * @param {DataAboutCompanyDeleteManyArgs} args - Arguments to filter DataAboutCompanies to delete.
     * @example
     * // Delete a few DataAboutCompanies
     * const { count } = await prisma.dataAboutCompany.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataAboutCompanyDeleteManyArgs>(args?: SelectSubset<T, DataAboutCompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataAboutCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAboutCompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataAboutCompanies
     * const dataAboutCompany = await prisma.dataAboutCompany.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataAboutCompanyUpdateManyArgs>(args: SelectSubset<T, DataAboutCompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataAboutCompanies and returns the data updated in the database.
     * @param {DataAboutCompanyUpdateManyAndReturnArgs} args - Arguments to update many DataAboutCompanies.
     * @example
     * // Update many DataAboutCompanies
     * const dataAboutCompany = await prisma.dataAboutCompany.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataAboutCompanies and only return the `id`
     * const dataAboutCompanyWithIdOnly = await prisma.dataAboutCompany.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DataAboutCompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, DataAboutCompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataAboutCompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataAboutCompany.
     * @param {DataAboutCompanyUpsertArgs} args - Arguments to update or create a DataAboutCompany.
     * @example
     * // Update or create a DataAboutCompany
     * const dataAboutCompany = await prisma.dataAboutCompany.upsert({
     *   create: {
     *     // ... data to create a DataAboutCompany
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataAboutCompany we want to update
     *   }
     * })
     */
    upsert<T extends DataAboutCompanyUpsertArgs>(args: SelectSubset<T, DataAboutCompanyUpsertArgs<ExtArgs>>): Prisma__DataAboutCompanyClient<$Result.GetResult<Prisma.$DataAboutCompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataAboutCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAboutCompanyCountArgs} args - Arguments to filter DataAboutCompanies to count.
     * @example
     * // Count the number of DataAboutCompanies
     * const count = await prisma.dataAboutCompany.count({
     *   where: {
     *     // ... the filter for the DataAboutCompanies we want to count
     *   }
     * })
    **/
    count<T extends DataAboutCompanyCountArgs>(
      args?: Subset<T, DataAboutCompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataAboutCompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataAboutCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAboutCompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataAboutCompanyAggregateArgs>(args: Subset<T, DataAboutCompanyAggregateArgs>): Prisma.PrismaPromise<GetDataAboutCompanyAggregateType<T>>

    /**
     * Group by DataAboutCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAboutCompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataAboutCompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataAboutCompanyGroupByArgs['orderBy'] }
        : { orderBy?: DataAboutCompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataAboutCompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataAboutCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataAboutCompany model
   */
  readonly fields: DataAboutCompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataAboutCompany.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataAboutCompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DataAboutCompany model
   */
  interface DataAboutCompanyFieldRefs {
    readonly id: FieldRef<"DataAboutCompany", 'String'>
    readonly INN: FieldRef<"DataAboutCompany", 'String'>
    readonly MFO: FieldRef<"DataAboutCompany", 'String'>
    readonly R_or_C: FieldRef<"DataAboutCompany", 'String'>
    readonly bankCode: FieldRef<"DataAboutCompany", 'String'>
    readonly Oked: FieldRef<"DataAboutCompany", 'String'>
    readonly address: FieldRef<"DataAboutCompany", 'String'>
    readonly createdAt: FieldRef<"DataAboutCompany", 'DateTime'>
    readonly updatedAt: FieldRef<"DataAboutCompany", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DataAboutCompany findUnique
   */
  export type DataAboutCompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAboutCompany
     */
    select?: DataAboutCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAboutCompany
     */
    omit?: DataAboutCompanyOmit<ExtArgs> | null
    /**
     * Filter, which DataAboutCompany to fetch.
     */
    where: DataAboutCompanyWhereUniqueInput
  }

  /**
   * DataAboutCompany findUniqueOrThrow
   */
  export type DataAboutCompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAboutCompany
     */
    select?: DataAboutCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAboutCompany
     */
    omit?: DataAboutCompanyOmit<ExtArgs> | null
    /**
     * Filter, which DataAboutCompany to fetch.
     */
    where: DataAboutCompanyWhereUniqueInput
  }

  /**
   * DataAboutCompany findFirst
   */
  export type DataAboutCompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAboutCompany
     */
    select?: DataAboutCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAboutCompany
     */
    omit?: DataAboutCompanyOmit<ExtArgs> | null
    /**
     * Filter, which DataAboutCompany to fetch.
     */
    where?: DataAboutCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataAboutCompanies to fetch.
     */
    orderBy?: DataAboutCompanyOrderByWithRelationInput | DataAboutCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataAboutCompanies.
     */
    cursor?: DataAboutCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataAboutCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataAboutCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataAboutCompanies.
     */
    distinct?: DataAboutCompanyScalarFieldEnum | DataAboutCompanyScalarFieldEnum[]
  }

  /**
   * DataAboutCompany findFirstOrThrow
   */
  export type DataAboutCompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAboutCompany
     */
    select?: DataAboutCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAboutCompany
     */
    omit?: DataAboutCompanyOmit<ExtArgs> | null
    /**
     * Filter, which DataAboutCompany to fetch.
     */
    where?: DataAboutCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataAboutCompanies to fetch.
     */
    orderBy?: DataAboutCompanyOrderByWithRelationInput | DataAboutCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataAboutCompanies.
     */
    cursor?: DataAboutCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataAboutCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataAboutCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataAboutCompanies.
     */
    distinct?: DataAboutCompanyScalarFieldEnum | DataAboutCompanyScalarFieldEnum[]
  }

  /**
   * DataAboutCompany findMany
   */
  export type DataAboutCompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAboutCompany
     */
    select?: DataAboutCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAboutCompany
     */
    omit?: DataAboutCompanyOmit<ExtArgs> | null
    /**
     * Filter, which DataAboutCompanies to fetch.
     */
    where?: DataAboutCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataAboutCompanies to fetch.
     */
    orderBy?: DataAboutCompanyOrderByWithRelationInput | DataAboutCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataAboutCompanies.
     */
    cursor?: DataAboutCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataAboutCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataAboutCompanies.
     */
    skip?: number
    distinct?: DataAboutCompanyScalarFieldEnum | DataAboutCompanyScalarFieldEnum[]
  }

  /**
   * DataAboutCompany create
   */
  export type DataAboutCompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAboutCompany
     */
    select?: DataAboutCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAboutCompany
     */
    omit?: DataAboutCompanyOmit<ExtArgs> | null
    /**
     * The data needed to create a DataAboutCompany.
     */
    data: XOR<DataAboutCompanyCreateInput, DataAboutCompanyUncheckedCreateInput>
  }

  /**
   * DataAboutCompany createMany
   */
  export type DataAboutCompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataAboutCompanies.
     */
    data: DataAboutCompanyCreateManyInput | DataAboutCompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataAboutCompany createManyAndReturn
   */
  export type DataAboutCompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAboutCompany
     */
    select?: DataAboutCompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataAboutCompany
     */
    omit?: DataAboutCompanyOmit<ExtArgs> | null
    /**
     * The data used to create many DataAboutCompanies.
     */
    data: DataAboutCompanyCreateManyInput | DataAboutCompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataAboutCompany update
   */
  export type DataAboutCompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAboutCompany
     */
    select?: DataAboutCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAboutCompany
     */
    omit?: DataAboutCompanyOmit<ExtArgs> | null
    /**
     * The data needed to update a DataAboutCompany.
     */
    data: XOR<DataAboutCompanyUpdateInput, DataAboutCompanyUncheckedUpdateInput>
    /**
     * Choose, which DataAboutCompany to update.
     */
    where: DataAboutCompanyWhereUniqueInput
  }

  /**
   * DataAboutCompany updateMany
   */
  export type DataAboutCompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataAboutCompanies.
     */
    data: XOR<DataAboutCompanyUpdateManyMutationInput, DataAboutCompanyUncheckedUpdateManyInput>
    /**
     * Filter which DataAboutCompanies to update
     */
    where?: DataAboutCompanyWhereInput
    /**
     * Limit how many DataAboutCompanies to update.
     */
    limit?: number
  }

  /**
   * DataAboutCompany updateManyAndReturn
   */
  export type DataAboutCompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAboutCompany
     */
    select?: DataAboutCompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataAboutCompany
     */
    omit?: DataAboutCompanyOmit<ExtArgs> | null
    /**
     * The data used to update DataAboutCompanies.
     */
    data: XOR<DataAboutCompanyUpdateManyMutationInput, DataAboutCompanyUncheckedUpdateManyInput>
    /**
     * Filter which DataAboutCompanies to update
     */
    where?: DataAboutCompanyWhereInput
    /**
     * Limit how many DataAboutCompanies to update.
     */
    limit?: number
  }

  /**
   * DataAboutCompany upsert
   */
  export type DataAboutCompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAboutCompany
     */
    select?: DataAboutCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAboutCompany
     */
    omit?: DataAboutCompanyOmit<ExtArgs> | null
    /**
     * The filter to search for the DataAboutCompany to update in case it exists.
     */
    where: DataAboutCompanyWhereUniqueInput
    /**
     * In case the DataAboutCompany found by the `where` argument doesn't exist, create a new DataAboutCompany with this data.
     */
    create: XOR<DataAboutCompanyCreateInput, DataAboutCompanyUncheckedCreateInput>
    /**
     * In case the DataAboutCompany was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataAboutCompanyUpdateInput, DataAboutCompanyUncheckedUpdateInput>
  }

  /**
   * DataAboutCompany delete
   */
  export type DataAboutCompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAboutCompany
     */
    select?: DataAboutCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAboutCompany
     */
    omit?: DataAboutCompanyOmit<ExtArgs> | null
    /**
     * Filter which DataAboutCompany to delete.
     */
    where: DataAboutCompanyWhereUniqueInput
  }

  /**
   * DataAboutCompany deleteMany
   */
  export type DataAboutCompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataAboutCompanies to delete
     */
    where?: DataAboutCompanyWhereInput
    /**
     * Limit how many DataAboutCompanies to delete.
     */
    limit?: number
  }

  /**
   * DataAboutCompany without action
   */
  export type DataAboutCompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataAboutCompany
     */
    select?: DataAboutCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataAboutCompany
     */
    omit?: DataAboutCompanyOmit<ExtArgs> | null
  }


  /**
   * Model ShowCases
   */

  export type AggregateShowCases = {
    _count: ShowCasesCountAggregateOutputType | null
    _min: ShowCasesMinAggregateOutputType | null
    _max: ShowCasesMaxAggregateOutputType | null
  }

  export type ShowCasesMinAggregateOutputType = {
    id: string | null
    nameUz: string | null
    nameRu: string | null
    nameEn: string | null
    descriptionUz: string | null
    descriptionRu: string | null
    descriptionEn: string | null
    image: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowCasesMaxAggregateOutputType = {
    id: string | null
    nameUz: string | null
    nameRu: string | null
    nameEn: string | null
    descriptionUz: string | null
    descriptionRu: string | null
    descriptionEn: string | null
    image: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowCasesCountAggregateOutputType = {
    id: number
    nameUz: number
    nameRu: number
    nameEn: number
    descriptionUz: number
    descriptionRu: number
    descriptionEn: number
    image: number
    link: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShowCasesMinAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    descriptionUz?: true
    descriptionRu?: true
    descriptionEn?: true
    image?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowCasesMaxAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    descriptionUz?: true
    descriptionRu?: true
    descriptionEn?: true
    image?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowCasesCountAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    descriptionUz?: true
    descriptionRu?: true
    descriptionEn?: true
    image?: true
    link?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShowCasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShowCases to aggregate.
     */
    where?: ShowCasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowCases to fetch.
     */
    orderBy?: ShowCasesOrderByWithRelationInput | ShowCasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowCasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShowCases
    **/
    _count?: true | ShowCasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowCasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowCasesMaxAggregateInputType
  }

  export type GetShowCasesAggregateType<T extends ShowCasesAggregateArgs> = {
        [P in keyof T & keyof AggregateShowCases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowCases[P]>
      : GetScalarType<T[P], AggregateShowCases[P]>
  }




  export type ShowCasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowCasesWhereInput
    orderBy?: ShowCasesOrderByWithAggregationInput | ShowCasesOrderByWithAggregationInput[]
    by: ShowCasesScalarFieldEnum[] | ShowCasesScalarFieldEnum
    having?: ShowCasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowCasesCountAggregateInputType | true
    _min?: ShowCasesMinAggregateInputType
    _max?: ShowCasesMaxAggregateInputType
  }

  export type ShowCasesGroupByOutputType = {
    id: string
    nameUz: string
    nameRu: string
    nameEn: string
    descriptionUz: string
    descriptionRu: string
    descriptionEn: string
    image: string
    link: string
    createdAt: Date
    updatedAt: Date
    _count: ShowCasesCountAggregateOutputType | null
    _min: ShowCasesMinAggregateOutputType | null
    _max: ShowCasesMaxAggregateOutputType | null
  }

  type GetShowCasesGroupByPayload<T extends ShowCasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowCasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowCasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowCasesGroupByOutputType[P]>
            : GetScalarType<T[P], ShowCasesGroupByOutputType[P]>
        }
      >
    >


  export type ShowCasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    descriptionUz?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
    image?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["showCases"]>

  export type ShowCasesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    descriptionUz?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
    image?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["showCases"]>

  export type ShowCasesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    descriptionUz?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
    image?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["showCases"]>

  export type ShowCasesSelectScalar = {
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    descriptionUz?: boolean
    descriptionRu?: boolean
    descriptionEn?: boolean
    image?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShowCasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameUz" | "nameRu" | "nameEn" | "descriptionUz" | "descriptionRu" | "descriptionEn" | "image" | "link" | "createdAt" | "updatedAt", ExtArgs["result"]["showCases"]>

  export type $ShowCasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShowCases"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameUz: string
      nameRu: string
      nameEn: string
      descriptionUz: string
      descriptionRu: string
      descriptionEn: string
      image: string
      link: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["showCases"]>
    composites: {}
  }

  type ShowCasesGetPayload<S extends boolean | null | undefined | ShowCasesDefaultArgs> = $Result.GetResult<Prisma.$ShowCasesPayload, S>

  type ShowCasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShowCasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShowCasesCountAggregateInputType | true
    }

  export interface ShowCasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShowCases'], meta: { name: 'ShowCases' } }
    /**
     * Find zero or one ShowCases that matches the filter.
     * @param {ShowCasesFindUniqueArgs} args - Arguments to find a ShowCases
     * @example
     * // Get one ShowCases
     * const showCases = await prisma.showCases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShowCasesFindUniqueArgs>(args: SelectSubset<T, ShowCasesFindUniqueArgs<ExtArgs>>): Prisma__ShowCasesClient<$Result.GetResult<Prisma.$ShowCasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShowCases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShowCasesFindUniqueOrThrowArgs} args - Arguments to find a ShowCases
     * @example
     * // Get one ShowCases
     * const showCases = await prisma.showCases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShowCasesFindUniqueOrThrowArgs>(args: SelectSubset<T, ShowCasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShowCasesClient<$Result.GetResult<Prisma.$ShowCasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShowCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCasesFindFirstArgs} args - Arguments to find a ShowCases
     * @example
     * // Get one ShowCases
     * const showCases = await prisma.showCases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShowCasesFindFirstArgs>(args?: SelectSubset<T, ShowCasesFindFirstArgs<ExtArgs>>): Prisma__ShowCasesClient<$Result.GetResult<Prisma.$ShowCasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShowCases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCasesFindFirstOrThrowArgs} args - Arguments to find a ShowCases
     * @example
     * // Get one ShowCases
     * const showCases = await prisma.showCases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShowCasesFindFirstOrThrowArgs>(args?: SelectSubset<T, ShowCasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShowCasesClient<$Result.GetResult<Prisma.$ShowCasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShowCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShowCases
     * const showCases = await prisma.showCases.findMany()
     * 
     * // Get first 10 ShowCases
     * const showCases = await prisma.showCases.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const showCasesWithIdOnly = await prisma.showCases.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShowCasesFindManyArgs>(args?: SelectSubset<T, ShowCasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowCasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShowCases.
     * @param {ShowCasesCreateArgs} args - Arguments to create a ShowCases.
     * @example
     * // Create one ShowCases
     * const ShowCases = await prisma.showCases.create({
     *   data: {
     *     // ... data to create a ShowCases
     *   }
     * })
     * 
     */
    create<T extends ShowCasesCreateArgs>(args: SelectSubset<T, ShowCasesCreateArgs<ExtArgs>>): Prisma__ShowCasesClient<$Result.GetResult<Prisma.$ShowCasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShowCases.
     * @param {ShowCasesCreateManyArgs} args - Arguments to create many ShowCases.
     * @example
     * // Create many ShowCases
     * const showCases = await prisma.showCases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShowCasesCreateManyArgs>(args?: SelectSubset<T, ShowCasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShowCases and returns the data saved in the database.
     * @param {ShowCasesCreateManyAndReturnArgs} args - Arguments to create many ShowCases.
     * @example
     * // Create many ShowCases
     * const showCases = await prisma.showCases.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShowCases and only return the `id`
     * const showCasesWithIdOnly = await prisma.showCases.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShowCasesCreateManyAndReturnArgs>(args?: SelectSubset<T, ShowCasesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowCasesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShowCases.
     * @param {ShowCasesDeleteArgs} args - Arguments to delete one ShowCases.
     * @example
     * // Delete one ShowCases
     * const ShowCases = await prisma.showCases.delete({
     *   where: {
     *     // ... filter to delete one ShowCases
     *   }
     * })
     * 
     */
    delete<T extends ShowCasesDeleteArgs>(args: SelectSubset<T, ShowCasesDeleteArgs<ExtArgs>>): Prisma__ShowCasesClient<$Result.GetResult<Prisma.$ShowCasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShowCases.
     * @param {ShowCasesUpdateArgs} args - Arguments to update one ShowCases.
     * @example
     * // Update one ShowCases
     * const showCases = await prisma.showCases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShowCasesUpdateArgs>(args: SelectSubset<T, ShowCasesUpdateArgs<ExtArgs>>): Prisma__ShowCasesClient<$Result.GetResult<Prisma.$ShowCasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShowCases.
     * @param {ShowCasesDeleteManyArgs} args - Arguments to filter ShowCases to delete.
     * @example
     * // Delete a few ShowCases
     * const { count } = await prisma.showCases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShowCasesDeleteManyArgs>(args?: SelectSubset<T, ShowCasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShowCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShowCases
     * const showCases = await prisma.showCases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShowCasesUpdateManyArgs>(args: SelectSubset<T, ShowCasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShowCases and returns the data updated in the database.
     * @param {ShowCasesUpdateManyAndReturnArgs} args - Arguments to update many ShowCases.
     * @example
     * // Update many ShowCases
     * const showCases = await prisma.showCases.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShowCases and only return the `id`
     * const showCasesWithIdOnly = await prisma.showCases.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShowCasesUpdateManyAndReturnArgs>(args: SelectSubset<T, ShowCasesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowCasesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShowCases.
     * @param {ShowCasesUpsertArgs} args - Arguments to update or create a ShowCases.
     * @example
     * // Update or create a ShowCases
     * const showCases = await prisma.showCases.upsert({
     *   create: {
     *     // ... data to create a ShowCases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShowCases we want to update
     *   }
     * })
     */
    upsert<T extends ShowCasesUpsertArgs>(args: SelectSubset<T, ShowCasesUpsertArgs<ExtArgs>>): Prisma__ShowCasesClient<$Result.GetResult<Prisma.$ShowCasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShowCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCasesCountArgs} args - Arguments to filter ShowCases to count.
     * @example
     * // Count the number of ShowCases
     * const count = await prisma.showCases.count({
     *   where: {
     *     // ... the filter for the ShowCases we want to count
     *   }
     * })
    **/
    count<T extends ShowCasesCountArgs>(
      args?: Subset<T, ShowCasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowCasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShowCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShowCasesAggregateArgs>(args: Subset<T, ShowCasesAggregateArgs>): Prisma.PrismaPromise<GetShowCasesAggregateType<T>>

    /**
     * Group by ShowCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCasesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShowCasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowCasesGroupByArgs['orderBy'] }
        : { orderBy?: ShowCasesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShowCasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowCasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShowCases model
   */
  readonly fields: ShowCasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShowCases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowCasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShowCases model
   */
  interface ShowCasesFieldRefs {
    readonly id: FieldRef<"ShowCases", 'String'>
    readonly nameUz: FieldRef<"ShowCases", 'String'>
    readonly nameRu: FieldRef<"ShowCases", 'String'>
    readonly nameEn: FieldRef<"ShowCases", 'String'>
    readonly descriptionUz: FieldRef<"ShowCases", 'String'>
    readonly descriptionRu: FieldRef<"ShowCases", 'String'>
    readonly descriptionEn: FieldRef<"ShowCases", 'String'>
    readonly image: FieldRef<"ShowCases", 'String'>
    readonly link: FieldRef<"ShowCases", 'String'>
    readonly createdAt: FieldRef<"ShowCases", 'DateTime'>
    readonly updatedAt: FieldRef<"ShowCases", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShowCases findUnique
   */
  export type ShowCasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCases
     */
    select?: ShowCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCases
     */
    omit?: ShowCasesOmit<ExtArgs> | null
    /**
     * Filter, which ShowCases to fetch.
     */
    where: ShowCasesWhereUniqueInput
  }

  /**
   * ShowCases findUniqueOrThrow
   */
  export type ShowCasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCases
     */
    select?: ShowCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCases
     */
    omit?: ShowCasesOmit<ExtArgs> | null
    /**
     * Filter, which ShowCases to fetch.
     */
    where: ShowCasesWhereUniqueInput
  }

  /**
   * ShowCases findFirst
   */
  export type ShowCasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCases
     */
    select?: ShowCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCases
     */
    omit?: ShowCasesOmit<ExtArgs> | null
    /**
     * Filter, which ShowCases to fetch.
     */
    where?: ShowCasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowCases to fetch.
     */
    orderBy?: ShowCasesOrderByWithRelationInput | ShowCasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowCases.
     */
    cursor?: ShowCasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowCases.
     */
    distinct?: ShowCasesScalarFieldEnum | ShowCasesScalarFieldEnum[]
  }

  /**
   * ShowCases findFirstOrThrow
   */
  export type ShowCasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCases
     */
    select?: ShowCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCases
     */
    omit?: ShowCasesOmit<ExtArgs> | null
    /**
     * Filter, which ShowCases to fetch.
     */
    where?: ShowCasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowCases to fetch.
     */
    orderBy?: ShowCasesOrderByWithRelationInput | ShowCasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowCases.
     */
    cursor?: ShowCasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowCases.
     */
    distinct?: ShowCasesScalarFieldEnum | ShowCasesScalarFieldEnum[]
  }

  /**
   * ShowCases findMany
   */
  export type ShowCasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCases
     */
    select?: ShowCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCases
     */
    omit?: ShowCasesOmit<ExtArgs> | null
    /**
     * Filter, which ShowCases to fetch.
     */
    where?: ShowCasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowCases to fetch.
     */
    orderBy?: ShowCasesOrderByWithRelationInput | ShowCasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShowCases.
     */
    cursor?: ShowCasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowCases.
     */
    skip?: number
    distinct?: ShowCasesScalarFieldEnum | ShowCasesScalarFieldEnum[]
  }

  /**
   * ShowCases create
   */
  export type ShowCasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCases
     */
    select?: ShowCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCases
     */
    omit?: ShowCasesOmit<ExtArgs> | null
    /**
     * The data needed to create a ShowCases.
     */
    data: XOR<ShowCasesCreateInput, ShowCasesUncheckedCreateInput>
  }

  /**
   * ShowCases createMany
   */
  export type ShowCasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShowCases.
     */
    data: ShowCasesCreateManyInput | ShowCasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShowCases createManyAndReturn
   */
  export type ShowCasesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCases
     */
    select?: ShowCasesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCases
     */
    omit?: ShowCasesOmit<ExtArgs> | null
    /**
     * The data used to create many ShowCases.
     */
    data: ShowCasesCreateManyInput | ShowCasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShowCases update
   */
  export type ShowCasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCases
     */
    select?: ShowCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCases
     */
    omit?: ShowCasesOmit<ExtArgs> | null
    /**
     * The data needed to update a ShowCases.
     */
    data: XOR<ShowCasesUpdateInput, ShowCasesUncheckedUpdateInput>
    /**
     * Choose, which ShowCases to update.
     */
    where: ShowCasesWhereUniqueInput
  }

  /**
   * ShowCases updateMany
   */
  export type ShowCasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShowCases.
     */
    data: XOR<ShowCasesUpdateManyMutationInput, ShowCasesUncheckedUpdateManyInput>
    /**
     * Filter which ShowCases to update
     */
    where?: ShowCasesWhereInput
    /**
     * Limit how many ShowCases to update.
     */
    limit?: number
  }

  /**
   * ShowCases updateManyAndReturn
   */
  export type ShowCasesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCases
     */
    select?: ShowCasesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCases
     */
    omit?: ShowCasesOmit<ExtArgs> | null
    /**
     * The data used to update ShowCases.
     */
    data: XOR<ShowCasesUpdateManyMutationInput, ShowCasesUncheckedUpdateManyInput>
    /**
     * Filter which ShowCases to update
     */
    where?: ShowCasesWhereInput
    /**
     * Limit how many ShowCases to update.
     */
    limit?: number
  }

  /**
   * ShowCases upsert
   */
  export type ShowCasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCases
     */
    select?: ShowCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCases
     */
    omit?: ShowCasesOmit<ExtArgs> | null
    /**
     * The filter to search for the ShowCases to update in case it exists.
     */
    where: ShowCasesWhereUniqueInput
    /**
     * In case the ShowCases found by the `where` argument doesn't exist, create a new ShowCases with this data.
     */
    create: XOR<ShowCasesCreateInput, ShowCasesUncheckedCreateInput>
    /**
     * In case the ShowCases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowCasesUpdateInput, ShowCasesUncheckedUpdateInput>
  }

  /**
   * ShowCases delete
   */
  export type ShowCasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCases
     */
    select?: ShowCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCases
     */
    omit?: ShowCasesOmit<ExtArgs> | null
    /**
     * Filter which ShowCases to delete.
     */
    where: ShowCasesWhereUniqueInput
  }

  /**
   * ShowCases deleteMany
   */
  export type ShowCasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShowCases to delete
     */
    where?: ShowCasesWhereInput
    /**
     * Limit how many ShowCases to delete.
     */
    limit?: number
  }

  /**
   * ShowCases without action
   */
  export type ShowCasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCases
     */
    select?: ShowCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCases
     */
    omit?: ShowCasesOmit<ExtArgs> | null
  }


  /**
   * Model FAQ
   */

  export type AggregateFAQ = {
    _count: FAQCountAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  export type FAQMinAggregateOutputType = {
    id: string | null
    question: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FAQMaxAggregateOutputType = {
    id: string | null
    question: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FAQCountAggregateOutputType = {
    id: number
    question: number
    answer: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FAQMinAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FAQMaxAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FAQCountAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FAQAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQ to aggregate.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FAQS
    **/
    _count?: true | FAQCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FAQMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FAQMaxAggregateInputType
  }

  export type GetFAQAggregateType<T extends FAQAggregateArgs> = {
        [P in keyof T & keyof AggregateFAQ]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFAQ[P]>
      : GetScalarType<T[P], AggregateFAQ[P]>
  }




  export type FAQGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FAQWhereInput
    orderBy?: FAQOrderByWithAggregationInput | FAQOrderByWithAggregationInput[]
    by: FAQScalarFieldEnum[] | FAQScalarFieldEnum
    having?: FAQScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FAQCountAggregateInputType | true
    _min?: FAQMinAggregateInputType
    _max?: FAQMaxAggregateInputType
  }

  export type FAQGroupByOutputType = {
    id: string
    question: string
    answer: string
    createdAt: Date
    updatedAt: Date
    _count: FAQCountAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  type GetFAQGroupByPayload<T extends FAQGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FAQGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FAQGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FAQGroupByOutputType[P]>
            : GetScalarType<T[P], FAQGroupByOutputType[P]>
        }
      >
    >


  export type FAQSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectScalar = {
    id?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FAQOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "answer" | "createdAt" | "updatedAt", ExtArgs["result"]["fAQ"]>

  export type $FAQPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FAQ"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      answer: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fAQ"]>
    composites: {}
  }

  type FAQGetPayload<S extends boolean | null | undefined | FAQDefaultArgs> = $Result.GetResult<Prisma.$FAQPayload, S>

  type FAQCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FAQFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FAQCountAggregateInputType | true
    }

  export interface FAQDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FAQ'], meta: { name: 'FAQ' } }
    /**
     * Find zero or one FAQ that matches the filter.
     * @param {FAQFindUniqueArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FAQFindUniqueArgs>(args: SelectSubset<T, FAQFindUniqueArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FAQ that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FAQFindUniqueOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FAQFindUniqueOrThrowArgs>(args: SelectSubset<T, FAQFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FAQ that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FAQFindFirstArgs>(args?: SelectSubset<T, FAQFindFirstArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FAQ that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FAQFindFirstOrThrowArgs>(args?: SelectSubset<T, FAQFindFirstOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FAQS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FAQS
     * const fAQS = await prisma.fAQ.findMany()
     * 
     * // Get first 10 FAQS
     * const fAQS = await prisma.fAQ.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fAQWithIdOnly = await prisma.fAQ.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FAQFindManyArgs>(args?: SelectSubset<T, FAQFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FAQ.
     * @param {FAQCreateArgs} args - Arguments to create a FAQ.
     * @example
     * // Create one FAQ
     * const FAQ = await prisma.fAQ.create({
     *   data: {
     *     // ... data to create a FAQ
     *   }
     * })
     * 
     */
    create<T extends FAQCreateArgs>(args: SelectSubset<T, FAQCreateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FAQS.
     * @param {FAQCreateManyArgs} args - Arguments to create many FAQS.
     * @example
     * // Create many FAQS
     * const fAQ = await prisma.fAQ.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FAQCreateManyArgs>(args?: SelectSubset<T, FAQCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FAQS and returns the data saved in the database.
     * @param {FAQCreateManyAndReturnArgs} args - Arguments to create many FAQS.
     * @example
     * // Create many FAQS
     * const fAQ = await prisma.fAQ.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FAQS and only return the `id`
     * const fAQWithIdOnly = await prisma.fAQ.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FAQCreateManyAndReturnArgs>(args?: SelectSubset<T, FAQCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FAQ.
     * @param {FAQDeleteArgs} args - Arguments to delete one FAQ.
     * @example
     * // Delete one FAQ
     * const FAQ = await prisma.fAQ.delete({
     *   where: {
     *     // ... filter to delete one FAQ
     *   }
     * })
     * 
     */
    delete<T extends FAQDeleteArgs>(args: SelectSubset<T, FAQDeleteArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FAQ.
     * @param {FAQUpdateArgs} args - Arguments to update one FAQ.
     * @example
     * // Update one FAQ
     * const fAQ = await prisma.fAQ.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FAQUpdateArgs>(args: SelectSubset<T, FAQUpdateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FAQS.
     * @param {FAQDeleteManyArgs} args - Arguments to filter FAQS to delete.
     * @example
     * // Delete a few FAQS
     * const { count } = await prisma.fAQ.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FAQDeleteManyArgs>(args?: SelectSubset<T, FAQDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FAQS
     * const fAQ = await prisma.fAQ.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FAQUpdateManyArgs>(args: SelectSubset<T, FAQUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FAQS and returns the data updated in the database.
     * @param {FAQUpdateManyAndReturnArgs} args - Arguments to update many FAQS.
     * @example
     * // Update many FAQS
     * const fAQ = await prisma.fAQ.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FAQS and only return the `id`
     * const fAQWithIdOnly = await prisma.fAQ.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FAQUpdateManyAndReturnArgs>(args: SelectSubset<T, FAQUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FAQ.
     * @param {FAQUpsertArgs} args - Arguments to update or create a FAQ.
     * @example
     * // Update or create a FAQ
     * const fAQ = await prisma.fAQ.upsert({
     *   create: {
     *     // ... data to create a FAQ
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FAQ we want to update
     *   }
     * })
     */
    upsert<T extends FAQUpsertArgs>(args: SelectSubset<T, FAQUpsertArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQCountArgs} args - Arguments to filter FAQS to count.
     * @example
     * // Count the number of FAQS
     * const count = await prisma.fAQ.count({
     *   where: {
     *     // ... the filter for the FAQS we want to count
     *   }
     * })
    **/
    count<T extends FAQCountArgs>(
      args?: Subset<T, FAQCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FAQCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FAQAggregateArgs>(args: Subset<T, FAQAggregateArgs>): Prisma.PrismaPromise<GetFAQAggregateType<T>>

    /**
     * Group by FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FAQGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FAQGroupByArgs['orderBy'] }
        : { orderBy?: FAQGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FAQGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFAQGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FAQ model
   */
  readonly fields: FAQFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FAQ.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FAQClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FAQ model
   */
  interface FAQFieldRefs {
    readonly id: FieldRef<"FAQ", 'String'>
    readonly question: FieldRef<"FAQ", 'String'>
    readonly answer: FieldRef<"FAQ", 'String'>
    readonly createdAt: FieldRef<"FAQ", 'DateTime'>
    readonly updatedAt: FieldRef<"FAQ", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FAQ findUnique
   */
  export type FAQFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findUniqueOrThrow
   */
  export type FAQFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findFirst
   */
  export type FAQFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findFirstOrThrow
   */
  export type FAQFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findMany
   */
  export type FAQFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter, which FAQS to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ create
   */
  export type FAQCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data needed to create a FAQ.
     */
    data: XOR<FAQCreateInput, FAQUncheckedCreateInput>
  }

  /**
   * FAQ createMany
   */
  export type FAQCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FAQS.
     */
    data: FAQCreateManyInput | FAQCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FAQ createManyAndReturn
   */
  export type FAQCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data used to create many FAQS.
     */
    data: FAQCreateManyInput | FAQCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FAQ update
   */
  export type FAQUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data needed to update a FAQ.
     */
    data: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
    /**
     * Choose, which FAQ to update.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ updateMany
   */
  export type FAQUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FAQS.
     */
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyInput>
    /**
     * Filter which FAQS to update
     */
    where?: FAQWhereInput
    /**
     * Limit how many FAQS to update.
     */
    limit?: number
  }

  /**
   * FAQ updateManyAndReturn
   */
  export type FAQUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data used to update FAQS.
     */
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyInput>
    /**
     * Filter which FAQS to update
     */
    where?: FAQWhereInput
    /**
     * Limit how many FAQS to update.
     */
    limit?: number
  }

  /**
   * FAQ upsert
   */
  export type FAQUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The filter to search for the FAQ to update in case it exists.
     */
    where: FAQWhereUniqueInput
    /**
     * In case the FAQ found by the `where` argument doesn't exist, create a new FAQ with this data.
     */
    create: XOR<FAQCreateInput, FAQUncheckedCreateInput>
    /**
     * In case the FAQ was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
  }

  /**
   * FAQ delete
   */
  export type FAQDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Filter which FAQ to delete.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ deleteMany
   */
  export type FAQDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQS to delete
     */
    where?: FAQWhereInput
    /**
     * Limit how many FAQS to delete.
     */
    limit?: number
  }

  /**
   * FAQ without action
   */
  export type FAQDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
  }


  /**
   * Model AboutOurPage
   */

  export type AggregateAboutOurPage = {
    _count: AboutOurPageCountAggregateOutputType | null
    _min: AboutOurPageMinAggregateOutputType | null
    _max: AboutOurPageMaxAggregateOutputType | null
  }

  export type AboutOurPageMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutOurPageMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutOurPageCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    links: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AboutOurPageMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutOurPageMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutOurPageCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    links?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AboutOurPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutOurPage to aggregate.
     */
    where?: AboutOurPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutOurPages to fetch.
     */
    orderBy?: AboutOurPageOrderByWithRelationInput | AboutOurPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutOurPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutOurPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutOurPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutOurPages
    **/
    _count?: true | AboutOurPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutOurPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutOurPageMaxAggregateInputType
  }

  export type GetAboutOurPageAggregateType<T extends AboutOurPageAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutOurPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutOurPage[P]>
      : GetScalarType<T[P], AggregateAboutOurPage[P]>
  }




  export type AboutOurPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutOurPageWhereInput
    orderBy?: AboutOurPageOrderByWithAggregationInput | AboutOurPageOrderByWithAggregationInput[]
    by: AboutOurPageScalarFieldEnum[] | AboutOurPageScalarFieldEnum
    having?: AboutOurPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutOurPageCountAggregateInputType | true
    _min?: AboutOurPageMinAggregateInputType
    _max?: AboutOurPageMaxAggregateInputType
  }

  export type AboutOurPageGroupByOutputType = {
    id: string
    email: string
    phone: string
    links: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: AboutOurPageCountAggregateOutputType | null
    _min: AboutOurPageMinAggregateOutputType | null
    _max: AboutOurPageMaxAggregateOutputType | null
  }

  type GetAboutOurPageGroupByPayload<T extends AboutOurPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutOurPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutOurPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutOurPageGroupByOutputType[P]>
            : GetScalarType<T[P], AboutOurPageGroupByOutputType[P]>
        }
      >
    >


  export type AboutOurPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    links?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutOurPage"]>

  export type AboutOurPageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    links?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutOurPage"]>

  export type AboutOurPageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    links?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutOurPage"]>

  export type AboutOurPageSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    links?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AboutOurPageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "links" | "createdAt" | "updatedAt", ExtArgs["result"]["aboutOurPage"]>

  export type $AboutOurPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutOurPage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      phone: string
      links: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aboutOurPage"]>
    composites: {}
  }

  type AboutOurPageGetPayload<S extends boolean | null | undefined | AboutOurPageDefaultArgs> = $Result.GetResult<Prisma.$AboutOurPagePayload, S>

  type AboutOurPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AboutOurPageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutOurPageCountAggregateInputType | true
    }

  export interface AboutOurPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutOurPage'], meta: { name: 'AboutOurPage' } }
    /**
     * Find zero or one AboutOurPage that matches the filter.
     * @param {AboutOurPageFindUniqueArgs} args - Arguments to find a AboutOurPage
     * @example
     * // Get one AboutOurPage
     * const aboutOurPage = await prisma.aboutOurPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutOurPageFindUniqueArgs>(args: SelectSubset<T, AboutOurPageFindUniqueArgs<ExtArgs>>): Prisma__AboutOurPageClient<$Result.GetResult<Prisma.$AboutOurPagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AboutOurPage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AboutOurPageFindUniqueOrThrowArgs} args - Arguments to find a AboutOurPage
     * @example
     * // Get one AboutOurPage
     * const aboutOurPage = await prisma.aboutOurPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutOurPageFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutOurPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutOurPageClient<$Result.GetResult<Prisma.$AboutOurPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutOurPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutOurPageFindFirstArgs} args - Arguments to find a AboutOurPage
     * @example
     * // Get one AboutOurPage
     * const aboutOurPage = await prisma.aboutOurPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutOurPageFindFirstArgs>(args?: SelectSubset<T, AboutOurPageFindFirstArgs<ExtArgs>>): Prisma__AboutOurPageClient<$Result.GetResult<Prisma.$AboutOurPagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutOurPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutOurPageFindFirstOrThrowArgs} args - Arguments to find a AboutOurPage
     * @example
     * // Get one AboutOurPage
     * const aboutOurPage = await prisma.aboutOurPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutOurPageFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutOurPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutOurPageClient<$Result.GetResult<Prisma.$AboutOurPagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AboutOurPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutOurPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutOurPages
     * const aboutOurPages = await prisma.aboutOurPage.findMany()
     * 
     * // Get first 10 AboutOurPages
     * const aboutOurPages = await prisma.aboutOurPage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutOurPageWithIdOnly = await prisma.aboutOurPage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutOurPageFindManyArgs>(args?: SelectSubset<T, AboutOurPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutOurPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AboutOurPage.
     * @param {AboutOurPageCreateArgs} args - Arguments to create a AboutOurPage.
     * @example
     * // Create one AboutOurPage
     * const AboutOurPage = await prisma.aboutOurPage.create({
     *   data: {
     *     // ... data to create a AboutOurPage
     *   }
     * })
     * 
     */
    create<T extends AboutOurPageCreateArgs>(args: SelectSubset<T, AboutOurPageCreateArgs<ExtArgs>>): Prisma__AboutOurPageClient<$Result.GetResult<Prisma.$AboutOurPagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AboutOurPages.
     * @param {AboutOurPageCreateManyArgs} args - Arguments to create many AboutOurPages.
     * @example
     * // Create many AboutOurPages
     * const aboutOurPage = await prisma.aboutOurPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutOurPageCreateManyArgs>(args?: SelectSubset<T, AboutOurPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutOurPages and returns the data saved in the database.
     * @param {AboutOurPageCreateManyAndReturnArgs} args - Arguments to create many AboutOurPages.
     * @example
     * // Create many AboutOurPages
     * const aboutOurPage = await prisma.aboutOurPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutOurPages and only return the `id`
     * const aboutOurPageWithIdOnly = await prisma.aboutOurPage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutOurPageCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutOurPageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutOurPagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AboutOurPage.
     * @param {AboutOurPageDeleteArgs} args - Arguments to delete one AboutOurPage.
     * @example
     * // Delete one AboutOurPage
     * const AboutOurPage = await prisma.aboutOurPage.delete({
     *   where: {
     *     // ... filter to delete one AboutOurPage
     *   }
     * })
     * 
     */
    delete<T extends AboutOurPageDeleteArgs>(args: SelectSubset<T, AboutOurPageDeleteArgs<ExtArgs>>): Prisma__AboutOurPageClient<$Result.GetResult<Prisma.$AboutOurPagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AboutOurPage.
     * @param {AboutOurPageUpdateArgs} args - Arguments to update one AboutOurPage.
     * @example
     * // Update one AboutOurPage
     * const aboutOurPage = await prisma.aboutOurPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutOurPageUpdateArgs>(args: SelectSubset<T, AboutOurPageUpdateArgs<ExtArgs>>): Prisma__AboutOurPageClient<$Result.GetResult<Prisma.$AboutOurPagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AboutOurPages.
     * @param {AboutOurPageDeleteManyArgs} args - Arguments to filter AboutOurPages to delete.
     * @example
     * // Delete a few AboutOurPages
     * const { count } = await prisma.aboutOurPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutOurPageDeleteManyArgs>(args?: SelectSubset<T, AboutOurPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutOurPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutOurPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutOurPages
     * const aboutOurPage = await prisma.aboutOurPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutOurPageUpdateManyArgs>(args: SelectSubset<T, AboutOurPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutOurPages and returns the data updated in the database.
     * @param {AboutOurPageUpdateManyAndReturnArgs} args - Arguments to update many AboutOurPages.
     * @example
     * // Update many AboutOurPages
     * const aboutOurPage = await prisma.aboutOurPage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AboutOurPages and only return the `id`
     * const aboutOurPageWithIdOnly = await prisma.aboutOurPage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AboutOurPageUpdateManyAndReturnArgs>(args: SelectSubset<T, AboutOurPageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutOurPagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AboutOurPage.
     * @param {AboutOurPageUpsertArgs} args - Arguments to update or create a AboutOurPage.
     * @example
     * // Update or create a AboutOurPage
     * const aboutOurPage = await prisma.aboutOurPage.upsert({
     *   create: {
     *     // ... data to create a AboutOurPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutOurPage we want to update
     *   }
     * })
     */
    upsert<T extends AboutOurPageUpsertArgs>(args: SelectSubset<T, AboutOurPageUpsertArgs<ExtArgs>>): Prisma__AboutOurPageClient<$Result.GetResult<Prisma.$AboutOurPagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AboutOurPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutOurPageCountArgs} args - Arguments to filter AboutOurPages to count.
     * @example
     * // Count the number of AboutOurPages
     * const count = await prisma.aboutOurPage.count({
     *   where: {
     *     // ... the filter for the AboutOurPages we want to count
     *   }
     * })
    **/
    count<T extends AboutOurPageCountArgs>(
      args?: Subset<T, AboutOurPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutOurPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutOurPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutOurPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutOurPageAggregateArgs>(args: Subset<T, AboutOurPageAggregateArgs>): Prisma.PrismaPromise<GetAboutOurPageAggregateType<T>>

    /**
     * Group by AboutOurPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutOurPageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutOurPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutOurPageGroupByArgs['orderBy'] }
        : { orderBy?: AboutOurPageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutOurPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutOurPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutOurPage model
   */
  readonly fields: AboutOurPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutOurPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutOurPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutOurPage model
   */
  interface AboutOurPageFieldRefs {
    readonly id: FieldRef<"AboutOurPage", 'String'>
    readonly email: FieldRef<"AboutOurPage", 'String'>
    readonly phone: FieldRef<"AboutOurPage", 'String'>
    readonly links: FieldRef<"AboutOurPage", 'Json'>
    readonly createdAt: FieldRef<"AboutOurPage", 'DateTime'>
    readonly updatedAt: FieldRef<"AboutOurPage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AboutOurPage findUnique
   */
  export type AboutOurPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutOurPage
     */
    select?: AboutOurPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutOurPage
     */
    omit?: AboutOurPageOmit<ExtArgs> | null
    /**
     * Filter, which AboutOurPage to fetch.
     */
    where: AboutOurPageWhereUniqueInput
  }

  /**
   * AboutOurPage findUniqueOrThrow
   */
  export type AboutOurPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutOurPage
     */
    select?: AboutOurPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutOurPage
     */
    omit?: AboutOurPageOmit<ExtArgs> | null
    /**
     * Filter, which AboutOurPage to fetch.
     */
    where: AboutOurPageWhereUniqueInput
  }

  /**
   * AboutOurPage findFirst
   */
  export type AboutOurPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutOurPage
     */
    select?: AboutOurPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutOurPage
     */
    omit?: AboutOurPageOmit<ExtArgs> | null
    /**
     * Filter, which AboutOurPage to fetch.
     */
    where?: AboutOurPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutOurPages to fetch.
     */
    orderBy?: AboutOurPageOrderByWithRelationInput | AboutOurPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutOurPages.
     */
    cursor?: AboutOurPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutOurPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutOurPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutOurPages.
     */
    distinct?: AboutOurPageScalarFieldEnum | AboutOurPageScalarFieldEnum[]
  }

  /**
   * AboutOurPage findFirstOrThrow
   */
  export type AboutOurPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutOurPage
     */
    select?: AboutOurPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutOurPage
     */
    omit?: AboutOurPageOmit<ExtArgs> | null
    /**
     * Filter, which AboutOurPage to fetch.
     */
    where?: AboutOurPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutOurPages to fetch.
     */
    orderBy?: AboutOurPageOrderByWithRelationInput | AboutOurPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutOurPages.
     */
    cursor?: AboutOurPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutOurPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutOurPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutOurPages.
     */
    distinct?: AboutOurPageScalarFieldEnum | AboutOurPageScalarFieldEnum[]
  }

  /**
   * AboutOurPage findMany
   */
  export type AboutOurPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutOurPage
     */
    select?: AboutOurPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutOurPage
     */
    omit?: AboutOurPageOmit<ExtArgs> | null
    /**
     * Filter, which AboutOurPages to fetch.
     */
    where?: AboutOurPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutOurPages to fetch.
     */
    orderBy?: AboutOurPageOrderByWithRelationInput | AboutOurPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutOurPages.
     */
    cursor?: AboutOurPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutOurPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutOurPages.
     */
    skip?: number
    distinct?: AboutOurPageScalarFieldEnum | AboutOurPageScalarFieldEnum[]
  }

  /**
   * AboutOurPage create
   */
  export type AboutOurPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutOurPage
     */
    select?: AboutOurPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutOurPage
     */
    omit?: AboutOurPageOmit<ExtArgs> | null
    /**
     * The data needed to create a AboutOurPage.
     */
    data: XOR<AboutOurPageCreateInput, AboutOurPageUncheckedCreateInput>
  }

  /**
   * AboutOurPage createMany
   */
  export type AboutOurPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutOurPages.
     */
    data: AboutOurPageCreateManyInput | AboutOurPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutOurPage createManyAndReturn
   */
  export type AboutOurPageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutOurPage
     */
    select?: AboutOurPageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutOurPage
     */
    omit?: AboutOurPageOmit<ExtArgs> | null
    /**
     * The data used to create many AboutOurPages.
     */
    data: AboutOurPageCreateManyInput | AboutOurPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutOurPage update
   */
  export type AboutOurPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutOurPage
     */
    select?: AboutOurPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutOurPage
     */
    omit?: AboutOurPageOmit<ExtArgs> | null
    /**
     * The data needed to update a AboutOurPage.
     */
    data: XOR<AboutOurPageUpdateInput, AboutOurPageUncheckedUpdateInput>
    /**
     * Choose, which AboutOurPage to update.
     */
    where: AboutOurPageWhereUniqueInput
  }

  /**
   * AboutOurPage updateMany
   */
  export type AboutOurPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutOurPages.
     */
    data: XOR<AboutOurPageUpdateManyMutationInput, AboutOurPageUncheckedUpdateManyInput>
    /**
     * Filter which AboutOurPages to update
     */
    where?: AboutOurPageWhereInput
    /**
     * Limit how many AboutOurPages to update.
     */
    limit?: number
  }

  /**
   * AboutOurPage updateManyAndReturn
   */
  export type AboutOurPageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutOurPage
     */
    select?: AboutOurPageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutOurPage
     */
    omit?: AboutOurPageOmit<ExtArgs> | null
    /**
     * The data used to update AboutOurPages.
     */
    data: XOR<AboutOurPageUpdateManyMutationInput, AboutOurPageUncheckedUpdateManyInput>
    /**
     * Filter which AboutOurPages to update
     */
    where?: AboutOurPageWhereInput
    /**
     * Limit how many AboutOurPages to update.
     */
    limit?: number
  }

  /**
   * AboutOurPage upsert
   */
  export type AboutOurPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutOurPage
     */
    select?: AboutOurPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutOurPage
     */
    omit?: AboutOurPageOmit<ExtArgs> | null
    /**
     * The filter to search for the AboutOurPage to update in case it exists.
     */
    where: AboutOurPageWhereUniqueInput
    /**
     * In case the AboutOurPage found by the `where` argument doesn't exist, create a new AboutOurPage with this data.
     */
    create: XOR<AboutOurPageCreateInput, AboutOurPageUncheckedCreateInput>
    /**
     * In case the AboutOurPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutOurPageUpdateInput, AboutOurPageUncheckedUpdateInput>
  }

  /**
   * AboutOurPage delete
   */
  export type AboutOurPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutOurPage
     */
    select?: AboutOurPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutOurPage
     */
    omit?: AboutOurPageOmit<ExtArgs> | null
    /**
     * Filter which AboutOurPage to delete.
     */
    where: AboutOurPageWhereUniqueInput
  }

  /**
   * AboutOurPage deleteMany
   */
  export type AboutOurPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutOurPages to delete
     */
    where?: AboutOurPageWhereInput
    /**
     * Limit how many AboutOurPages to delete.
     */
    limit?: number
  }

  /**
   * AboutOurPage without action
   */
  export type AboutOurPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutOurPage
     */
    select?: AboutOurPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutOurPage
     */
    omit?: AboutOurPageOmit<ExtArgs> | null
  }


  /**
   * Model Partners
   */

  export type AggregatePartners = {
    _count: PartnersCountAggregateOutputType | null
    _min: PartnersMinAggregateOutputType | null
    _max: PartnersMaxAggregateOutputType | null
  }

  export type PartnersMinAggregateOutputType = {
    id: string | null
    nameUz: string | null
    nameRu: string | null
    nameEn: string | null
    images: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnersMaxAggregateOutputType = {
    id: string | null
    nameUz: string | null
    nameRu: string | null
    nameEn: string | null
    images: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnersCountAggregateOutputType = {
    id: number
    nameUz: number
    nameRu: number
    nameEn: number
    images: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartnersMinAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    images?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnersMaxAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    images?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnersCountAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    images?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartnersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partners to aggregate.
     */
    where?: PartnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnersOrderByWithRelationInput | PartnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Partners
    **/
    _count?: true | PartnersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnersMaxAggregateInputType
  }

  export type GetPartnersAggregateType<T extends PartnersAggregateArgs> = {
        [P in keyof T & keyof AggregatePartners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartners[P]>
      : GetScalarType<T[P], AggregatePartners[P]>
  }




  export type PartnersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnersWhereInput
    orderBy?: PartnersOrderByWithAggregationInput | PartnersOrderByWithAggregationInput[]
    by: PartnersScalarFieldEnum[] | PartnersScalarFieldEnum
    having?: PartnersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnersCountAggregateInputType | true
    _min?: PartnersMinAggregateInputType
    _max?: PartnersMaxAggregateInputType
  }

  export type PartnersGroupByOutputType = {
    id: string
    nameUz: string
    nameRu: string
    nameEn: string
    images: string
    createdAt: Date
    updatedAt: Date
    _count: PartnersCountAggregateOutputType | null
    _min: PartnersMinAggregateOutputType | null
    _max: PartnersMaxAggregateOutputType | null
  }

  type GetPartnersGroupByPayload<T extends PartnersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnersGroupByOutputType[P]>
            : GetScalarType<T[P], PartnersGroupByOutputType[P]>
        }
      >
    >


  export type PartnersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["partners"]>

  export type PartnersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["partners"]>

  export type PartnersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["partners"]>

  export type PartnersSelectScalar = {
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartnersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameUz" | "nameRu" | "nameEn" | "images" | "createdAt" | "updatedAt", ExtArgs["result"]["partners"]>

  export type $PartnersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partners"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameUz: string
      nameRu: string
      nameEn: string
      images: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partners"]>
    composites: {}
  }

  type PartnersGetPayload<S extends boolean | null | undefined | PartnersDefaultArgs> = $Result.GetResult<Prisma.$PartnersPayload, S>

  type PartnersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartnersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartnersCountAggregateInputType | true
    }

  export interface PartnersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partners'], meta: { name: 'Partners' } }
    /**
     * Find zero or one Partners that matches the filter.
     * @param {PartnersFindUniqueArgs} args - Arguments to find a Partners
     * @example
     * // Get one Partners
     * const partners = await prisma.partners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnersFindUniqueArgs>(args: SelectSubset<T, PartnersFindUniqueArgs<ExtArgs>>): Prisma__PartnersClient<$Result.GetResult<Prisma.$PartnersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Partners that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartnersFindUniqueOrThrowArgs} args - Arguments to find a Partners
     * @example
     * // Get one Partners
     * const partners = await prisma.partners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnersFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnersClient<$Result.GetResult<Prisma.$PartnersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnersFindFirstArgs} args - Arguments to find a Partners
     * @example
     * // Get one Partners
     * const partners = await prisma.partners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnersFindFirstArgs>(args?: SelectSubset<T, PartnersFindFirstArgs<ExtArgs>>): Prisma__PartnersClient<$Result.GetResult<Prisma.$PartnersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnersFindFirstOrThrowArgs} args - Arguments to find a Partners
     * @example
     * // Get one Partners
     * const partners = await prisma.partners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnersFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnersFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnersClient<$Result.GetResult<Prisma.$PartnersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partners
     * const partners = await prisma.partners.findMany()
     * 
     * // Get first 10 Partners
     * const partners = await prisma.partners.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnersWithIdOnly = await prisma.partners.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnersFindManyArgs>(args?: SelectSubset<T, PartnersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Partners.
     * @param {PartnersCreateArgs} args - Arguments to create a Partners.
     * @example
     * // Create one Partners
     * const Partners = await prisma.partners.create({
     *   data: {
     *     // ... data to create a Partners
     *   }
     * })
     * 
     */
    create<T extends PartnersCreateArgs>(args: SelectSubset<T, PartnersCreateArgs<ExtArgs>>): Prisma__PartnersClient<$Result.GetResult<Prisma.$PartnersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Partners.
     * @param {PartnersCreateManyArgs} args - Arguments to create many Partners.
     * @example
     * // Create many Partners
     * const partners = await prisma.partners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnersCreateManyArgs>(args?: SelectSubset<T, PartnersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Partners and returns the data saved in the database.
     * @param {PartnersCreateManyAndReturnArgs} args - Arguments to create many Partners.
     * @example
     * // Create many Partners
     * const partners = await prisma.partners.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Partners and only return the `id`
     * const partnersWithIdOnly = await prisma.partners.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartnersCreateManyAndReturnArgs>(args?: SelectSubset<T, PartnersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Partners.
     * @param {PartnersDeleteArgs} args - Arguments to delete one Partners.
     * @example
     * // Delete one Partners
     * const Partners = await prisma.partners.delete({
     *   where: {
     *     // ... filter to delete one Partners
     *   }
     * })
     * 
     */
    delete<T extends PartnersDeleteArgs>(args: SelectSubset<T, PartnersDeleteArgs<ExtArgs>>): Prisma__PartnersClient<$Result.GetResult<Prisma.$PartnersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Partners.
     * @param {PartnersUpdateArgs} args - Arguments to update one Partners.
     * @example
     * // Update one Partners
     * const partners = await prisma.partners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnersUpdateArgs>(args: SelectSubset<T, PartnersUpdateArgs<ExtArgs>>): Prisma__PartnersClient<$Result.GetResult<Prisma.$PartnersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Partners.
     * @param {PartnersDeleteManyArgs} args - Arguments to filter Partners to delete.
     * @example
     * // Delete a few Partners
     * const { count } = await prisma.partners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnersDeleteManyArgs>(args?: SelectSubset<T, PartnersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partners
     * const partners = await prisma.partners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnersUpdateManyArgs>(args: SelectSubset<T, PartnersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partners and returns the data updated in the database.
     * @param {PartnersUpdateManyAndReturnArgs} args - Arguments to update many Partners.
     * @example
     * // Update many Partners
     * const partners = await prisma.partners.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Partners and only return the `id`
     * const partnersWithIdOnly = await prisma.partners.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartnersUpdateManyAndReturnArgs>(args: SelectSubset<T, PartnersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Partners.
     * @param {PartnersUpsertArgs} args - Arguments to update or create a Partners.
     * @example
     * // Update or create a Partners
     * const partners = await prisma.partners.upsert({
     *   create: {
     *     // ... data to create a Partners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partners we want to update
     *   }
     * })
     */
    upsert<T extends PartnersUpsertArgs>(args: SelectSubset<T, PartnersUpsertArgs<ExtArgs>>): Prisma__PartnersClient<$Result.GetResult<Prisma.$PartnersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnersCountArgs} args - Arguments to filter Partners to count.
     * @example
     * // Count the number of Partners
     * const count = await prisma.partners.count({
     *   where: {
     *     // ... the filter for the Partners we want to count
     *   }
     * })
    **/
    count<T extends PartnersCountArgs>(
      args?: Subset<T, PartnersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnersAggregateArgs>(args: Subset<T, PartnersAggregateArgs>): Prisma.PrismaPromise<GetPartnersAggregateType<T>>

    /**
     * Group by Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartnersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnersGroupByArgs['orderBy'] }
        : { orderBy?: PartnersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartnersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partners model
   */
  readonly fields: PartnersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Partners model
   */
  interface PartnersFieldRefs {
    readonly id: FieldRef<"Partners", 'String'>
    readonly nameUz: FieldRef<"Partners", 'String'>
    readonly nameRu: FieldRef<"Partners", 'String'>
    readonly nameEn: FieldRef<"Partners", 'String'>
    readonly images: FieldRef<"Partners", 'String'>
    readonly createdAt: FieldRef<"Partners", 'DateTime'>
    readonly updatedAt: FieldRef<"Partners", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Partners findUnique
   */
  export type PartnersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partners
     */
    select?: PartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partners
     */
    omit?: PartnersOmit<ExtArgs> | null
    /**
     * Filter, which Partners to fetch.
     */
    where: PartnersWhereUniqueInput
  }

  /**
   * Partners findUniqueOrThrow
   */
  export type PartnersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partners
     */
    select?: PartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partners
     */
    omit?: PartnersOmit<ExtArgs> | null
    /**
     * Filter, which Partners to fetch.
     */
    where: PartnersWhereUniqueInput
  }

  /**
   * Partners findFirst
   */
  export type PartnersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partners
     */
    select?: PartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partners
     */
    omit?: PartnersOmit<ExtArgs> | null
    /**
     * Filter, which Partners to fetch.
     */
    where?: PartnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnersOrderByWithRelationInput | PartnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnersScalarFieldEnum | PartnersScalarFieldEnum[]
  }

  /**
   * Partners findFirstOrThrow
   */
  export type PartnersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partners
     */
    select?: PartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partners
     */
    omit?: PartnersOmit<ExtArgs> | null
    /**
     * Filter, which Partners to fetch.
     */
    where?: PartnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnersOrderByWithRelationInput | PartnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnersScalarFieldEnum | PartnersScalarFieldEnum[]
  }

  /**
   * Partners findMany
   */
  export type PartnersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partners
     */
    select?: PartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partners
     */
    omit?: PartnersOmit<ExtArgs> | null
    /**
     * Filter, which Partners to fetch.
     */
    where?: PartnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnersOrderByWithRelationInput | PartnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partners.
     */
    cursor?: PartnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    distinct?: PartnersScalarFieldEnum | PartnersScalarFieldEnum[]
  }

  /**
   * Partners create
   */
  export type PartnersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partners
     */
    select?: PartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partners
     */
    omit?: PartnersOmit<ExtArgs> | null
    /**
     * The data needed to create a Partners.
     */
    data: XOR<PartnersCreateInput, PartnersUncheckedCreateInput>
  }

  /**
   * Partners createMany
   */
  export type PartnersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Partners.
     */
    data: PartnersCreateManyInput | PartnersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partners createManyAndReturn
   */
  export type PartnersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partners
     */
    select?: PartnersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partners
     */
    omit?: PartnersOmit<ExtArgs> | null
    /**
     * The data used to create many Partners.
     */
    data: PartnersCreateManyInput | PartnersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partners update
   */
  export type PartnersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partners
     */
    select?: PartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partners
     */
    omit?: PartnersOmit<ExtArgs> | null
    /**
     * The data needed to update a Partners.
     */
    data: XOR<PartnersUpdateInput, PartnersUncheckedUpdateInput>
    /**
     * Choose, which Partners to update.
     */
    where: PartnersWhereUniqueInput
  }

  /**
   * Partners updateMany
   */
  export type PartnersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Partners.
     */
    data: XOR<PartnersUpdateManyMutationInput, PartnersUncheckedUpdateManyInput>
    /**
     * Filter which Partners to update
     */
    where?: PartnersWhereInput
    /**
     * Limit how many Partners to update.
     */
    limit?: number
  }

  /**
   * Partners updateManyAndReturn
   */
  export type PartnersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partners
     */
    select?: PartnersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partners
     */
    omit?: PartnersOmit<ExtArgs> | null
    /**
     * The data used to update Partners.
     */
    data: XOR<PartnersUpdateManyMutationInput, PartnersUncheckedUpdateManyInput>
    /**
     * Filter which Partners to update
     */
    where?: PartnersWhereInput
    /**
     * Limit how many Partners to update.
     */
    limit?: number
  }

  /**
   * Partners upsert
   */
  export type PartnersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partners
     */
    select?: PartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partners
     */
    omit?: PartnersOmit<ExtArgs> | null
    /**
     * The filter to search for the Partners to update in case it exists.
     */
    where: PartnersWhereUniqueInput
    /**
     * In case the Partners found by the `where` argument doesn't exist, create a new Partners with this data.
     */
    create: XOR<PartnersCreateInput, PartnersUncheckedCreateInput>
    /**
     * In case the Partners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnersUpdateInput, PartnersUncheckedUpdateInput>
  }

  /**
   * Partners delete
   */
  export type PartnersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partners
     */
    select?: PartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partners
     */
    omit?: PartnersOmit<ExtArgs> | null
    /**
     * Filter which Partners to delete.
     */
    where: PartnersWhereUniqueInput
  }

  /**
   * Partners deleteMany
   */
  export type PartnersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partners to delete
     */
    where?: PartnersWhereInput
    /**
     * Limit how many Partners to delete.
     */
    limit?: number
  }

  /**
   * Partners without action
   */
  export type PartnersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partners
     */
    select?: PartnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partners
     */
    omit?: PartnersOmit<ExtArgs> | null
  }


  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsMinAggregateOutputType = {
    id: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentsMinAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: string
    message: string
    createdAt: Date
    updatedAt: Date
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectScalar = {
    id?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["comments"]>

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'String'>
    readonly message: FieldRef<"Comments", 'String'>
    readonly createdAt: FieldRef<"Comments", 'DateTime'>
    readonly updatedAt: FieldRef<"Comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments createManyAndReturn
   */
  export type CommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments updateManyAndReturn
   */
  export type CommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
  }


  /**
   * Model Stars
   */

  export type AggregateStars = {
    _count: StarsCountAggregateOutputType | null
    _avg: StarsAvgAggregateOutputType | null
    _sum: StarsSumAggregateOutputType | null
    _min: StarsMinAggregateOutputType | null
    _max: StarsMaxAggregateOutputType | null
  }

  export type StarsAvgAggregateOutputType = {
    star: number | null
  }

  export type StarsSumAggregateOutputType = {
    star: number | null
  }

  export type StarsMinAggregateOutputType = {
    id: string | null
    star: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StarsMaxAggregateOutputType = {
    id: string | null
    star: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StarsCountAggregateOutputType = {
    id: number
    star: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StarsAvgAggregateInputType = {
    star?: true
  }

  export type StarsSumAggregateInputType = {
    star?: true
  }

  export type StarsMinAggregateInputType = {
    id?: true
    star?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StarsMaxAggregateInputType = {
    id?: true
    star?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StarsCountAggregateInputType = {
    id?: true
    star?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stars to aggregate.
     */
    where?: StarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stars to fetch.
     */
    orderBy?: StarsOrderByWithRelationInput | StarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stars
    **/
    _count?: true | StarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StarsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StarsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StarsMaxAggregateInputType
  }

  export type GetStarsAggregateType<T extends StarsAggregateArgs> = {
        [P in keyof T & keyof AggregateStars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStars[P]>
      : GetScalarType<T[P], AggregateStars[P]>
  }




  export type StarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StarsWhereInput
    orderBy?: StarsOrderByWithAggregationInput | StarsOrderByWithAggregationInput[]
    by: StarsScalarFieldEnum[] | StarsScalarFieldEnum
    having?: StarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StarsCountAggregateInputType | true
    _avg?: StarsAvgAggregateInputType
    _sum?: StarsSumAggregateInputType
    _min?: StarsMinAggregateInputType
    _max?: StarsMaxAggregateInputType
  }

  export type StarsGroupByOutputType = {
    id: string
    star: number
    createdAt: Date
    updatedAt: Date
    _count: StarsCountAggregateOutputType | null
    _avg: StarsAvgAggregateOutputType | null
    _sum: StarsSumAggregateOutputType | null
    _min: StarsMinAggregateOutputType | null
    _max: StarsMaxAggregateOutputType | null
  }

  type GetStarsGroupByPayload<T extends StarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StarsGroupByOutputType[P]>
            : GetScalarType<T[P], StarsGroupByOutputType[P]>
        }
      >
    >


  export type StarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    star?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stars"]>

  export type StarsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    star?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stars"]>

  export type StarsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    star?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stars"]>

  export type StarsSelectScalar = {
    id?: boolean
    star?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StarsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "star" | "createdAt" | "updatedAt", ExtArgs["result"]["stars"]>

  export type $StarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stars"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      star: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stars"]>
    composites: {}
  }

  type StarsGetPayload<S extends boolean | null | undefined | StarsDefaultArgs> = $Result.GetResult<Prisma.$StarsPayload, S>

  type StarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StarsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StarsCountAggregateInputType | true
    }

  export interface StarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stars'], meta: { name: 'Stars' } }
    /**
     * Find zero or one Stars that matches the filter.
     * @param {StarsFindUniqueArgs} args - Arguments to find a Stars
     * @example
     * // Get one Stars
     * const stars = await prisma.stars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StarsFindUniqueArgs>(args: SelectSubset<T, StarsFindUniqueArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stars that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StarsFindUniqueOrThrowArgs} args - Arguments to find a Stars
     * @example
     * // Get one Stars
     * const stars = await prisma.stars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StarsFindUniqueOrThrowArgs>(args: SelectSubset<T, StarsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsFindFirstArgs} args - Arguments to find a Stars
     * @example
     * // Get one Stars
     * const stars = await prisma.stars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StarsFindFirstArgs>(args?: SelectSubset<T, StarsFindFirstArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsFindFirstOrThrowArgs} args - Arguments to find a Stars
     * @example
     * // Get one Stars
     * const stars = await prisma.stars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StarsFindFirstOrThrowArgs>(args?: SelectSubset<T, StarsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stars
     * const stars = await prisma.stars.findMany()
     * 
     * // Get first 10 Stars
     * const stars = await prisma.stars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const starsWithIdOnly = await prisma.stars.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StarsFindManyArgs>(args?: SelectSubset<T, StarsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stars.
     * @param {StarsCreateArgs} args - Arguments to create a Stars.
     * @example
     * // Create one Stars
     * const Stars = await prisma.stars.create({
     *   data: {
     *     // ... data to create a Stars
     *   }
     * })
     * 
     */
    create<T extends StarsCreateArgs>(args: SelectSubset<T, StarsCreateArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stars.
     * @param {StarsCreateManyArgs} args - Arguments to create many Stars.
     * @example
     * // Create many Stars
     * const stars = await prisma.stars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StarsCreateManyArgs>(args?: SelectSubset<T, StarsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stars and returns the data saved in the database.
     * @param {StarsCreateManyAndReturnArgs} args - Arguments to create many Stars.
     * @example
     * // Create many Stars
     * const stars = await prisma.stars.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stars and only return the `id`
     * const starsWithIdOnly = await prisma.stars.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StarsCreateManyAndReturnArgs>(args?: SelectSubset<T, StarsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stars.
     * @param {StarsDeleteArgs} args - Arguments to delete one Stars.
     * @example
     * // Delete one Stars
     * const Stars = await prisma.stars.delete({
     *   where: {
     *     // ... filter to delete one Stars
     *   }
     * })
     * 
     */
    delete<T extends StarsDeleteArgs>(args: SelectSubset<T, StarsDeleteArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stars.
     * @param {StarsUpdateArgs} args - Arguments to update one Stars.
     * @example
     * // Update one Stars
     * const stars = await prisma.stars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StarsUpdateArgs>(args: SelectSubset<T, StarsUpdateArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stars.
     * @param {StarsDeleteManyArgs} args - Arguments to filter Stars to delete.
     * @example
     * // Delete a few Stars
     * const { count } = await prisma.stars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StarsDeleteManyArgs>(args?: SelectSubset<T, StarsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stars
     * const stars = await prisma.stars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StarsUpdateManyArgs>(args: SelectSubset<T, StarsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stars and returns the data updated in the database.
     * @param {StarsUpdateManyAndReturnArgs} args - Arguments to update many Stars.
     * @example
     * // Update many Stars
     * const stars = await prisma.stars.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stars and only return the `id`
     * const starsWithIdOnly = await prisma.stars.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StarsUpdateManyAndReturnArgs>(args: SelectSubset<T, StarsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stars.
     * @param {StarsUpsertArgs} args - Arguments to update or create a Stars.
     * @example
     * // Update or create a Stars
     * const stars = await prisma.stars.upsert({
     *   create: {
     *     // ... data to create a Stars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stars we want to update
     *   }
     * })
     */
    upsert<T extends StarsUpsertArgs>(args: SelectSubset<T, StarsUpsertArgs<ExtArgs>>): Prisma__StarsClient<$Result.GetResult<Prisma.$StarsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsCountArgs} args - Arguments to filter Stars to count.
     * @example
     * // Count the number of Stars
     * const count = await prisma.stars.count({
     *   where: {
     *     // ... the filter for the Stars we want to count
     *   }
     * })
    **/
    count<T extends StarsCountArgs>(
      args?: Subset<T, StarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StarsAggregateArgs>(args: Subset<T, StarsAggregateArgs>): Prisma.PrismaPromise<GetStarsAggregateType<T>>

    /**
     * Group by Stars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StarsGroupByArgs['orderBy'] }
        : { orderBy?: StarsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stars model
   */
  readonly fields: StarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stars model
   */
  interface StarsFieldRefs {
    readonly id: FieldRef<"Stars", 'String'>
    readonly star: FieldRef<"Stars", 'Float'>
    readonly createdAt: FieldRef<"Stars", 'DateTime'>
    readonly updatedAt: FieldRef<"Stars", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stars findUnique
   */
  export type StarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Filter, which Stars to fetch.
     */
    where: StarsWhereUniqueInput
  }

  /**
   * Stars findUniqueOrThrow
   */
  export type StarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Filter, which Stars to fetch.
     */
    where: StarsWhereUniqueInput
  }

  /**
   * Stars findFirst
   */
  export type StarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Filter, which Stars to fetch.
     */
    where?: StarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stars to fetch.
     */
    orderBy?: StarsOrderByWithRelationInput | StarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stars.
     */
    cursor?: StarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stars.
     */
    distinct?: StarsScalarFieldEnum | StarsScalarFieldEnum[]
  }

  /**
   * Stars findFirstOrThrow
   */
  export type StarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Filter, which Stars to fetch.
     */
    where?: StarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stars to fetch.
     */
    orderBy?: StarsOrderByWithRelationInput | StarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stars.
     */
    cursor?: StarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stars.
     */
    distinct?: StarsScalarFieldEnum | StarsScalarFieldEnum[]
  }

  /**
   * Stars findMany
   */
  export type StarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Filter, which Stars to fetch.
     */
    where?: StarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stars to fetch.
     */
    orderBy?: StarsOrderByWithRelationInput | StarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stars.
     */
    cursor?: StarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stars.
     */
    skip?: number
    distinct?: StarsScalarFieldEnum | StarsScalarFieldEnum[]
  }

  /**
   * Stars create
   */
  export type StarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * The data needed to create a Stars.
     */
    data: XOR<StarsCreateInput, StarsUncheckedCreateInput>
  }

  /**
   * Stars createMany
   */
  export type StarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stars.
     */
    data: StarsCreateManyInput | StarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stars createManyAndReturn
   */
  export type StarsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * The data used to create many Stars.
     */
    data: StarsCreateManyInput | StarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stars update
   */
  export type StarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * The data needed to update a Stars.
     */
    data: XOR<StarsUpdateInput, StarsUncheckedUpdateInput>
    /**
     * Choose, which Stars to update.
     */
    where: StarsWhereUniqueInput
  }

  /**
   * Stars updateMany
   */
  export type StarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stars.
     */
    data: XOR<StarsUpdateManyMutationInput, StarsUncheckedUpdateManyInput>
    /**
     * Filter which Stars to update
     */
    where?: StarsWhereInput
    /**
     * Limit how many Stars to update.
     */
    limit?: number
  }

  /**
   * Stars updateManyAndReturn
   */
  export type StarsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * The data used to update Stars.
     */
    data: XOR<StarsUpdateManyMutationInput, StarsUncheckedUpdateManyInput>
    /**
     * Filter which Stars to update
     */
    where?: StarsWhereInput
    /**
     * Limit how many Stars to update.
     */
    limit?: number
  }

  /**
   * Stars upsert
   */
  export type StarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * The filter to search for the Stars to update in case it exists.
     */
    where: StarsWhereUniqueInput
    /**
     * In case the Stars found by the `where` argument doesn't exist, create a new Stars with this data.
     */
    create: XOR<StarsCreateInput, StarsUncheckedCreateInput>
    /**
     * In case the Stars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StarsUpdateInput, StarsUncheckedUpdateInput>
  }

  /**
   * Stars delete
   */
  export type StarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
    /**
     * Filter which Stars to delete.
     */
    where: StarsWhereUniqueInput
  }

  /**
   * Stars deleteMany
   */
  export type StarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stars to delete
     */
    where?: StarsWhereInput
    /**
     * Limit how many Stars to delete.
     */
    limit?: number
  }

  /**
   * Stars without action
   */
  export type StarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stars
     */
    select?: StarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stars
     */
    omit?: StarsOmit<ExtArgs> | null
  }


  /**
   * Model Levels
   */

  export type AggregateLevels = {
    _count: LevelsCountAggregateOutputType | null
    _min: LevelsMinAggregateOutputType | null
    _max: LevelsMaxAggregateOutputType | null
  }

  export type LevelsMinAggregateOutputType = {
    id: string | null
    nameUz: string | null
    nameRu: string | null
    nameEn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LevelsMaxAggregateOutputType = {
    id: string | null
    nameUz: string | null
    nameRu: string | null
    nameEn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LevelsCountAggregateOutputType = {
    id: number
    nameUz: number
    nameRu: number
    nameEn: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LevelsMinAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LevelsMaxAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LevelsCountAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LevelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Levels to aggregate.
     */
    where?: LevelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelsOrderByWithRelationInput | LevelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Levels
    **/
    _count?: true | LevelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelsMaxAggregateInputType
  }

  export type GetLevelsAggregateType<T extends LevelsAggregateArgs> = {
        [P in keyof T & keyof AggregateLevels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevels[P]>
      : GetScalarType<T[P], AggregateLevels[P]>
  }




  export type LevelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelsWhereInput
    orderBy?: LevelsOrderByWithAggregationInput | LevelsOrderByWithAggregationInput[]
    by: LevelsScalarFieldEnum[] | LevelsScalarFieldEnum
    having?: LevelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelsCountAggregateInputType | true
    _min?: LevelsMinAggregateInputType
    _max?: LevelsMaxAggregateInputType
  }

  export type LevelsGroupByOutputType = {
    id: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt: Date
    updatedAt: Date
    _count: LevelsCountAggregateOutputType | null
    _min: LevelsMinAggregateOutputType | null
    _max: LevelsMaxAggregateOutputType | null
  }

  type GetLevelsGroupByPayload<T extends LevelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LevelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelsGroupByOutputType[P]>
            : GetScalarType<T[P], LevelsGroupByOutputType[P]>
        }
      >
    >


  export type LevelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["levels"]>

  export type LevelsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["levels"]>

  export type LevelsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["levels"]>

  export type LevelsSelectScalar = {
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LevelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameUz" | "nameRu" | "nameEn" | "createdAt" | "updatedAt", ExtArgs["result"]["levels"]>

  export type $LevelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Levels"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameUz: string
      nameRu: string
      nameEn: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["levels"]>
    composites: {}
  }

  type LevelsGetPayload<S extends boolean | null | undefined | LevelsDefaultArgs> = $Result.GetResult<Prisma.$LevelsPayload, S>

  type LevelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LevelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LevelsCountAggregateInputType | true
    }

  export interface LevelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Levels'], meta: { name: 'Levels' } }
    /**
     * Find zero or one Levels that matches the filter.
     * @param {LevelsFindUniqueArgs} args - Arguments to find a Levels
     * @example
     * // Get one Levels
     * const levels = await prisma.levels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LevelsFindUniqueArgs>(args: SelectSubset<T, LevelsFindUniqueArgs<ExtArgs>>): Prisma__LevelsClient<$Result.GetResult<Prisma.$LevelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Levels that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LevelsFindUniqueOrThrowArgs} args - Arguments to find a Levels
     * @example
     * // Get one Levels
     * const levels = await prisma.levels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LevelsFindUniqueOrThrowArgs>(args: SelectSubset<T, LevelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LevelsClient<$Result.GetResult<Prisma.$LevelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelsFindFirstArgs} args - Arguments to find a Levels
     * @example
     * // Get one Levels
     * const levels = await prisma.levels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LevelsFindFirstArgs>(args?: SelectSubset<T, LevelsFindFirstArgs<ExtArgs>>): Prisma__LevelsClient<$Result.GetResult<Prisma.$LevelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Levels that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelsFindFirstOrThrowArgs} args - Arguments to find a Levels
     * @example
     * // Get one Levels
     * const levels = await prisma.levels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LevelsFindFirstOrThrowArgs>(args?: SelectSubset<T, LevelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LevelsClient<$Result.GetResult<Prisma.$LevelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Levels
     * const levels = await prisma.levels.findMany()
     * 
     * // Get first 10 Levels
     * const levels = await prisma.levels.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const levelsWithIdOnly = await prisma.levels.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LevelsFindManyArgs>(args?: SelectSubset<T, LevelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Levels.
     * @param {LevelsCreateArgs} args - Arguments to create a Levels.
     * @example
     * // Create one Levels
     * const Levels = await prisma.levels.create({
     *   data: {
     *     // ... data to create a Levels
     *   }
     * })
     * 
     */
    create<T extends LevelsCreateArgs>(args: SelectSubset<T, LevelsCreateArgs<ExtArgs>>): Prisma__LevelsClient<$Result.GetResult<Prisma.$LevelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Levels.
     * @param {LevelsCreateManyArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const levels = await prisma.levels.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LevelsCreateManyArgs>(args?: SelectSubset<T, LevelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Levels and returns the data saved in the database.
     * @param {LevelsCreateManyAndReturnArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const levels = await prisma.levels.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Levels and only return the `id`
     * const levelsWithIdOnly = await prisma.levels.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LevelsCreateManyAndReturnArgs>(args?: SelectSubset<T, LevelsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Levels.
     * @param {LevelsDeleteArgs} args - Arguments to delete one Levels.
     * @example
     * // Delete one Levels
     * const Levels = await prisma.levels.delete({
     *   where: {
     *     // ... filter to delete one Levels
     *   }
     * })
     * 
     */
    delete<T extends LevelsDeleteArgs>(args: SelectSubset<T, LevelsDeleteArgs<ExtArgs>>): Prisma__LevelsClient<$Result.GetResult<Prisma.$LevelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Levels.
     * @param {LevelsUpdateArgs} args - Arguments to update one Levels.
     * @example
     * // Update one Levels
     * const levels = await prisma.levels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LevelsUpdateArgs>(args: SelectSubset<T, LevelsUpdateArgs<ExtArgs>>): Prisma__LevelsClient<$Result.GetResult<Prisma.$LevelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Levels.
     * @param {LevelsDeleteManyArgs} args - Arguments to filter Levels to delete.
     * @example
     * // Delete a few Levels
     * const { count } = await prisma.levels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LevelsDeleteManyArgs>(args?: SelectSubset<T, LevelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Levels
     * const levels = await prisma.levels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LevelsUpdateManyArgs>(args: SelectSubset<T, LevelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels and returns the data updated in the database.
     * @param {LevelsUpdateManyAndReturnArgs} args - Arguments to update many Levels.
     * @example
     * // Update many Levels
     * const levels = await prisma.levels.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Levels and only return the `id`
     * const levelsWithIdOnly = await prisma.levels.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LevelsUpdateManyAndReturnArgs>(args: SelectSubset<T, LevelsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Levels.
     * @param {LevelsUpsertArgs} args - Arguments to update or create a Levels.
     * @example
     * // Update or create a Levels
     * const levels = await prisma.levels.upsert({
     *   create: {
     *     // ... data to create a Levels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Levels we want to update
     *   }
     * })
     */
    upsert<T extends LevelsUpsertArgs>(args: SelectSubset<T, LevelsUpsertArgs<ExtArgs>>): Prisma__LevelsClient<$Result.GetResult<Prisma.$LevelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelsCountArgs} args - Arguments to filter Levels to count.
     * @example
     * // Count the number of Levels
     * const count = await prisma.levels.count({
     *   where: {
     *     // ... the filter for the Levels we want to count
     *   }
     * })
    **/
    count<T extends LevelsCountArgs>(
      args?: Subset<T, LevelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LevelsAggregateArgs>(args: Subset<T, LevelsAggregateArgs>): Prisma.PrismaPromise<GetLevelsAggregateType<T>>

    /**
     * Group by Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LevelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelsGroupByArgs['orderBy'] }
        : { orderBy?: LevelsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LevelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Levels model
   */
  readonly fields: LevelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Levels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LevelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Levels model
   */
  interface LevelsFieldRefs {
    readonly id: FieldRef<"Levels", 'String'>
    readonly nameUz: FieldRef<"Levels", 'String'>
    readonly nameRu: FieldRef<"Levels", 'String'>
    readonly nameEn: FieldRef<"Levels", 'String'>
    readonly createdAt: FieldRef<"Levels", 'DateTime'>
    readonly updatedAt: FieldRef<"Levels", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Levels findUnique
   */
  export type LevelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Levels
     */
    select?: LevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Levels
     */
    omit?: LevelsOmit<ExtArgs> | null
    /**
     * Filter, which Levels to fetch.
     */
    where: LevelsWhereUniqueInput
  }

  /**
   * Levels findUniqueOrThrow
   */
  export type LevelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Levels
     */
    select?: LevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Levels
     */
    omit?: LevelsOmit<ExtArgs> | null
    /**
     * Filter, which Levels to fetch.
     */
    where: LevelsWhereUniqueInput
  }

  /**
   * Levels findFirst
   */
  export type LevelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Levels
     */
    select?: LevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Levels
     */
    omit?: LevelsOmit<ExtArgs> | null
    /**
     * Filter, which Levels to fetch.
     */
    where?: LevelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelsOrderByWithRelationInput | LevelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelsScalarFieldEnum | LevelsScalarFieldEnum[]
  }

  /**
   * Levels findFirstOrThrow
   */
  export type LevelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Levels
     */
    select?: LevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Levels
     */
    omit?: LevelsOmit<ExtArgs> | null
    /**
     * Filter, which Levels to fetch.
     */
    where?: LevelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelsOrderByWithRelationInput | LevelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelsScalarFieldEnum | LevelsScalarFieldEnum[]
  }

  /**
   * Levels findMany
   */
  export type LevelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Levels
     */
    select?: LevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Levels
     */
    omit?: LevelsOmit<ExtArgs> | null
    /**
     * Filter, which Levels to fetch.
     */
    where?: LevelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelsOrderByWithRelationInput | LevelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Levels.
     */
    cursor?: LevelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    distinct?: LevelsScalarFieldEnum | LevelsScalarFieldEnum[]
  }

  /**
   * Levels create
   */
  export type LevelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Levels
     */
    select?: LevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Levels
     */
    omit?: LevelsOmit<ExtArgs> | null
    /**
     * The data needed to create a Levels.
     */
    data: XOR<LevelsCreateInput, LevelsUncheckedCreateInput>
  }

  /**
   * Levels createMany
   */
  export type LevelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Levels.
     */
    data: LevelsCreateManyInput | LevelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Levels createManyAndReturn
   */
  export type LevelsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Levels
     */
    select?: LevelsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Levels
     */
    omit?: LevelsOmit<ExtArgs> | null
    /**
     * The data used to create many Levels.
     */
    data: LevelsCreateManyInput | LevelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Levels update
   */
  export type LevelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Levels
     */
    select?: LevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Levels
     */
    omit?: LevelsOmit<ExtArgs> | null
    /**
     * The data needed to update a Levels.
     */
    data: XOR<LevelsUpdateInput, LevelsUncheckedUpdateInput>
    /**
     * Choose, which Levels to update.
     */
    where: LevelsWhereUniqueInput
  }

  /**
   * Levels updateMany
   */
  export type LevelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelsUpdateManyMutationInput, LevelsUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelsWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
  }

  /**
   * Levels updateManyAndReturn
   */
  export type LevelsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Levels
     */
    select?: LevelsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Levels
     */
    omit?: LevelsOmit<ExtArgs> | null
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelsUpdateManyMutationInput, LevelsUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelsWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
  }

  /**
   * Levels upsert
   */
  export type LevelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Levels
     */
    select?: LevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Levels
     */
    omit?: LevelsOmit<ExtArgs> | null
    /**
     * The filter to search for the Levels to update in case it exists.
     */
    where: LevelsWhereUniqueInput
    /**
     * In case the Levels found by the `where` argument doesn't exist, create a new Levels with this data.
     */
    create: XOR<LevelsCreateInput, LevelsUncheckedCreateInput>
    /**
     * In case the Levels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelsUpdateInput, LevelsUncheckedUpdateInput>
  }

  /**
   * Levels delete
   */
  export type LevelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Levels
     */
    select?: LevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Levels
     */
    omit?: LevelsOmit<ExtArgs> | null
    /**
     * Filter which Levels to delete.
     */
    where: LevelsWhereUniqueInput
  }

  /**
   * Levels deleteMany
   */
  export type LevelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Levels to delete
     */
    where?: LevelsWhereInput
    /**
     * Limit how many Levels to delete.
     */
    limit?: number
  }

  /**
   * Levels without action
   */
  export type LevelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Levels
     */
    select?: LevelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Levels
     */
    omit?: LevelsOmit<ExtArgs> | null
  }


  /**
   * Model Capacity
   */

  export type AggregateCapacity = {
    _count: CapacityCountAggregateOutputType | null
    _min: CapacityMinAggregateOutputType | null
    _max: CapacityMaxAggregateOutputType | null
  }

  export type CapacityMinAggregateOutputType = {
    id: string | null
    nameUz: string | null
    nameRu: string | null
    nameEn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CapacityMaxAggregateOutputType = {
    id: string | null
    nameUz: string | null
    nameRu: string | null
    nameEn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CapacityCountAggregateOutputType = {
    id: number
    nameUz: number
    nameRu: number
    nameEn: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CapacityMinAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CapacityMaxAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CapacityCountAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CapacityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Capacity to aggregate.
     */
    where?: CapacityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capacities to fetch.
     */
    orderBy?: CapacityOrderByWithRelationInput | CapacityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CapacityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capacities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capacities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Capacities
    **/
    _count?: true | CapacityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CapacityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CapacityMaxAggregateInputType
  }

  export type GetCapacityAggregateType<T extends CapacityAggregateArgs> = {
        [P in keyof T & keyof AggregateCapacity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCapacity[P]>
      : GetScalarType<T[P], AggregateCapacity[P]>
  }




  export type CapacityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapacityWhereInput
    orderBy?: CapacityOrderByWithAggregationInput | CapacityOrderByWithAggregationInput[]
    by: CapacityScalarFieldEnum[] | CapacityScalarFieldEnum
    having?: CapacityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CapacityCountAggregateInputType | true
    _min?: CapacityMinAggregateInputType
    _max?: CapacityMaxAggregateInputType
  }

  export type CapacityGroupByOutputType = {
    id: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt: Date
    updatedAt: Date
    _count: CapacityCountAggregateOutputType | null
    _min: CapacityMinAggregateOutputType | null
    _max: CapacityMaxAggregateOutputType | null
  }

  type GetCapacityGroupByPayload<T extends CapacityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CapacityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CapacityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CapacityGroupByOutputType[P]>
            : GetScalarType<T[P], CapacityGroupByOutputType[P]>
        }
      >
    >


  export type CapacitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["capacity"]>

  export type CapacitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["capacity"]>

  export type CapacitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["capacity"]>

  export type CapacitySelectScalar = {
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CapacityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameUz" | "nameRu" | "nameEn" | "createdAt" | "updatedAt", ExtArgs["result"]["capacity"]>

  export type $CapacityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Capacity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameUz: string
      nameRu: string
      nameEn: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["capacity"]>
    composites: {}
  }

  type CapacityGetPayload<S extends boolean | null | undefined | CapacityDefaultArgs> = $Result.GetResult<Prisma.$CapacityPayload, S>

  type CapacityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CapacityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CapacityCountAggregateInputType | true
    }

  export interface CapacityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Capacity'], meta: { name: 'Capacity' } }
    /**
     * Find zero or one Capacity that matches the filter.
     * @param {CapacityFindUniqueArgs} args - Arguments to find a Capacity
     * @example
     * // Get one Capacity
     * const capacity = await prisma.capacity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CapacityFindUniqueArgs>(args: SelectSubset<T, CapacityFindUniqueArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Capacity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CapacityFindUniqueOrThrowArgs} args - Arguments to find a Capacity
     * @example
     * // Get one Capacity
     * const capacity = await prisma.capacity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CapacityFindUniqueOrThrowArgs>(args: SelectSubset<T, CapacityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Capacity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityFindFirstArgs} args - Arguments to find a Capacity
     * @example
     * // Get one Capacity
     * const capacity = await prisma.capacity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CapacityFindFirstArgs>(args?: SelectSubset<T, CapacityFindFirstArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Capacity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityFindFirstOrThrowArgs} args - Arguments to find a Capacity
     * @example
     * // Get one Capacity
     * const capacity = await prisma.capacity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CapacityFindFirstOrThrowArgs>(args?: SelectSubset<T, CapacityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Capacities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Capacities
     * const capacities = await prisma.capacity.findMany()
     * 
     * // Get first 10 Capacities
     * const capacities = await prisma.capacity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const capacityWithIdOnly = await prisma.capacity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CapacityFindManyArgs>(args?: SelectSubset<T, CapacityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Capacity.
     * @param {CapacityCreateArgs} args - Arguments to create a Capacity.
     * @example
     * // Create one Capacity
     * const Capacity = await prisma.capacity.create({
     *   data: {
     *     // ... data to create a Capacity
     *   }
     * })
     * 
     */
    create<T extends CapacityCreateArgs>(args: SelectSubset<T, CapacityCreateArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Capacities.
     * @param {CapacityCreateManyArgs} args - Arguments to create many Capacities.
     * @example
     * // Create many Capacities
     * const capacity = await prisma.capacity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CapacityCreateManyArgs>(args?: SelectSubset<T, CapacityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Capacities and returns the data saved in the database.
     * @param {CapacityCreateManyAndReturnArgs} args - Arguments to create many Capacities.
     * @example
     * // Create many Capacities
     * const capacity = await prisma.capacity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Capacities and only return the `id`
     * const capacityWithIdOnly = await prisma.capacity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CapacityCreateManyAndReturnArgs>(args?: SelectSubset<T, CapacityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Capacity.
     * @param {CapacityDeleteArgs} args - Arguments to delete one Capacity.
     * @example
     * // Delete one Capacity
     * const Capacity = await prisma.capacity.delete({
     *   where: {
     *     // ... filter to delete one Capacity
     *   }
     * })
     * 
     */
    delete<T extends CapacityDeleteArgs>(args: SelectSubset<T, CapacityDeleteArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Capacity.
     * @param {CapacityUpdateArgs} args - Arguments to update one Capacity.
     * @example
     * // Update one Capacity
     * const capacity = await prisma.capacity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CapacityUpdateArgs>(args: SelectSubset<T, CapacityUpdateArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Capacities.
     * @param {CapacityDeleteManyArgs} args - Arguments to filter Capacities to delete.
     * @example
     * // Delete a few Capacities
     * const { count } = await prisma.capacity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CapacityDeleteManyArgs>(args?: SelectSubset<T, CapacityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Capacities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Capacities
     * const capacity = await prisma.capacity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CapacityUpdateManyArgs>(args: SelectSubset<T, CapacityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Capacities and returns the data updated in the database.
     * @param {CapacityUpdateManyAndReturnArgs} args - Arguments to update many Capacities.
     * @example
     * // Update many Capacities
     * const capacity = await prisma.capacity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Capacities and only return the `id`
     * const capacityWithIdOnly = await prisma.capacity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CapacityUpdateManyAndReturnArgs>(args: SelectSubset<T, CapacityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Capacity.
     * @param {CapacityUpsertArgs} args - Arguments to update or create a Capacity.
     * @example
     * // Update or create a Capacity
     * const capacity = await prisma.capacity.upsert({
     *   create: {
     *     // ... data to create a Capacity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Capacity we want to update
     *   }
     * })
     */
    upsert<T extends CapacityUpsertArgs>(args: SelectSubset<T, CapacityUpsertArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Capacities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityCountArgs} args - Arguments to filter Capacities to count.
     * @example
     * // Count the number of Capacities
     * const count = await prisma.capacity.count({
     *   where: {
     *     // ... the filter for the Capacities we want to count
     *   }
     * })
    **/
    count<T extends CapacityCountArgs>(
      args?: Subset<T, CapacityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CapacityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Capacity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CapacityAggregateArgs>(args: Subset<T, CapacityAggregateArgs>): Prisma.PrismaPromise<GetCapacityAggregateType<T>>

    /**
     * Group by Capacity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CapacityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CapacityGroupByArgs['orderBy'] }
        : { orderBy?: CapacityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CapacityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCapacityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Capacity model
   */
  readonly fields: CapacityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Capacity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CapacityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Capacity model
   */
  interface CapacityFieldRefs {
    readonly id: FieldRef<"Capacity", 'String'>
    readonly nameUz: FieldRef<"Capacity", 'String'>
    readonly nameRu: FieldRef<"Capacity", 'String'>
    readonly nameEn: FieldRef<"Capacity", 'String'>
    readonly createdAt: FieldRef<"Capacity", 'DateTime'>
    readonly updatedAt: FieldRef<"Capacity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Capacity findUnique
   */
  export type CapacityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * Filter, which Capacity to fetch.
     */
    where: CapacityWhereUniqueInput
  }

  /**
   * Capacity findUniqueOrThrow
   */
  export type CapacityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * Filter, which Capacity to fetch.
     */
    where: CapacityWhereUniqueInput
  }

  /**
   * Capacity findFirst
   */
  export type CapacityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * Filter, which Capacity to fetch.
     */
    where?: CapacityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capacities to fetch.
     */
    orderBy?: CapacityOrderByWithRelationInput | CapacityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Capacities.
     */
    cursor?: CapacityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capacities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capacities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Capacities.
     */
    distinct?: CapacityScalarFieldEnum | CapacityScalarFieldEnum[]
  }

  /**
   * Capacity findFirstOrThrow
   */
  export type CapacityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * Filter, which Capacity to fetch.
     */
    where?: CapacityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capacities to fetch.
     */
    orderBy?: CapacityOrderByWithRelationInput | CapacityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Capacities.
     */
    cursor?: CapacityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capacities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capacities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Capacities.
     */
    distinct?: CapacityScalarFieldEnum | CapacityScalarFieldEnum[]
  }

  /**
   * Capacity findMany
   */
  export type CapacityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * Filter, which Capacities to fetch.
     */
    where?: CapacityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capacities to fetch.
     */
    orderBy?: CapacityOrderByWithRelationInput | CapacityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Capacities.
     */
    cursor?: CapacityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capacities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capacities.
     */
    skip?: number
    distinct?: CapacityScalarFieldEnum | CapacityScalarFieldEnum[]
  }

  /**
   * Capacity create
   */
  export type CapacityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * The data needed to create a Capacity.
     */
    data: XOR<CapacityCreateInput, CapacityUncheckedCreateInput>
  }

  /**
   * Capacity createMany
   */
  export type CapacityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Capacities.
     */
    data: CapacityCreateManyInput | CapacityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Capacity createManyAndReturn
   */
  export type CapacityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * The data used to create many Capacities.
     */
    data: CapacityCreateManyInput | CapacityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Capacity update
   */
  export type CapacityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * The data needed to update a Capacity.
     */
    data: XOR<CapacityUpdateInput, CapacityUncheckedUpdateInput>
    /**
     * Choose, which Capacity to update.
     */
    where: CapacityWhereUniqueInput
  }

  /**
   * Capacity updateMany
   */
  export type CapacityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Capacities.
     */
    data: XOR<CapacityUpdateManyMutationInput, CapacityUncheckedUpdateManyInput>
    /**
     * Filter which Capacities to update
     */
    where?: CapacityWhereInput
    /**
     * Limit how many Capacities to update.
     */
    limit?: number
  }

  /**
   * Capacity updateManyAndReturn
   */
  export type CapacityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * The data used to update Capacities.
     */
    data: XOR<CapacityUpdateManyMutationInput, CapacityUncheckedUpdateManyInput>
    /**
     * Filter which Capacities to update
     */
    where?: CapacityWhereInput
    /**
     * Limit how many Capacities to update.
     */
    limit?: number
  }

  /**
   * Capacity upsert
   */
  export type CapacityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * The filter to search for the Capacity to update in case it exists.
     */
    where: CapacityWhereUniqueInput
    /**
     * In case the Capacity found by the `where` argument doesn't exist, create a new Capacity with this data.
     */
    create: XOR<CapacityCreateInput, CapacityUncheckedCreateInput>
    /**
     * In case the Capacity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CapacityUpdateInput, CapacityUncheckedUpdateInput>
  }

  /**
   * Capacity delete
   */
  export type CapacityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
    /**
     * Filter which Capacity to delete.
     */
    where: CapacityWhereUniqueInput
  }

  /**
   * Capacity deleteMany
   */
  export type CapacityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Capacities to delete
     */
    where?: CapacityWhereInput
    /**
     * Limit how many Capacities to delete.
     */
    limit?: number
  }

  /**
   * Capacity without action
   */
  export type CapacityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capacity
     */
    omit?: CapacityOmit<ExtArgs> | null
  }


  /**
   * Model Sizes
   */

  export type AggregateSizes = {
    _count: SizesCountAggregateOutputType | null
    _min: SizesMinAggregateOutputType | null
    _max: SizesMaxAggregateOutputType | null
  }

  export type SizesMinAggregateOutputType = {
    id: string | null
    nameUz: string | null
    nameRu: string | null
    nameEn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SizesMaxAggregateOutputType = {
    id: string | null
    nameUz: string | null
    nameRu: string | null
    nameEn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SizesCountAggregateOutputType = {
    id: number
    nameUz: number
    nameRu: number
    nameEn: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SizesMinAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SizesMaxAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SizesCountAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SizesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sizes to aggregate.
     */
    where?: SizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizesOrderByWithRelationInput | SizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sizes
    **/
    _count?: true | SizesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SizesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SizesMaxAggregateInputType
  }

  export type GetSizesAggregateType<T extends SizesAggregateArgs> = {
        [P in keyof T & keyof AggregateSizes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSizes[P]>
      : GetScalarType<T[P], AggregateSizes[P]>
  }




  export type SizesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SizesWhereInput
    orderBy?: SizesOrderByWithAggregationInput | SizesOrderByWithAggregationInput[]
    by: SizesScalarFieldEnum[] | SizesScalarFieldEnum
    having?: SizesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SizesCountAggregateInputType | true
    _min?: SizesMinAggregateInputType
    _max?: SizesMaxAggregateInputType
  }

  export type SizesGroupByOutputType = {
    id: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt: Date
    updatedAt: Date
    _count: SizesCountAggregateOutputType | null
    _min: SizesMinAggregateOutputType | null
    _max: SizesMaxAggregateOutputType | null
  }

  type GetSizesGroupByPayload<T extends SizesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SizesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SizesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SizesGroupByOutputType[P]>
            : GetScalarType<T[P], SizesGroupByOutputType[P]>
        }
      >
    >


  export type SizesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sizes"]>

  export type SizesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sizes"]>

  export type SizesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sizes"]>

  export type SizesSelectScalar = {
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SizesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameUz" | "nameRu" | "nameEn" | "createdAt" | "updatedAt", ExtArgs["result"]["sizes"]>

  export type $SizesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sizes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameUz: string
      nameRu: string
      nameEn: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sizes"]>
    composites: {}
  }

  type SizesGetPayload<S extends boolean | null | undefined | SizesDefaultArgs> = $Result.GetResult<Prisma.$SizesPayload, S>

  type SizesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SizesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SizesCountAggregateInputType | true
    }

  export interface SizesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sizes'], meta: { name: 'Sizes' } }
    /**
     * Find zero or one Sizes that matches the filter.
     * @param {SizesFindUniqueArgs} args - Arguments to find a Sizes
     * @example
     * // Get one Sizes
     * const sizes = await prisma.sizes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SizesFindUniqueArgs>(args: SelectSubset<T, SizesFindUniqueArgs<ExtArgs>>): Prisma__SizesClient<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sizes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SizesFindUniqueOrThrowArgs} args - Arguments to find a Sizes
     * @example
     * // Get one Sizes
     * const sizes = await prisma.sizes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SizesFindUniqueOrThrowArgs>(args: SelectSubset<T, SizesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SizesClient<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizesFindFirstArgs} args - Arguments to find a Sizes
     * @example
     * // Get one Sizes
     * const sizes = await prisma.sizes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SizesFindFirstArgs>(args?: SelectSubset<T, SizesFindFirstArgs<ExtArgs>>): Prisma__SizesClient<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sizes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizesFindFirstOrThrowArgs} args - Arguments to find a Sizes
     * @example
     * // Get one Sizes
     * const sizes = await prisma.sizes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SizesFindFirstOrThrowArgs>(args?: SelectSubset<T, SizesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SizesClient<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sizes
     * const sizes = await prisma.sizes.findMany()
     * 
     * // Get first 10 Sizes
     * const sizes = await prisma.sizes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sizesWithIdOnly = await prisma.sizes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SizesFindManyArgs>(args?: SelectSubset<T, SizesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sizes.
     * @param {SizesCreateArgs} args - Arguments to create a Sizes.
     * @example
     * // Create one Sizes
     * const Sizes = await prisma.sizes.create({
     *   data: {
     *     // ... data to create a Sizes
     *   }
     * })
     * 
     */
    create<T extends SizesCreateArgs>(args: SelectSubset<T, SizesCreateArgs<ExtArgs>>): Prisma__SizesClient<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sizes.
     * @param {SizesCreateManyArgs} args - Arguments to create many Sizes.
     * @example
     * // Create many Sizes
     * const sizes = await prisma.sizes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SizesCreateManyArgs>(args?: SelectSubset<T, SizesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sizes and returns the data saved in the database.
     * @param {SizesCreateManyAndReturnArgs} args - Arguments to create many Sizes.
     * @example
     * // Create many Sizes
     * const sizes = await prisma.sizes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sizes and only return the `id`
     * const sizesWithIdOnly = await prisma.sizes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SizesCreateManyAndReturnArgs>(args?: SelectSubset<T, SizesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sizes.
     * @param {SizesDeleteArgs} args - Arguments to delete one Sizes.
     * @example
     * // Delete one Sizes
     * const Sizes = await prisma.sizes.delete({
     *   where: {
     *     // ... filter to delete one Sizes
     *   }
     * })
     * 
     */
    delete<T extends SizesDeleteArgs>(args: SelectSubset<T, SizesDeleteArgs<ExtArgs>>): Prisma__SizesClient<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sizes.
     * @param {SizesUpdateArgs} args - Arguments to update one Sizes.
     * @example
     * // Update one Sizes
     * const sizes = await prisma.sizes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SizesUpdateArgs>(args: SelectSubset<T, SizesUpdateArgs<ExtArgs>>): Prisma__SizesClient<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sizes.
     * @param {SizesDeleteManyArgs} args - Arguments to filter Sizes to delete.
     * @example
     * // Delete a few Sizes
     * const { count } = await prisma.sizes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SizesDeleteManyArgs>(args?: SelectSubset<T, SizesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sizes
     * const sizes = await prisma.sizes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SizesUpdateManyArgs>(args: SelectSubset<T, SizesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes and returns the data updated in the database.
     * @param {SizesUpdateManyAndReturnArgs} args - Arguments to update many Sizes.
     * @example
     * // Update many Sizes
     * const sizes = await prisma.sizes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sizes and only return the `id`
     * const sizesWithIdOnly = await prisma.sizes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SizesUpdateManyAndReturnArgs>(args: SelectSubset<T, SizesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sizes.
     * @param {SizesUpsertArgs} args - Arguments to update or create a Sizes.
     * @example
     * // Update or create a Sizes
     * const sizes = await prisma.sizes.upsert({
     *   create: {
     *     // ... data to create a Sizes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sizes we want to update
     *   }
     * })
     */
    upsert<T extends SizesUpsertArgs>(args: SelectSubset<T, SizesUpsertArgs<ExtArgs>>): Prisma__SizesClient<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizesCountArgs} args - Arguments to filter Sizes to count.
     * @example
     * // Count the number of Sizes
     * const count = await prisma.sizes.count({
     *   where: {
     *     // ... the filter for the Sizes we want to count
     *   }
     * })
    **/
    count<T extends SizesCountArgs>(
      args?: Subset<T, SizesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SizesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SizesAggregateArgs>(args: Subset<T, SizesAggregateArgs>): Prisma.PrismaPromise<GetSizesAggregateType<T>>

    /**
     * Group by Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SizesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SizesGroupByArgs['orderBy'] }
        : { orderBy?: SizesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SizesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSizesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sizes model
   */
  readonly fields: SizesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sizes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SizesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sizes model
   */
  interface SizesFieldRefs {
    readonly id: FieldRef<"Sizes", 'String'>
    readonly nameUz: FieldRef<"Sizes", 'String'>
    readonly nameRu: FieldRef<"Sizes", 'String'>
    readonly nameEn: FieldRef<"Sizes", 'String'>
    readonly createdAt: FieldRef<"Sizes", 'DateTime'>
    readonly updatedAt: FieldRef<"Sizes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sizes findUnique
   */
  export type SizesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * Filter, which Sizes to fetch.
     */
    where: SizesWhereUniqueInput
  }

  /**
   * Sizes findUniqueOrThrow
   */
  export type SizesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * Filter, which Sizes to fetch.
     */
    where: SizesWhereUniqueInput
  }

  /**
   * Sizes findFirst
   */
  export type SizesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * Filter, which Sizes to fetch.
     */
    where?: SizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizesOrderByWithRelationInput | SizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sizes.
     */
    cursor?: SizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sizes.
     */
    distinct?: SizesScalarFieldEnum | SizesScalarFieldEnum[]
  }

  /**
   * Sizes findFirstOrThrow
   */
  export type SizesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * Filter, which Sizes to fetch.
     */
    where?: SizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizesOrderByWithRelationInput | SizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sizes.
     */
    cursor?: SizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sizes.
     */
    distinct?: SizesScalarFieldEnum | SizesScalarFieldEnum[]
  }

  /**
   * Sizes findMany
   */
  export type SizesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * Filter, which Sizes to fetch.
     */
    where?: SizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizesOrderByWithRelationInput | SizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sizes.
     */
    cursor?: SizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    distinct?: SizesScalarFieldEnum | SizesScalarFieldEnum[]
  }

  /**
   * Sizes create
   */
  export type SizesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * The data needed to create a Sizes.
     */
    data: XOR<SizesCreateInput, SizesUncheckedCreateInput>
  }

  /**
   * Sizes createMany
   */
  export type SizesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sizes.
     */
    data: SizesCreateManyInput | SizesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sizes createManyAndReturn
   */
  export type SizesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * The data used to create many Sizes.
     */
    data: SizesCreateManyInput | SizesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sizes update
   */
  export type SizesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * The data needed to update a Sizes.
     */
    data: XOR<SizesUpdateInput, SizesUncheckedUpdateInput>
    /**
     * Choose, which Sizes to update.
     */
    where: SizesWhereUniqueInput
  }

  /**
   * Sizes updateMany
   */
  export type SizesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sizes.
     */
    data: XOR<SizesUpdateManyMutationInput, SizesUncheckedUpdateManyInput>
    /**
     * Filter which Sizes to update
     */
    where?: SizesWhereInput
    /**
     * Limit how many Sizes to update.
     */
    limit?: number
  }

  /**
   * Sizes updateManyAndReturn
   */
  export type SizesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * The data used to update Sizes.
     */
    data: XOR<SizesUpdateManyMutationInput, SizesUncheckedUpdateManyInput>
    /**
     * Filter which Sizes to update
     */
    where?: SizesWhereInput
    /**
     * Limit how many Sizes to update.
     */
    limit?: number
  }

  /**
   * Sizes upsert
   */
  export type SizesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * The filter to search for the Sizes to update in case it exists.
     */
    where: SizesWhereUniqueInput
    /**
     * In case the Sizes found by the `where` argument doesn't exist, create a new Sizes with this data.
     */
    create: XOR<SizesCreateInput, SizesUncheckedCreateInput>
    /**
     * In case the Sizes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SizesUpdateInput, SizesUncheckedUpdateInput>
  }

  /**
   * Sizes delete
   */
  export type SizesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * Filter which Sizes to delete.
     */
    where: SizesWhereUniqueInput
  }

  /**
   * Sizes deleteMany
   */
  export type SizesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sizes to delete
     */
    where?: SizesWhereInput
    /**
     * Limit how many Sizes to delete.
     */
    limit?: number
  }

  /**
   * Sizes without action
   */
  export type SizesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
  }


  /**
   * Model Brands
   */

  export type AggregateBrands = {
    _count: BrandsCountAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  export type BrandsMinAggregateOutputType = {
    id: string | null
    nameUz: string | null
    nameRu: string | null
    nameEn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandsMaxAggregateOutputType = {
    id: string | null
    nameUz: string | null
    nameRu: string | null
    nameEn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandsCountAggregateOutputType = {
    id: number
    nameUz: number
    nameRu: number
    nameEn: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrandsMinAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandsMaxAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandsCountAggregateInputType = {
    id?: true
    nameUz?: true
    nameRu?: true
    nameEn?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrandsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to aggregate.
     */
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandsMaxAggregateInputType
  }

  export type GetBrandsAggregateType<T extends BrandsAggregateArgs> = {
        [P in keyof T & keyof AggregateBrands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrands[P]>
      : GetScalarType<T[P], AggregateBrands[P]>
  }




  export type BrandsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandsWhereInput
    orderBy?: BrandsOrderByWithAggregationInput | BrandsOrderByWithAggregationInput[]
    by: BrandsScalarFieldEnum[] | BrandsScalarFieldEnum
    having?: BrandsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandsCountAggregateInputType | true
    _min?: BrandsMinAggregateInputType
    _max?: BrandsMaxAggregateInputType
  }

  export type BrandsGroupByOutputType = {
    id: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt: Date
    updatedAt: Date
    _count: BrandsCountAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  type GetBrandsGroupByPayload<T extends BrandsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandsGroupByOutputType[P]>
            : GetScalarType<T[P], BrandsGroupByOutputType[P]>
        }
      >
    >


  export type BrandsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["brands"]>

  export type BrandsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["brands"]>

  export type BrandsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["brands"]>

  export type BrandsSelectScalar = {
    id?: boolean
    nameUz?: boolean
    nameRu?: boolean
    nameEn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BrandsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameUz" | "nameRu" | "nameEn" | "createdAt" | "updatedAt", ExtArgs["result"]["brands"]>

  export type $BrandsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brands"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameUz: string
      nameRu: string
      nameEn: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["brands"]>
    composites: {}
  }

  type BrandsGetPayload<S extends boolean | null | undefined | BrandsDefaultArgs> = $Result.GetResult<Prisma.$BrandsPayload, S>

  type BrandsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandsCountAggregateInputType | true
    }

  export interface BrandsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brands'], meta: { name: 'Brands' } }
    /**
     * Find zero or one Brands that matches the filter.
     * @param {BrandsFindUniqueArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandsFindUniqueArgs>(args: SelectSubset<T, BrandsFindUniqueArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brands that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandsFindUniqueOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandsFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindFirstArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandsFindFirstArgs>(args?: SelectSubset<T, BrandsFindFirstArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brands that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindFirstOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandsFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brands.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandsWithIdOnly = await prisma.brands.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandsFindManyArgs>(args?: SelectSubset<T, BrandsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brands.
     * @param {BrandsCreateArgs} args - Arguments to create a Brands.
     * @example
     * // Create one Brands
     * const Brands = await prisma.brands.create({
     *   data: {
     *     // ... data to create a Brands
     *   }
     * })
     * 
     */
    create<T extends BrandsCreateArgs>(args: SelectSubset<T, BrandsCreateArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandsCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brands = await prisma.brands.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandsCreateManyArgs>(args?: SelectSubset<T, BrandsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandsCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brands = await prisma.brands.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandsWithIdOnly = await prisma.brands.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandsCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brands.
     * @param {BrandsDeleteArgs} args - Arguments to delete one Brands.
     * @example
     * // Delete one Brands
     * const Brands = await prisma.brands.delete({
     *   where: {
     *     // ... filter to delete one Brands
     *   }
     * })
     * 
     */
    delete<T extends BrandsDeleteArgs>(args: SelectSubset<T, BrandsDeleteArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brands.
     * @param {BrandsUpdateArgs} args - Arguments to update one Brands.
     * @example
     * // Update one Brands
     * const brands = await prisma.brands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandsUpdateArgs>(args: SelectSubset<T, BrandsUpdateArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandsDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandsDeleteManyArgs>(args?: SelectSubset<T, BrandsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brands = await prisma.brands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandsUpdateManyArgs>(args: SelectSubset<T, BrandsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandsUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brands = await prisma.brands.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandsWithIdOnly = await prisma.brands.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BrandsUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brands.
     * @param {BrandsUpsertArgs} args - Arguments to update or create a Brands.
     * @example
     * // Update or create a Brands
     * const brands = await prisma.brands.upsert({
     *   create: {
     *     // ... data to create a Brands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brands we want to update
     *   }
     * })
     */
    upsert<T extends BrandsUpsertArgs>(args: SelectSubset<T, BrandsUpsertArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brands.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandsCountArgs>(
      args?: Subset<T, BrandsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandsAggregateArgs>(args: Subset<T, BrandsAggregateArgs>): Prisma.PrismaPromise<GetBrandsAggregateType<T>>

    /**
     * Group by Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandsGroupByArgs['orderBy'] }
        : { orderBy?: BrandsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brands model
   */
  readonly fields: BrandsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Brands model
   */
  interface BrandsFieldRefs {
    readonly id: FieldRef<"Brands", 'String'>
    readonly nameUz: FieldRef<"Brands", 'String'>
    readonly nameRu: FieldRef<"Brands", 'String'>
    readonly nameEn: FieldRef<"Brands", 'String'>
    readonly createdAt: FieldRef<"Brands", 'DateTime'>
    readonly updatedAt: FieldRef<"Brands", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Brands findUnique
   */
  export type BrandsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where: BrandsWhereUniqueInput
  }

  /**
   * Brands findUniqueOrThrow
   */
  export type BrandsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where: BrandsWhereUniqueInput
  }

  /**
   * Brands findFirst
   */
  export type BrandsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * Brands findFirstOrThrow
   */
  export type BrandsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * Brands findMany
   */
  export type BrandsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * Brands create
   */
  export type BrandsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * The data needed to create a Brands.
     */
    data: XOR<BrandsCreateInput, BrandsUncheckedCreateInput>
  }

  /**
   * Brands createMany
   */
  export type BrandsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandsCreateManyInput | BrandsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brands createManyAndReturn
   */
  export type BrandsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandsCreateManyInput | BrandsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brands update
   */
  export type BrandsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * The data needed to update a Brands.
     */
    data: XOR<BrandsUpdateInput, BrandsUncheckedUpdateInput>
    /**
     * Choose, which Brands to update.
     */
    where: BrandsWhereUniqueInput
  }

  /**
   * Brands updateMany
   */
  export type BrandsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandsUpdateManyMutationInput, BrandsUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandsWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brands updateManyAndReturn
   */
  export type BrandsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandsUpdateManyMutationInput, BrandsUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandsWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brands upsert
   */
  export type BrandsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * The filter to search for the Brands to update in case it exists.
     */
    where: BrandsWhereUniqueInput
    /**
     * In case the Brands found by the `where` argument doesn't exist, create a new Brands with this data.
     */
    create: XOR<BrandsCreateInput, BrandsUncheckedCreateInput>
    /**
     * In case the Brands was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandsUpdateInput, BrandsUncheckedUpdateInput>
  }

  /**
   * Brands delete
   */
  export type BrandsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Filter which Brands to delete.
     */
    where: BrandsWhereUniqueInput
  }

  /**
   * Brands deleteMany
   */
  export type BrandsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandsWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brands without action
   */
  export type BrandsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RegionsScalarFieldEnum: {
    id: 'id',
    nameUz: 'nameUz',
    nameRu: 'nameRu',
    nameEn: 'nameEn',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegionsScalarFieldEnum = (typeof RegionsScalarFieldEnum)[keyof typeof RegionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    phone: 'phone',
    password: 'password',
    role: 'role',
    status: 'status',
    avatar: 'avatar',
    regionId: 'regionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ipAddress: 'ipAddress',
    deviceInfo: 'deviceInfo',
    createdAt: 'createdAt'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const ContactsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surName: 'surName',
    phone: 'phone',
    address: 'address',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactsScalarFieldEnum = (typeof ContactsScalarFieldEnum)[keyof typeof ContactsScalarFieldEnum]


  export const DataAboutCompanyScalarFieldEnum: {
    id: 'id',
    INN: 'INN',
    MFO: 'MFO',
    R_or_C: 'R_or_C',
    bankCode: 'bankCode',
    Oked: 'Oked',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DataAboutCompanyScalarFieldEnum = (typeof DataAboutCompanyScalarFieldEnum)[keyof typeof DataAboutCompanyScalarFieldEnum]


  export const ShowCasesScalarFieldEnum: {
    id: 'id',
    nameUz: 'nameUz',
    nameRu: 'nameRu',
    nameEn: 'nameEn',
    descriptionUz: 'descriptionUz',
    descriptionRu: 'descriptionRu',
    descriptionEn: 'descriptionEn',
    image: 'image',
    link: 'link',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShowCasesScalarFieldEnum = (typeof ShowCasesScalarFieldEnum)[keyof typeof ShowCasesScalarFieldEnum]


  export const FAQScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answer: 'answer',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FAQScalarFieldEnum = (typeof FAQScalarFieldEnum)[keyof typeof FAQScalarFieldEnum]


  export const AboutOurPageScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    links: 'links',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AboutOurPageScalarFieldEnum = (typeof AboutOurPageScalarFieldEnum)[keyof typeof AboutOurPageScalarFieldEnum]


  export const PartnersScalarFieldEnum: {
    id: 'id',
    nameUz: 'nameUz',
    nameRu: 'nameRu',
    nameEn: 'nameEn',
    images: 'images',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartnersScalarFieldEnum = (typeof PartnersScalarFieldEnum)[keyof typeof PartnersScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const StarsScalarFieldEnum: {
    id: 'id',
    star: 'star',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StarsScalarFieldEnum = (typeof StarsScalarFieldEnum)[keyof typeof StarsScalarFieldEnum]


  export const LevelsScalarFieldEnum: {
    id: 'id',
    nameUz: 'nameUz',
    nameRu: 'nameRu',
    nameEn: 'nameEn',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LevelsScalarFieldEnum = (typeof LevelsScalarFieldEnum)[keyof typeof LevelsScalarFieldEnum]


  export const CapacityScalarFieldEnum: {
    id: 'id',
    nameUz: 'nameUz',
    nameRu: 'nameRu',
    nameEn: 'nameEn',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CapacityScalarFieldEnum = (typeof CapacityScalarFieldEnum)[keyof typeof CapacityScalarFieldEnum]


  export const SizesScalarFieldEnum: {
    id: 'id',
    nameUz: 'nameUz',
    nameRu: 'nameRu',
    nameEn: 'nameEn',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SizesScalarFieldEnum = (typeof SizesScalarFieldEnum)[keyof typeof SizesScalarFieldEnum]


  export const BrandsScalarFieldEnum: {
    id: 'id',
    nameUz: 'nameUz',
    nameRu: 'nameRu',
    nameEn: 'nameEn',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrandsScalarFieldEnum = (typeof BrandsScalarFieldEnum)[keyof typeof BrandsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type RegionsWhereInput = {
    AND?: RegionsWhereInput | RegionsWhereInput[]
    OR?: RegionsWhereInput[]
    NOT?: RegionsWhereInput | RegionsWhereInput[]
    id?: StringFilter<"Regions"> | string
    nameUz?: StringFilter<"Regions"> | string
    nameRu?: StringFilter<"Regions"> | string
    nameEn?: StringFilter<"Regions"> | string
    createdAt?: DateTimeFilter<"Regions"> | Date | string
    updatedAt?: DateTimeFilter<"Regions"> | Date | string
    Users?: UsersListRelationFilter
  }

  export type RegionsOrderByWithRelationInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByRelationAggregateInput
  }

  export type RegionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegionsWhereInput | RegionsWhereInput[]
    OR?: RegionsWhereInput[]
    NOT?: RegionsWhereInput | RegionsWhereInput[]
    nameUz?: StringFilter<"Regions"> | string
    nameRu?: StringFilter<"Regions"> | string
    nameEn?: StringFilter<"Regions"> | string
    createdAt?: DateTimeFilter<"Regions"> | Date | string
    updatedAt?: DateTimeFilter<"Regions"> | Date | string
    Users?: UsersListRelationFilter
  }, "id">

  export type RegionsOrderByWithAggregationInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RegionsCountOrderByAggregateInput
    _max?: RegionsMaxOrderByAggregateInput
    _min?: RegionsMinOrderByAggregateInput
  }

  export type RegionsScalarWhereWithAggregatesInput = {
    AND?: RegionsScalarWhereWithAggregatesInput | RegionsScalarWhereWithAggregatesInput[]
    OR?: RegionsScalarWhereWithAggregatesInput[]
    NOT?: RegionsScalarWhereWithAggregatesInput | RegionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Regions"> | string
    nameUz?: StringWithAggregatesFilter<"Regions"> | string
    nameRu?: StringWithAggregatesFilter<"Regions"> | string
    nameEn?: StringWithAggregatesFilter<"Regions"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Regions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Regions"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    fullName?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumUserRoleFilter<"Users"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"Users"> | $Enums.UserStatus
    avatar?: StringFilter<"Users"> | string
    regionId?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    region?: XOR<RegionsScalarRelationFilter, RegionsWhereInput>
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    avatar?: SortOrder
    regionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    region?: RegionsOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    fullName?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumUserRoleFilter<"Users"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"Users"> | $Enums.UserStatus
    avatar?: StringFilter<"Users"> | string
    regionId?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    region?: XOR<RegionsScalarRelationFilter, RegionsWhereInput>
  }, "id" | "phone">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    avatar?: SortOrder
    regionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    fullName?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumUserRoleWithAggregatesFilter<"Users"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"Users"> | $Enums.UserStatus
    avatar?: StringWithAggregatesFilter<"Users"> | string
    regionId?: StringWithAggregatesFilter<"Users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type SessionsWhereInput = {
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
    id?: StringFilter<"Sessions"> | string
    userId?: StringFilter<"Sessions"> | string
    ipAddress?: StringFilter<"Sessions"> | string
    deviceInfo?: JsonFilter<"Sessions">
    createdAt?: DateTimeFilter<"Sessions"> | Date | string
  }

  export type SessionsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    deviceInfo?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
    userId?: StringFilter<"Sessions"> | string
    ipAddress?: StringFilter<"Sessions"> | string
    deviceInfo?: JsonFilter<"Sessions">
    createdAt?: DateTimeFilter<"Sessions"> | Date | string
  }, "id">

  export type SessionsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    deviceInfo?: SortOrder
    createdAt?: SortOrder
    _count?: SessionsCountOrderByAggregateInput
    _max?: SessionsMaxOrderByAggregateInput
    _min?: SessionsMinOrderByAggregateInput
  }

  export type SessionsScalarWhereWithAggregatesInput = {
    AND?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    OR?: SessionsScalarWhereWithAggregatesInput[]
    NOT?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sessions"> | string
    userId?: StringWithAggregatesFilter<"Sessions"> | string
    ipAddress?: StringWithAggregatesFilter<"Sessions"> | string
    deviceInfo?: JsonWithAggregatesFilter<"Sessions">
    createdAt?: DateTimeWithAggregatesFilter<"Sessions"> | Date | string
  }

  export type ContactsWhereInput = {
    AND?: ContactsWhereInput | ContactsWhereInput[]
    OR?: ContactsWhereInput[]
    NOT?: ContactsWhereInput | ContactsWhereInput[]
    id?: StringFilter<"Contacts"> | string
    name?: StringFilter<"Contacts"> | string
    surName?: StringFilter<"Contacts"> | string
    phone?: StringFilter<"Contacts"> | string
    address?: StringFilter<"Contacts"> | string
    message?: StringFilter<"Contacts"> | string
    createdAt?: DateTimeFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeFilter<"Contacts"> | Date | string
  }

  export type ContactsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: ContactsWhereInput | ContactsWhereInput[]
    OR?: ContactsWhereInput[]
    NOT?: ContactsWhereInput | ContactsWhereInput[]
    name?: StringFilter<"Contacts"> | string
    surName?: StringFilter<"Contacts"> | string
    address?: StringFilter<"Contacts"> | string
    message?: StringFilter<"Contacts"> | string
    createdAt?: DateTimeFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeFilter<"Contacts"> | Date | string
  }, "id" | "phone">

  export type ContactsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactsCountOrderByAggregateInput
    _max?: ContactsMaxOrderByAggregateInput
    _min?: ContactsMinOrderByAggregateInput
  }

  export type ContactsScalarWhereWithAggregatesInput = {
    AND?: ContactsScalarWhereWithAggregatesInput | ContactsScalarWhereWithAggregatesInput[]
    OR?: ContactsScalarWhereWithAggregatesInput[]
    NOT?: ContactsScalarWhereWithAggregatesInput | ContactsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contacts"> | string
    name?: StringWithAggregatesFilter<"Contacts"> | string
    surName?: StringWithAggregatesFilter<"Contacts"> | string
    phone?: StringWithAggregatesFilter<"Contacts"> | string
    address?: StringWithAggregatesFilter<"Contacts"> | string
    message?: StringWithAggregatesFilter<"Contacts"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contacts"> | Date | string
  }

  export type DataAboutCompanyWhereInput = {
    AND?: DataAboutCompanyWhereInput | DataAboutCompanyWhereInput[]
    OR?: DataAboutCompanyWhereInput[]
    NOT?: DataAboutCompanyWhereInput | DataAboutCompanyWhereInput[]
    id?: StringFilter<"DataAboutCompany"> | string
    INN?: StringFilter<"DataAboutCompany"> | string
    MFO?: StringFilter<"DataAboutCompany"> | string
    R_or_C?: StringFilter<"DataAboutCompany"> | string
    bankCode?: StringFilter<"DataAboutCompany"> | string
    Oked?: StringFilter<"DataAboutCompany"> | string
    address?: StringFilter<"DataAboutCompany"> | string
    createdAt?: DateTimeFilter<"DataAboutCompany"> | Date | string
    updatedAt?: DateTimeFilter<"DataAboutCompany"> | Date | string
  }

  export type DataAboutCompanyOrderByWithRelationInput = {
    id?: SortOrder
    INN?: SortOrder
    MFO?: SortOrder
    R_or_C?: SortOrder
    bankCode?: SortOrder
    Oked?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataAboutCompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DataAboutCompanyWhereInput | DataAboutCompanyWhereInput[]
    OR?: DataAboutCompanyWhereInput[]
    NOT?: DataAboutCompanyWhereInput | DataAboutCompanyWhereInput[]
    INN?: StringFilter<"DataAboutCompany"> | string
    MFO?: StringFilter<"DataAboutCompany"> | string
    R_or_C?: StringFilter<"DataAboutCompany"> | string
    bankCode?: StringFilter<"DataAboutCompany"> | string
    Oked?: StringFilter<"DataAboutCompany"> | string
    address?: StringFilter<"DataAboutCompany"> | string
    createdAt?: DateTimeFilter<"DataAboutCompany"> | Date | string
    updatedAt?: DateTimeFilter<"DataAboutCompany"> | Date | string
  }, "id">

  export type DataAboutCompanyOrderByWithAggregationInput = {
    id?: SortOrder
    INN?: SortOrder
    MFO?: SortOrder
    R_or_C?: SortOrder
    bankCode?: SortOrder
    Oked?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DataAboutCompanyCountOrderByAggregateInput
    _max?: DataAboutCompanyMaxOrderByAggregateInput
    _min?: DataAboutCompanyMinOrderByAggregateInput
  }

  export type DataAboutCompanyScalarWhereWithAggregatesInput = {
    AND?: DataAboutCompanyScalarWhereWithAggregatesInput | DataAboutCompanyScalarWhereWithAggregatesInput[]
    OR?: DataAboutCompanyScalarWhereWithAggregatesInput[]
    NOT?: DataAboutCompanyScalarWhereWithAggregatesInput | DataAboutCompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DataAboutCompany"> | string
    INN?: StringWithAggregatesFilter<"DataAboutCompany"> | string
    MFO?: StringWithAggregatesFilter<"DataAboutCompany"> | string
    R_or_C?: StringWithAggregatesFilter<"DataAboutCompany"> | string
    bankCode?: StringWithAggregatesFilter<"DataAboutCompany"> | string
    Oked?: StringWithAggregatesFilter<"DataAboutCompany"> | string
    address?: StringWithAggregatesFilter<"DataAboutCompany"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DataAboutCompany"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DataAboutCompany"> | Date | string
  }

  export type ShowCasesWhereInput = {
    AND?: ShowCasesWhereInput | ShowCasesWhereInput[]
    OR?: ShowCasesWhereInput[]
    NOT?: ShowCasesWhereInput | ShowCasesWhereInput[]
    id?: StringFilter<"ShowCases"> | string
    nameUz?: StringFilter<"ShowCases"> | string
    nameRu?: StringFilter<"ShowCases"> | string
    nameEn?: StringFilter<"ShowCases"> | string
    descriptionUz?: StringFilter<"ShowCases"> | string
    descriptionRu?: StringFilter<"ShowCases"> | string
    descriptionEn?: StringFilter<"ShowCases"> | string
    image?: StringFilter<"ShowCases"> | string
    link?: StringFilter<"ShowCases"> | string
    createdAt?: DateTimeFilter<"ShowCases"> | Date | string
    updatedAt?: DateTimeFilter<"ShowCases"> | Date | string
  }

  export type ShowCasesOrderByWithRelationInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    descriptionUz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
    image?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowCasesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShowCasesWhereInput | ShowCasesWhereInput[]
    OR?: ShowCasesWhereInput[]
    NOT?: ShowCasesWhereInput | ShowCasesWhereInput[]
    nameUz?: StringFilter<"ShowCases"> | string
    nameRu?: StringFilter<"ShowCases"> | string
    nameEn?: StringFilter<"ShowCases"> | string
    descriptionUz?: StringFilter<"ShowCases"> | string
    descriptionRu?: StringFilter<"ShowCases"> | string
    descriptionEn?: StringFilter<"ShowCases"> | string
    image?: StringFilter<"ShowCases"> | string
    link?: StringFilter<"ShowCases"> | string
    createdAt?: DateTimeFilter<"ShowCases"> | Date | string
    updatedAt?: DateTimeFilter<"ShowCases"> | Date | string
  }, "id">

  export type ShowCasesOrderByWithAggregationInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    descriptionUz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
    image?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShowCasesCountOrderByAggregateInput
    _max?: ShowCasesMaxOrderByAggregateInput
    _min?: ShowCasesMinOrderByAggregateInput
  }

  export type ShowCasesScalarWhereWithAggregatesInput = {
    AND?: ShowCasesScalarWhereWithAggregatesInput | ShowCasesScalarWhereWithAggregatesInput[]
    OR?: ShowCasesScalarWhereWithAggregatesInput[]
    NOT?: ShowCasesScalarWhereWithAggregatesInput | ShowCasesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShowCases"> | string
    nameUz?: StringWithAggregatesFilter<"ShowCases"> | string
    nameRu?: StringWithAggregatesFilter<"ShowCases"> | string
    nameEn?: StringWithAggregatesFilter<"ShowCases"> | string
    descriptionUz?: StringWithAggregatesFilter<"ShowCases"> | string
    descriptionRu?: StringWithAggregatesFilter<"ShowCases"> | string
    descriptionEn?: StringWithAggregatesFilter<"ShowCases"> | string
    image?: StringWithAggregatesFilter<"ShowCases"> | string
    link?: StringWithAggregatesFilter<"ShowCases"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShowCases"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShowCases"> | Date | string
  }

  export type FAQWhereInput = {
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    id?: StringFilter<"FAQ"> | string
    question?: StringFilter<"FAQ"> | string
    answer?: StringFilter<"FAQ"> | string
    createdAt?: DateTimeFilter<"FAQ"> | Date | string
    updatedAt?: DateTimeFilter<"FAQ"> | Date | string
  }

  export type FAQOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    question?: StringFilter<"FAQ"> | string
    answer?: StringFilter<"FAQ"> | string
    createdAt?: DateTimeFilter<"FAQ"> | Date | string
    updatedAt?: DateTimeFilter<"FAQ"> | Date | string
  }, "id">

  export type FAQOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FAQCountOrderByAggregateInput
    _max?: FAQMaxOrderByAggregateInput
    _min?: FAQMinOrderByAggregateInput
  }

  export type FAQScalarWhereWithAggregatesInput = {
    AND?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    OR?: FAQScalarWhereWithAggregatesInput[]
    NOT?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FAQ"> | string
    question?: StringWithAggregatesFilter<"FAQ"> | string
    answer?: StringWithAggregatesFilter<"FAQ"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FAQ"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FAQ"> | Date | string
  }

  export type AboutOurPageWhereInput = {
    AND?: AboutOurPageWhereInput | AboutOurPageWhereInput[]
    OR?: AboutOurPageWhereInput[]
    NOT?: AboutOurPageWhereInput | AboutOurPageWhereInput[]
    id?: StringFilter<"AboutOurPage"> | string
    email?: StringFilter<"AboutOurPage"> | string
    phone?: StringFilter<"AboutOurPage"> | string
    links?: JsonFilter<"AboutOurPage">
    createdAt?: DateTimeFilter<"AboutOurPage"> | Date | string
    updatedAt?: DateTimeFilter<"AboutOurPage"> | Date | string
  }

  export type AboutOurPageOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    links?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutOurPageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: AboutOurPageWhereInput | AboutOurPageWhereInput[]
    OR?: AboutOurPageWhereInput[]
    NOT?: AboutOurPageWhereInput | AboutOurPageWhereInput[]
    links?: JsonFilter<"AboutOurPage">
    createdAt?: DateTimeFilter<"AboutOurPage"> | Date | string
    updatedAt?: DateTimeFilter<"AboutOurPage"> | Date | string
  }, "id" | "email" | "phone">

  export type AboutOurPageOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    links?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AboutOurPageCountOrderByAggregateInput
    _max?: AboutOurPageMaxOrderByAggregateInput
    _min?: AboutOurPageMinOrderByAggregateInput
  }

  export type AboutOurPageScalarWhereWithAggregatesInput = {
    AND?: AboutOurPageScalarWhereWithAggregatesInput | AboutOurPageScalarWhereWithAggregatesInput[]
    OR?: AboutOurPageScalarWhereWithAggregatesInput[]
    NOT?: AboutOurPageScalarWhereWithAggregatesInput | AboutOurPageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AboutOurPage"> | string
    email?: StringWithAggregatesFilter<"AboutOurPage"> | string
    phone?: StringWithAggregatesFilter<"AboutOurPage"> | string
    links?: JsonWithAggregatesFilter<"AboutOurPage">
    createdAt?: DateTimeWithAggregatesFilter<"AboutOurPage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AboutOurPage"> | Date | string
  }

  export type PartnersWhereInput = {
    AND?: PartnersWhereInput | PartnersWhereInput[]
    OR?: PartnersWhereInput[]
    NOT?: PartnersWhereInput | PartnersWhereInput[]
    id?: StringFilter<"Partners"> | string
    nameUz?: StringFilter<"Partners"> | string
    nameRu?: StringFilter<"Partners"> | string
    nameEn?: StringFilter<"Partners"> | string
    images?: StringFilter<"Partners"> | string
    createdAt?: DateTimeFilter<"Partners"> | Date | string
    updatedAt?: DateTimeFilter<"Partners"> | Date | string
  }

  export type PartnersOrderByWithRelationInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PartnersWhereInput | PartnersWhereInput[]
    OR?: PartnersWhereInput[]
    NOT?: PartnersWhereInput | PartnersWhereInput[]
    nameUz?: StringFilter<"Partners"> | string
    nameRu?: StringFilter<"Partners"> | string
    nameEn?: StringFilter<"Partners"> | string
    images?: StringFilter<"Partners"> | string
    createdAt?: DateTimeFilter<"Partners"> | Date | string
    updatedAt?: DateTimeFilter<"Partners"> | Date | string
  }, "id">

  export type PartnersOrderByWithAggregationInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartnersCountOrderByAggregateInput
    _max?: PartnersMaxOrderByAggregateInput
    _min?: PartnersMinOrderByAggregateInput
  }

  export type PartnersScalarWhereWithAggregatesInput = {
    AND?: PartnersScalarWhereWithAggregatesInput | PartnersScalarWhereWithAggregatesInput[]
    OR?: PartnersScalarWhereWithAggregatesInput[]
    NOT?: PartnersScalarWhereWithAggregatesInput | PartnersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Partners"> | string
    nameUz?: StringWithAggregatesFilter<"Partners"> | string
    nameRu?: StringWithAggregatesFilter<"Partners"> | string
    nameEn?: StringWithAggregatesFilter<"Partners"> | string
    images?: StringWithAggregatesFilter<"Partners"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Partners"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Partners"> | Date | string
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: StringFilter<"Comments"> | string
    message?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeFilter<"Comments"> | Date | string
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    message?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeFilter<"Comments"> | Date | string
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comments"> | string
    message?: StringWithAggregatesFilter<"Comments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
  }

  export type StarsWhereInput = {
    AND?: StarsWhereInput | StarsWhereInput[]
    OR?: StarsWhereInput[]
    NOT?: StarsWhereInput | StarsWhereInput[]
    id?: StringFilter<"Stars"> | string
    star?: FloatFilter<"Stars"> | number
    createdAt?: DateTimeFilter<"Stars"> | Date | string
    updatedAt?: DateTimeFilter<"Stars"> | Date | string
  }

  export type StarsOrderByWithRelationInput = {
    id?: SortOrder
    star?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StarsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StarsWhereInput | StarsWhereInput[]
    OR?: StarsWhereInput[]
    NOT?: StarsWhereInput | StarsWhereInput[]
    star?: FloatFilter<"Stars"> | number
    createdAt?: DateTimeFilter<"Stars"> | Date | string
    updatedAt?: DateTimeFilter<"Stars"> | Date | string
  }, "id">

  export type StarsOrderByWithAggregationInput = {
    id?: SortOrder
    star?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StarsCountOrderByAggregateInput
    _avg?: StarsAvgOrderByAggregateInput
    _max?: StarsMaxOrderByAggregateInput
    _min?: StarsMinOrderByAggregateInput
    _sum?: StarsSumOrderByAggregateInput
  }

  export type StarsScalarWhereWithAggregatesInput = {
    AND?: StarsScalarWhereWithAggregatesInput | StarsScalarWhereWithAggregatesInput[]
    OR?: StarsScalarWhereWithAggregatesInput[]
    NOT?: StarsScalarWhereWithAggregatesInput | StarsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stars"> | string
    star?: FloatWithAggregatesFilter<"Stars"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Stars"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Stars"> | Date | string
  }

  export type LevelsWhereInput = {
    AND?: LevelsWhereInput | LevelsWhereInput[]
    OR?: LevelsWhereInput[]
    NOT?: LevelsWhereInput | LevelsWhereInput[]
    id?: StringFilter<"Levels"> | string
    nameUz?: StringFilter<"Levels"> | string
    nameRu?: StringFilter<"Levels"> | string
    nameEn?: StringFilter<"Levels"> | string
    createdAt?: DateTimeFilter<"Levels"> | Date | string
    updatedAt?: DateTimeFilter<"Levels"> | Date | string
  }

  export type LevelsOrderByWithRelationInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LevelsWhereInput | LevelsWhereInput[]
    OR?: LevelsWhereInput[]
    NOT?: LevelsWhereInput | LevelsWhereInput[]
    nameUz?: StringFilter<"Levels"> | string
    nameRu?: StringFilter<"Levels"> | string
    nameEn?: StringFilter<"Levels"> | string
    createdAt?: DateTimeFilter<"Levels"> | Date | string
    updatedAt?: DateTimeFilter<"Levels"> | Date | string
  }, "id">

  export type LevelsOrderByWithAggregationInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LevelsCountOrderByAggregateInput
    _max?: LevelsMaxOrderByAggregateInput
    _min?: LevelsMinOrderByAggregateInput
  }

  export type LevelsScalarWhereWithAggregatesInput = {
    AND?: LevelsScalarWhereWithAggregatesInput | LevelsScalarWhereWithAggregatesInput[]
    OR?: LevelsScalarWhereWithAggregatesInput[]
    NOT?: LevelsScalarWhereWithAggregatesInput | LevelsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Levels"> | string
    nameUz?: StringWithAggregatesFilter<"Levels"> | string
    nameRu?: StringWithAggregatesFilter<"Levels"> | string
    nameEn?: StringWithAggregatesFilter<"Levels"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Levels"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Levels"> | Date | string
  }

  export type CapacityWhereInput = {
    AND?: CapacityWhereInput | CapacityWhereInput[]
    OR?: CapacityWhereInput[]
    NOT?: CapacityWhereInput | CapacityWhereInput[]
    id?: StringFilter<"Capacity"> | string
    nameUz?: StringFilter<"Capacity"> | string
    nameRu?: StringFilter<"Capacity"> | string
    nameEn?: StringFilter<"Capacity"> | string
    createdAt?: DateTimeFilter<"Capacity"> | Date | string
    updatedAt?: DateTimeFilter<"Capacity"> | Date | string
  }

  export type CapacityOrderByWithRelationInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CapacityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CapacityWhereInput | CapacityWhereInput[]
    OR?: CapacityWhereInput[]
    NOT?: CapacityWhereInput | CapacityWhereInput[]
    nameUz?: StringFilter<"Capacity"> | string
    nameRu?: StringFilter<"Capacity"> | string
    nameEn?: StringFilter<"Capacity"> | string
    createdAt?: DateTimeFilter<"Capacity"> | Date | string
    updatedAt?: DateTimeFilter<"Capacity"> | Date | string
  }, "id">

  export type CapacityOrderByWithAggregationInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CapacityCountOrderByAggregateInput
    _max?: CapacityMaxOrderByAggregateInput
    _min?: CapacityMinOrderByAggregateInput
  }

  export type CapacityScalarWhereWithAggregatesInput = {
    AND?: CapacityScalarWhereWithAggregatesInput | CapacityScalarWhereWithAggregatesInput[]
    OR?: CapacityScalarWhereWithAggregatesInput[]
    NOT?: CapacityScalarWhereWithAggregatesInput | CapacityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Capacity"> | string
    nameUz?: StringWithAggregatesFilter<"Capacity"> | string
    nameRu?: StringWithAggregatesFilter<"Capacity"> | string
    nameEn?: StringWithAggregatesFilter<"Capacity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Capacity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Capacity"> | Date | string
  }

  export type SizesWhereInput = {
    AND?: SizesWhereInput | SizesWhereInput[]
    OR?: SizesWhereInput[]
    NOT?: SizesWhereInput | SizesWhereInput[]
    id?: StringFilter<"Sizes"> | string
    nameUz?: StringFilter<"Sizes"> | string
    nameRu?: StringFilter<"Sizes"> | string
    nameEn?: StringFilter<"Sizes"> | string
    createdAt?: DateTimeFilter<"Sizes"> | Date | string
    updatedAt?: DateTimeFilter<"Sizes"> | Date | string
  }

  export type SizesOrderByWithRelationInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SizesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SizesWhereInput | SizesWhereInput[]
    OR?: SizesWhereInput[]
    NOT?: SizesWhereInput | SizesWhereInput[]
    nameUz?: StringFilter<"Sizes"> | string
    nameRu?: StringFilter<"Sizes"> | string
    nameEn?: StringFilter<"Sizes"> | string
    createdAt?: DateTimeFilter<"Sizes"> | Date | string
    updatedAt?: DateTimeFilter<"Sizes"> | Date | string
  }, "id">

  export type SizesOrderByWithAggregationInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SizesCountOrderByAggregateInput
    _max?: SizesMaxOrderByAggregateInput
    _min?: SizesMinOrderByAggregateInput
  }

  export type SizesScalarWhereWithAggregatesInput = {
    AND?: SizesScalarWhereWithAggregatesInput | SizesScalarWhereWithAggregatesInput[]
    OR?: SizesScalarWhereWithAggregatesInput[]
    NOT?: SizesScalarWhereWithAggregatesInput | SizesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sizes"> | string
    nameUz?: StringWithAggregatesFilter<"Sizes"> | string
    nameRu?: StringWithAggregatesFilter<"Sizes"> | string
    nameEn?: StringWithAggregatesFilter<"Sizes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sizes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sizes"> | Date | string
  }

  export type BrandsWhereInput = {
    AND?: BrandsWhereInput | BrandsWhereInput[]
    OR?: BrandsWhereInput[]
    NOT?: BrandsWhereInput | BrandsWhereInput[]
    id?: StringFilter<"Brands"> | string
    nameUz?: StringFilter<"Brands"> | string
    nameRu?: StringFilter<"Brands"> | string
    nameEn?: StringFilter<"Brands"> | string
    createdAt?: DateTimeFilter<"Brands"> | Date | string
    updatedAt?: DateTimeFilter<"Brands"> | Date | string
  }

  export type BrandsOrderByWithRelationInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BrandsWhereInput | BrandsWhereInput[]
    OR?: BrandsWhereInput[]
    NOT?: BrandsWhereInput | BrandsWhereInput[]
    nameUz?: StringFilter<"Brands"> | string
    nameRu?: StringFilter<"Brands"> | string
    nameEn?: StringFilter<"Brands"> | string
    createdAt?: DateTimeFilter<"Brands"> | Date | string
    updatedAt?: DateTimeFilter<"Brands"> | Date | string
  }, "id">

  export type BrandsOrderByWithAggregationInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BrandsCountOrderByAggregateInput
    _max?: BrandsMaxOrderByAggregateInput
    _min?: BrandsMinOrderByAggregateInput
  }

  export type BrandsScalarWhereWithAggregatesInput = {
    AND?: BrandsScalarWhereWithAggregatesInput | BrandsScalarWhereWithAggregatesInput[]
    OR?: BrandsScalarWhereWithAggregatesInput[]
    NOT?: BrandsScalarWhereWithAggregatesInput | BrandsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brands"> | string
    nameUz?: StringWithAggregatesFilter<"Brands"> | string
    nameRu?: StringWithAggregatesFilter<"Brands"> | string
    nameEn?: StringWithAggregatesFilter<"Brands"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Brands"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Brands"> | Date | string
  }

  export type RegionsCreateInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedManyWithoutRegionInput
  }

  export type RegionsUncheckedCreateInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateManyWithoutRegionNestedInput
  }

  export type RegionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionsCreateManyInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    fullName: string
    phone: string
    password: string
    role: $Enums.UserRole
    status?: $Enums.UserStatus
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
    region: RegionsCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    fullName: string
    phone: string
    password: string
    role: $Enums.UserRole
    status?: $Enums.UserStatus
    avatar: string
    regionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatar?: StringFieldUpdateOperationsInput | string
    regionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyInput = {
    id?: string
    fullName: string
    phone: string
    password: string
    role: $Enums.UserRole
    status?: $Enums.UserStatus
    avatar: string
    regionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatar?: StringFieldUpdateOperationsInput | string
    regionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionsCreateInput = {
    id?: string
    userId: string
    ipAddress: string
    deviceInfo: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SessionsUncheckedCreateInput = {
    id?: string
    userId: string
    ipAddress: string
    deviceInfo: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SessionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    deviceInfo?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    deviceInfo?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionsCreateManyInput = {
    id?: string
    userId: string
    ipAddress: string
    deviceInfo: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SessionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    deviceInfo?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    deviceInfo?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsCreateInput = {
    id?: string
    name: string
    surName: string
    phone: string
    address: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactsUncheckedCreateInput = {
    id?: string
    name: string
    surName: string
    phone: string
    address: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsCreateManyInput = {
    id?: string
    name: string
    surName: string
    phone: string
    address: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataAboutCompanyCreateInput = {
    id?: string
    INN: string
    MFO: string
    R_or_C: string
    bankCode: string
    Oked: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataAboutCompanyUncheckedCreateInput = {
    id?: string
    INN: string
    MFO: string
    R_or_C: string
    bankCode: string
    Oked: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataAboutCompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    INN?: StringFieldUpdateOperationsInput | string
    MFO?: StringFieldUpdateOperationsInput | string
    R_or_C?: StringFieldUpdateOperationsInput | string
    bankCode?: StringFieldUpdateOperationsInput | string
    Oked?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataAboutCompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    INN?: StringFieldUpdateOperationsInput | string
    MFO?: StringFieldUpdateOperationsInput | string
    R_or_C?: StringFieldUpdateOperationsInput | string
    bankCode?: StringFieldUpdateOperationsInput | string
    Oked?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataAboutCompanyCreateManyInput = {
    id?: string
    INN: string
    MFO: string
    R_or_C: string
    bankCode: string
    Oked: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataAboutCompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    INN?: StringFieldUpdateOperationsInput | string
    MFO?: StringFieldUpdateOperationsInput | string
    R_or_C?: StringFieldUpdateOperationsInput | string
    bankCode?: StringFieldUpdateOperationsInput | string
    Oked?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataAboutCompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    INN?: StringFieldUpdateOperationsInput | string
    MFO?: StringFieldUpdateOperationsInput | string
    R_or_C?: StringFieldUpdateOperationsInput | string
    bankCode?: StringFieldUpdateOperationsInput | string
    Oked?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCasesCreateInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    descriptionUz: string
    descriptionRu: string
    descriptionEn: string
    image: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowCasesUncheckedCreateInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    descriptionUz: string
    descriptionRu: string
    descriptionEn: string
    image: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowCasesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    descriptionUz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCasesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    descriptionUz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCasesCreateManyInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    descriptionUz: string
    descriptionRu: string
    descriptionEn: string
    image: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowCasesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    descriptionUz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCasesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    descriptionUz?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQCreateInput = {
    id?: string
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQUncheckedCreateInput = {
    id?: string
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQCreateManyInput = {
    id?: string
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutOurPageCreateInput = {
    id?: string
    email: string
    phone: string
    links: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutOurPageUncheckedCreateInput = {
    id?: string
    email: string
    phone: string
    links: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutOurPageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    links?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutOurPageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    links?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutOurPageCreateManyInput = {
    id?: string
    email: string
    phone: string
    links: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutOurPageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    links?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutOurPageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    links?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnersCreateInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    images: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnersUncheckedCreateInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    images: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnersCreateManyInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    images: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsUncheckedCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateManyInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StarsCreateInput = {
    id?: string
    star: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StarsUncheckedCreateInput = {
    id?: string
    star: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StarsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StarsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StarsCreateManyInput = {
    id?: string
    star: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StarsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StarsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelsCreateInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelsUncheckedCreateInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelsCreateManyInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LevelsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapacityCreateInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CapacityUncheckedCreateInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CapacityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapacityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapacityCreateManyInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CapacityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapacityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SizesCreateInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SizesUncheckedCreateInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SizesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SizesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SizesCreateManyInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SizesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SizesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandsCreateInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandsUncheckedCreateInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandsCreateManyInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionsCountOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegionsMaxOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegionsMinOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type RegionsScalarRelationFilter = {
    is?: RegionsWhereInput
    isNot?: RegionsWhereInput
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    avatar?: SortOrder
    regionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    avatar?: SortOrder
    regionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    avatar?: SortOrder
    regionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SessionsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    deviceInfo?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ContactsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surName?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataAboutCompanyCountOrderByAggregateInput = {
    id?: SortOrder
    INN?: SortOrder
    MFO?: SortOrder
    R_or_C?: SortOrder
    bankCode?: SortOrder
    Oked?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataAboutCompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    INN?: SortOrder
    MFO?: SortOrder
    R_or_C?: SortOrder
    bankCode?: SortOrder
    Oked?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataAboutCompanyMinOrderByAggregateInput = {
    id?: SortOrder
    INN?: SortOrder
    MFO?: SortOrder
    R_or_C?: SortOrder
    bankCode?: SortOrder
    Oked?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowCasesCountOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    descriptionUz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
    image?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowCasesMaxOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    descriptionUz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
    image?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowCasesMinOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    descriptionUz?: SortOrder
    descriptionRu?: SortOrder
    descriptionEn?: SortOrder
    image?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutOurPageCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    links?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutOurPageMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutOurPageMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnersCountOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnersMaxOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnersMinOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StarsCountOrderByAggregateInput = {
    id?: SortOrder
    star?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StarsAvgOrderByAggregateInput = {
    star?: SortOrder
  }

  export type StarsMaxOrderByAggregateInput = {
    id?: SortOrder
    star?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StarsMinOrderByAggregateInput = {
    id?: SortOrder
    star?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StarsSumOrderByAggregateInput = {
    star?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type LevelsCountOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelsMaxOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LevelsMinOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CapacityCountOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CapacityMaxOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CapacityMinOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SizesCountOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SizesMaxOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SizesMinOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandsCountOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandsMaxOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandsMinOrderByAggregateInput = {
    id?: SortOrder
    nameUz?: SortOrder
    nameRu?: SortOrder
    nameEn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersCreateNestedManyWithoutRegionInput = {
    create?: XOR<UsersCreateWithoutRegionInput, UsersUncheckedCreateWithoutRegionInput> | UsersCreateWithoutRegionInput[] | UsersUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRegionInput | UsersCreateOrConnectWithoutRegionInput[]
    createMany?: UsersCreateManyRegionInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<UsersCreateWithoutRegionInput, UsersUncheckedCreateWithoutRegionInput> | UsersCreateWithoutRegionInput[] | UsersUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRegionInput | UsersCreateOrConnectWithoutRegionInput[]
    createMany?: UsersCreateManyRegionInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdateManyWithoutRegionNestedInput = {
    create?: XOR<UsersCreateWithoutRegionInput, UsersUncheckedCreateWithoutRegionInput> | UsersCreateWithoutRegionInput[] | UsersUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRegionInput | UsersCreateOrConnectWithoutRegionInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRegionInput | UsersUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: UsersCreateManyRegionInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRegionInput | UsersUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRegionInput | UsersUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<UsersCreateWithoutRegionInput, UsersUncheckedCreateWithoutRegionInput> | UsersCreateWithoutRegionInput[] | UsersUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRegionInput | UsersCreateOrConnectWithoutRegionInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRegionInput | UsersUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: UsersCreateManyRegionInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRegionInput | UsersUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRegionInput | UsersUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type RegionsCreateNestedOneWithoutUsersInput = {
    create?: XOR<RegionsCreateWithoutUsersInput, RegionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RegionsCreateOrConnectWithoutUsersInput
    connect?: RegionsWhereUniqueInput
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type RegionsUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RegionsCreateWithoutUsersInput, RegionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RegionsCreateOrConnectWithoutUsersInput
    upsert?: RegionsUpsertWithoutUsersInput
    connect?: RegionsWhereUniqueInput
    update?: XOR<XOR<RegionsUpdateToOneWithWhereWithoutUsersInput, RegionsUpdateWithoutUsersInput>, RegionsUncheckedUpdateWithoutUsersInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UsersCreateWithoutRegionInput = {
    id?: string
    fullName: string
    phone: string
    password: string
    role: $Enums.UserRole
    status?: $Enums.UserStatus
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUncheckedCreateWithoutRegionInput = {
    id?: string
    fullName: string
    phone: string
    password: string
    role: $Enums.UserRole
    status?: $Enums.UserStatus
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersCreateOrConnectWithoutRegionInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRegionInput, UsersUncheckedCreateWithoutRegionInput>
  }

  export type UsersCreateManyRegionInputEnvelope = {
    data: UsersCreateManyRegionInput | UsersCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutRegionInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutRegionInput, UsersUncheckedUpdateWithoutRegionInput>
    create: XOR<UsersCreateWithoutRegionInput, UsersUncheckedCreateWithoutRegionInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutRegionInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutRegionInput, UsersUncheckedUpdateWithoutRegionInput>
  }

  export type UsersUpdateManyWithWhereWithoutRegionInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutRegionInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    id?: StringFilter<"Users"> | string
    fullName?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumUserRoleFilter<"Users"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"Users"> | $Enums.UserStatus
    avatar?: StringFilter<"Users"> | string
    regionId?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
  }

  export type RegionsCreateWithoutUsersInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegionsUncheckedCreateWithoutUsersInput = {
    id?: string
    nameUz: string
    nameRu: string
    nameEn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegionsCreateOrConnectWithoutUsersInput = {
    where: RegionsWhereUniqueInput
    create: XOR<RegionsCreateWithoutUsersInput, RegionsUncheckedCreateWithoutUsersInput>
  }

  export type RegionsUpsertWithoutUsersInput = {
    update: XOR<RegionsUpdateWithoutUsersInput, RegionsUncheckedUpdateWithoutUsersInput>
    create: XOR<RegionsCreateWithoutUsersInput, RegionsUncheckedCreateWithoutUsersInput>
    where?: RegionsWhereInput
  }

  export type RegionsUpdateToOneWithWhereWithoutUsersInput = {
    where?: RegionsWhereInput
    data: XOR<RegionsUpdateWithoutUsersInput, RegionsUncheckedUpdateWithoutUsersInput>
  }

  export type RegionsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameUz?: StringFieldUpdateOperationsInput | string
    nameRu?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyRegionInput = {
    id?: string
    fullName: string
    phone: string
    password: string
    role: $Enums.UserRole
    status?: $Enums.UserStatus
    avatar: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}