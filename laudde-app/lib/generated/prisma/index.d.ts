
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Clinic
 * 
 */
export type Clinic = $Result.DefaultSelection<Prisma.$ClinicPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model ReportImage
 * 
 */
export type ReportImage = $Result.DefaultSelection<Prisma.$ReportImagePayload>
/**
 * Model Measurement
 * 
 */
export type Measurement = $Result.DefaultSelection<Prisma.$MeasurementPayload>
/**
 * Model TextTemplate
 * 
 */
export type TextTemplate = $Result.DefaultSelection<Prisma.$TextTemplatePayload>
/**
 * Model ConclusionTemplate
 * 
 */
export type ConclusionTemplate = $Result.DefaultSelection<Prisma.$ConclusionTemplatePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model FinancialTransaction
 * 
 */
export type FinancialTransaction = $Result.DefaultSelection<Prisma.$FinancialTransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  admin: 'admin',
  veterinarian: 'veterinarian'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Sex: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Sex = (typeof Sex)[keyof typeof Sex]


export const AgeUnit: {
  YEARS: 'YEARS',
  MONTHS: 'MONTHS',
  DAYS: 'DAYS'
};

export type AgeUnit = (typeof AgeUnit)[keyof typeof AgeUnit]


export const ExamType: {
  OLTRASOUND: 'OLTRASOUND',
  X_RAY: 'X_RAY'
};

export type ExamType = (typeof ExamType)[keyof typeof ExamType]


export const UltrasoundCategory: {
  ABDOMINAL: 'ABDOMINAL',
  CARDIAC: 'CARDIAC',
  REPRODUCTIVE: 'REPRODUCTIVE',
  MUSCULOSKELETAL: 'MUSCULOSKELETAL',
  THYROID: 'THYROID',
  OVARIAN: 'OVARIAN',
  PROSTATE: 'PROSTATE',
  URINARY: 'URINARY',
  ABDOMEN: 'ABDOMEN',
  THORACIC: 'THORACIC',
  ABDOMEN_PELVIS: 'ABDOMEN_PELVIS',
  OCULAR: 'OCULAR'
};

export type UltrasoundCategory = (typeof UltrasoundCategory)[keyof typeof UltrasoundCategory]


export const XRayCategory: {
  THORACIC: 'THORACIC',
  ABDOMINAL: 'ABDOMINAL',
  SKELETAL: 'SKELETAL',
  DENTAL: 'DENTAL'
};

export type XRayCategory = (typeof XRayCategory)[keyof typeof XRayCategory]


export const ReportStatus: {
  DRAFT: 'DRAFT',
  COMPLETED: 'COMPLETED'
};

export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus]


export const PaymentMethod: {
  CREDIT_CARD: 'CREDIT_CARD',
  BANK_TRANSFER: 'BANK_TRANSFER',
  CASH: 'CASH',
  PIX: 'PIX',
  CHECK: 'CHECK'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentSource: {
  CLINIC: 'CLINIC',
  PATIENT_OWNER: 'PATIENT_OWNER',
  VETERINARIAN: 'VETERINARIAN'
};

export type PaymentSource = (typeof PaymentSource)[keyof typeof PaymentSource]


export const TransactionType: {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TransactionStatus: {
  COMPLETED: 'COMPLETED',
  PENDINHG: 'PENDINHG'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Sex = $Enums.Sex

export const Sex: typeof $Enums.Sex

export type AgeUnit = $Enums.AgeUnit

export const AgeUnit: typeof $Enums.AgeUnit

export type ExamType = $Enums.ExamType

export const ExamType: typeof $Enums.ExamType

export type UltrasoundCategory = $Enums.UltrasoundCategory

export const UltrasoundCategory: typeof $Enums.UltrasoundCategory

export type XRayCategory = $Enums.XRayCategory

export const XRayCategory: typeof $Enums.XRayCategory

export type ReportStatus = $Enums.ReportStatus

export const ReportStatus: typeof $Enums.ReportStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentSource = $Enums.PaymentSource

export const PaymentSource: typeof $Enums.PaymentSource

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clinic`: Exposes CRUD operations for the **Clinic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clinics
    * const clinics = await prisma.clinic.findMany()
    * ```
    */
  get clinic(): Prisma.ClinicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reportImage`: Exposes CRUD operations for the **ReportImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReportImages
    * const reportImages = await prisma.reportImage.findMany()
    * ```
    */
  get reportImage(): Prisma.ReportImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.measurement`: Exposes CRUD operations for the **Measurement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Measurements
    * const measurements = await prisma.measurement.findMany()
    * ```
    */
  get measurement(): Prisma.MeasurementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.textTemplate`: Exposes CRUD operations for the **TextTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TextTemplates
    * const textTemplates = await prisma.textTemplate.findMany()
    * ```
    */
  get textTemplate(): Prisma.TextTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conclusionTemplate`: Exposes CRUD operations for the **ConclusionTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConclusionTemplates
    * const conclusionTemplates = await prisma.conclusionTemplate.findMany()
    * ```
    */
  get conclusionTemplate(): Prisma.ConclusionTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financialTransaction`: Exposes CRUD operations for the **FinancialTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialTransactions
    * const financialTransactions = await prisma.financialTransaction.findMany()
    * ```
    */
  get financialTransaction(): Prisma.FinancialTransactionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    UserProfile: 'UserProfile',
    Patient: 'Patient',
    Clinic: 'Clinic',
    Report: 'Report',
    ReportImage: 'ReportImage',
    Measurement: 'Measurement',
    TextTemplate: 'TextTemplate',
    ConclusionTemplate: 'ConclusionTemplate',
    Payment: 'Payment',
    FinancialTransaction: 'FinancialTransaction'
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
      modelProps: "user" | "userProfile" | "patient" | "clinic" | "report" | "reportImage" | "measurement" | "textTemplate" | "conclusionTemplate" | "payment" | "financialTransaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Clinic: {
        payload: Prisma.$ClinicPayload<ExtArgs>
        fields: Prisma.ClinicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClinicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClinicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          findFirst: {
            args: Prisma.ClinicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClinicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          findMany: {
            args: Prisma.ClinicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>[]
          }
          create: {
            args: Prisma.ClinicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          createMany: {
            args: Prisma.ClinicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClinicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>[]
          }
          delete: {
            args: Prisma.ClinicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          update: {
            args: Prisma.ClinicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          deleteMany: {
            args: Prisma.ClinicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClinicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClinicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>[]
          }
          upsert: {
            args: Prisma.ClinicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          aggregate: {
            args: Prisma.ClinicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClinic>
          }
          groupBy: {
            args: Prisma.ClinicGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClinicGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClinicCountArgs<ExtArgs>
            result: $Utils.Optional<ClinicCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      ReportImage: {
        payload: Prisma.$ReportImagePayload<ExtArgs>
        fields: Prisma.ReportImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportImagePayload>
          }
          findFirst: {
            args: Prisma.ReportImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportImagePayload>
          }
          findMany: {
            args: Prisma.ReportImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportImagePayload>[]
          }
          create: {
            args: Prisma.ReportImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportImagePayload>
          }
          createMany: {
            args: Prisma.ReportImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportImagePayload>[]
          }
          delete: {
            args: Prisma.ReportImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportImagePayload>
          }
          update: {
            args: Prisma.ReportImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportImagePayload>
          }
          deleteMany: {
            args: Prisma.ReportImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportImagePayload>[]
          }
          upsert: {
            args: Prisma.ReportImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportImagePayload>
          }
          aggregate: {
            args: Prisma.ReportImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReportImage>
          }
          groupBy: {
            args: Prisma.ReportImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportImageCountArgs<ExtArgs>
            result: $Utils.Optional<ReportImageCountAggregateOutputType> | number
          }
        }
      }
      Measurement: {
        payload: Prisma.$MeasurementPayload<ExtArgs>
        fields: Prisma.MeasurementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeasurementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeasurementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          findFirst: {
            args: Prisma.MeasurementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeasurementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          findMany: {
            args: Prisma.MeasurementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>[]
          }
          create: {
            args: Prisma.MeasurementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          createMany: {
            args: Prisma.MeasurementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeasurementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>[]
          }
          delete: {
            args: Prisma.MeasurementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          update: {
            args: Prisma.MeasurementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          deleteMany: {
            args: Prisma.MeasurementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeasurementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeasurementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>[]
          }
          upsert: {
            args: Prisma.MeasurementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeasurementPayload>
          }
          aggregate: {
            args: Prisma.MeasurementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeasurement>
          }
          groupBy: {
            args: Prisma.MeasurementGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeasurementGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeasurementCountArgs<ExtArgs>
            result: $Utils.Optional<MeasurementCountAggregateOutputType> | number
          }
        }
      }
      TextTemplate: {
        payload: Prisma.$TextTemplatePayload<ExtArgs>
        fields: Prisma.TextTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TextTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TextTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextTemplatePayload>
          }
          findFirst: {
            args: Prisma.TextTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TextTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextTemplatePayload>
          }
          findMany: {
            args: Prisma.TextTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextTemplatePayload>[]
          }
          create: {
            args: Prisma.TextTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextTemplatePayload>
          }
          createMany: {
            args: Prisma.TextTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TextTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextTemplatePayload>[]
          }
          delete: {
            args: Prisma.TextTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextTemplatePayload>
          }
          update: {
            args: Prisma.TextTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextTemplatePayload>
          }
          deleteMany: {
            args: Prisma.TextTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TextTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TextTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextTemplatePayload>[]
          }
          upsert: {
            args: Prisma.TextTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextTemplatePayload>
          }
          aggregate: {
            args: Prisma.TextTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTextTemplate>
          }
          groupBy: {
            args: Prisma.TextTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TextTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TextTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TextTemplateCountAggregateOutputType> | number
          }
        }
      }
      ConclusionTemplate: {
        payload: Prisma.$ConclusionTemplatePayload<ExtArgs>
        fields: Prisma.ConclusionTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConclusionTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConclusionTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConclusionTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConclusionTemplatePayload>
          }
          findFirst: {
            args: Prisma.ConclusionTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConclusionTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConclusionTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConclusionTemplatePayload>
          }
          findMany: {
            args: Prisma.ConclusionTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConclusionTemplatePayload>[]
          }
          create: {
            args: Prisma.ConclusionTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConclusionTemplatePayload>
          }
          createMany: {
            args: Prisma.ConclusionTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConclusionTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConclusionTemplatePayload>[]
          }
          delete: {
            args: Prisma.ConclusionTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConclusionTemplatePayload>
          }
          update: {
            args: Prisma.ConclusionTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConclusionTemplatePayload>
          }
          deleteMany: {
            args: Prisma.ConclusionTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConclusionTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConclusionTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConclusionTemplatePayload>[]
          }
          upsert: {
            args: Prisma.ConclusionTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConclusionTemplatePayload>
          }
          aggregate: {
            args: Prisma.ConclusionTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConclusionTemplate>
          }
          groupBy: {
            args: Prisma.ConclusionTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConclusionTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConclusionTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<ConclusionTemplateCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      FinancialTransaction: {
        payload: Prisma.$FinancialTransactionPayload<ExtArgs>
        fields: Prisma.FinancialTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          findFirst: {
            args: Prisma.FinancialTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          findMany: {
            args: Prisma.FinancialTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>[]
          }
          create: {
            args: Prisma.FinancialTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          createMany: {
            args: Prisma.FinancialTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>[]
          }
          delete: {
            args: Prisma.FinancialTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          update: {
            args: Prisma.FinancialTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          deleteMany: {
            args: Prisma.FinancialTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinancialTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>[]
          }
          upsert: {
            args: Prisma.FinancialTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          aggregate: {
            args: Prisma.FinancialTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancialTransaction>
          }
          groupBy: {
            args: Prisma.FinancialTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialTransactionCountAggregateOutputType> | number
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
    user?: UserOmit
    userProfile?: UserProfileOmit
    patient?: PatientOmit
    clinic?: ClinicOmit
    report?: ReportOmit
    reportImage?: ReportImageOmit
    measurement?: MeasurementOmit
    textTemplate?: TextTemplateOmit
    conclusionTemplate?: ConclusionTemplateOmit
    payment?: PaymentOmit
    financialTransaction?: FinancialTransactionOmit
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
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    reports: number
    Payment: number
    financialTransactions: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | PatientCountOutputTypeCountReportsArgs
    Payment?: boolean | PatientCountOutputTypeCountPaymentArgs
    financialTransactions?: boolean | PatientCountOutputTypeCountFinancialTransactionsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountFinancialTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialTransactionWhereInput
  }


  /**
   * Count Type ClinicCountOutputType
   */

  export type ClinicCountOutputType = {
    reports: number
    payments: number
    transactions: number
  }

  export type ClinicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | ClinicCountOutputTypeCountReportsArgs
    payments?: boolean | ClinicCountOutputTypeCountPaymentsArgs
    transactions?: boolean | ClinicCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicCountOutputType
     */
    select?: ClinicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialTransactionWhereInput
  }


  /**
   * Count Type ReportCountOutputType
   */

  export type ReportCountOutputType = {
    images: number
    measurements: number
    transactions: number
  }

  export type ReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ReportCountOutputTypeCountImagesArgs
    measurements?: boolean | ReportCountOutputTypeCountMeasurementsArgs
    transactions?: boolean | ReportCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCountOutputType
     */
    select?: ReportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportImageWhereInput
  }

  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeCountMeasurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasurementWhereInput
  }

  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialTransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    role: $Enums.UserRole
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
      role: $Enums.UserRole
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    cnpj: string | null
    CRMV: string | null
    phone: string | null
    instagramHandle: string | null
    instagramURL: string | null
    twitterHandle: string | null
    twitterURL: string | null
    websiteHandle: string | null
    websiteURL: string | null
    address: string | null
    city: string | null
    state: string | null
    profilePictureURL: string | null
    logoPictureURL: string | null
    signaturePictureURL: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    cnpj: string | null
    CRMV: string | null
    phone: string | null
    instagramHandle: string | null
    instagramURL: string | null
    twitterHandle: string | null
    twitterURL: string | null
    websiteHandle: string | null
    websiteURL: string | null
    address: string | null
    city: string | null
    state: string | null
    profilePictureURL: string | null
    logoPictureURL: string | null
    signaturePictureURL: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    cnpj: number
    CRMV: number
    phone: number
    instagramHandle: number
    instagramURL: number
    twitterHandle: number
    twitterURL: number
    websiteHandle: number
    websiteURL: number
    address: number
    city: number
    state: number
    profilePictureURL: number
    logoPictureURL: number
    signaturePictureURL: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    cnpj?: true
    CRMV?: true
    phone?: true
    instagramHandle?: true
    instagramURL?: true
    twitterHandle?: true
    twitterURL?: true
    websiteHandle?: true
    websiteURL?: true
    address?: true
    city?: true
    state?: true
    profilePictureURL?: true
    logoPictureURL?: true
    signaturePictureURL?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    cnpj?: true
    CRMV?: true
    phone?: true
    instagramHandle?: true
    instagramURL?: true
    twitterHandle?: true
    twitterURL?: true
    websiteHandle?: true
    websiteURL?: true
    address?: true
    city?: true
    state?: true
    profilePictureURL?: true
    logoPictureURL?: true
    signaturePictureURL?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    cnpj?: true
    CRMV?: true
    phone?: true
    instagramHandle?: true
    instagramURL?: true
    twitterHandle?: true
    twitterURL?: true
    websiteHandle?: true
    websiteURL?: true
    address?: true
    city?: true
    state?: true
    profilePictureURL?: true
    logoPictureURL?: true
    signaturePictureURL?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    name: string
    cnpj: string | null
    CRMV: string | null
    phone: string | null
    instagramHandle: string | null
    instagramURL: string | null
    twitterHandle: string | null
    twitterURL: string | null
    websiteHandle: string | null
    websiteURL: string | null
    address: string | null
    city: string | null
    state: string | null
    profilePictureURL: string | null
    logoPictureURL: string | null
    signaturePictureURL: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    cnpj?: boolean
    CRMV?: boolean
    phone?: boolean
    instagramHandle?: boolean
    instagramURL?: boolean
    twitterHandle?: boolean
    twitterURL?: boolean
    websiteHandle?: boolean
    websiteURL?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    profilePictureURL?: boolean
    logoPictureURL?: boolean
    signaturePictureURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    cnpj?: boolean
    CRMV?: boolean
    phone?: boolean
    instagramHandle?: boolean
    instagramURL?: boolean
    twitterHandle?: boolean
    twitterURL?: boolean
    websiteHandle?: boolean
    websiteURL?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    profilePictureURL?: boolean
    logoPictureURL?: boolean
    signaturePictureURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    cnpj?: boolean
    CRMV?: boolean
    phone?: boolean
    instagramHandle?: boolean
    instagramURL?: boolean
    twitterHandle?: boolean
    twitterURL?: boolean
    websiteHandle?: boolean
    websiteURL?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    profilePictureURL?: boolean
    logoPictureURL?: boolean
    signaturePictureURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    cnpj?: boolean
    CRMV?: boolean
    phone?: boolean
    instagramHandle?: boolean
    instagramURL?: boolean
    twitterHandle?: boolean
    twitterURL?: boolean
    websiteHandle?: boolean
    websiteURL?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    profilePictureURL?: boolean
    logoPictureURL?: boolean
    signaturePictureURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "cnpj" | "CRMV" | "phone" | "instagramHandle" | "instagramURL" | "twitterHandle" | "twitterURL" | "websiteHandle" | "websiteURL" | "address" | "city" | "state" | "profilePictureURL" | "logoPictureURL" | "signaturePictureURL" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      cnpj: string | null
      CRMV: string | null
      phone: string | null
      instagramHandle: string | null
      instagramURL: string | null
      twitterHandle: string | null
      twitterURL: string | null
      websiteHandle: string | null
      websiteURL: string | null
      address: string | null
      city: string | null
      state: string | null
      profilePictureURL: string | null
      logoPictureURL: string | null
      signaturePictureURL: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly name: FieldRef<"UserProfile", 'String'>
    readonly cnpj: FieldRef<"UserProfile", 'String'>
    readonly CRMV: FieldRef<"UserProfile", 'String'>
    readonly phone: FieldRef<"UserProfile", 'String'>
    readonly instagramHandle: FieldRef<"UserProfile", 'String'>
    readonly instagramURL: FieldRef<"UserProfile", 'String'>
    readonly twitterHandle: FieldRef<"UserProfile", 'String'>
    readonly twitterURL: FieldRef<"UserProfile", 'String'>
    readonly websiteHandle: FieldRef<"UserProfile", 'String'>
    readonly websiteURL: FieldRef<"UserProfile", 'String'>
    readonly address: FieldRef<"UserProfile", 'String'>
    readonly city: FieldRef<"UserProfile", 'String'>
    readonly state: FieldRef<"UserProfile", 'String'>
    readonly profilePictureURL: FieldRef<"UserProfile", 'String'>
    readonly logoPictureURL: FieldRef<"UserProfile", 'String'>
    readonly signaturePictureURL: FieldRef<"UserProfile", 'String'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    age: number | null
  }

  export type PatientSumAggregateOutputType = {
    age: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    name: string | null
    species: string | null
    breed: string | null
    sex: $Enums.Sex | null
    age: number | null
    ageUnit: $Enums.AgeUnit | null
    ownerName: string | null
    ownerPhone: string | null
    createdAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    species: string | null
    breed: string | null
    sex: $Enums.Sex | null
    age: number | null
    ageUnit: $Enums.AgeUnit | null
    ownerName: string | null
    ownerPhone: string | null
    createdAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    name: number
    species: number
    breed: number
    sex: number
    age: number
    ageUnit: number
    ownerName: number
    ownerPhone: number
    createdAt: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    age?: true
  }

  export type PatientSumAggregateInputType = {
    age?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    name?: true
    species?: true
    breed?: true
    sex?: true
    age?: true
    ageUnit?: true
    ownerName?: true
    ownerPhone?: true
    createdAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    name?: true
    species?: true
    breed?: true
    sex?: true
    age?: true
    ageUnit?: true
    ownerName?: true
    ownerPhone?: true
    createdAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    name?: true
    species?: true
    breed?: true
    sex?: true
    age?: true
    ageUnit?: true
    ownerName?: true
    ownerPhone?: true
    createdAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    name: string
    species: string
    breed: string
    sex: $Enums.Sex
    age: number
    ageUnit: $Enums.AgeUnit
    ownerName: string
    ownerPhone: string
    createdAt: Date
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    sex?: boolean
    age?: boolean
    ageUnit?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    createdAt?: boolean
    reports?: boolean | Patient$reportsArgs<ExtArgs>
    Payment?: boolean | Patient$PaymentArgs<ExtArgs>
    financialTransactions?: boolean | Patient$financialTransactionsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    sex?: boolean
    age?: boolean
    ageUnit?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    sex?: boolean
    age?: boolean
    ageUnit?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    sex?: boolean
    age?: boolean
    ageUnit?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    createdAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "species" | "breed" | "sex" | "age" | "ageUnit" | "ownerName" | "ownerPhone" | "createdAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | Patient$reportsArgs<ExtArgs>
    Payment?: boolean | Patient$PaymentArgs<ExtArgs>
    financialTransactions?: boolean | Patient$financialTransactionsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      reports: Prisma.$ReportPayload<ExtArgs>[]
      Payment: Prisma.$PaymentPayload<ExtArgs>[]
      financialTransactions: Prisma.$FinancialTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      species: string
      breed: string
      sex: $Enums.Sex
      age: number
      ageUnit: $Enums.AgeUnit
      ownerName: string
      ownerPhone: string
      createdAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
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
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reports<T extends Patient$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Payment<T extends Patient$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, Patient$PaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    financialTransactions<T extends Patient$financialTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$financialTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly species: FieldRef<"Patient", 'String'>
    readonly breed: FieldRef<"Patient", 'String'>
    readonly sex: FieldRef<"Patient", 'Sex'>
    readonly age: FieldRef<"Patient", 'Int'>
    readonly ageUnit: FieldRef<"Patient", 'AgeUnit'>
    readonly ownerName: FieldRef<"Patient", 'String'>
    readonly ownerPhone: FieldRef<"Patient", 'String'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.reports
   */
  export type Patient$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Patient.Payment
   */
  export type Patient$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Patient.financialTransactions
   */
  export type Patient$financialTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    where?: FinancialTransactionWhereInput
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    cursor?: FinancialTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialTransactionScalarFieldEnum | FinancialTransactionScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Clinic
   */

  export type AggregateClinic = {
    _count: ClinicCountAggregateOutputType | null
    _min: ClinicMinAggregateOutputType | null
    _max: ClinicMaxAggregateOutputType | null
  }

  export type ClinicMinAggregateOutputType = {
    id: string | null
    name: string | null
    cnpj: string | null
    address: string | null
    city: string | null
    state: string | null
    createdAt: Date | null
  }

  export type ClinicMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cnpj: string | null
    address: string | null
    city: string | null
    state: string | null
    createdAt: Date | null
  }

  export type ClinicCountAggregateOutputType = {
    id: number
    name: number
    cnpj: number
    address: number
    city: number
    state: number
    createdAt: number
    _all: number
  }


  export type ClinicMinAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    address?: true
    city?: true
    state?: true
    createdAt?: true
  }

  export type ClinicMaxAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    address?: true
    city?: true
    state?: true
    createdAt?: true
  }

  export type ClinicCountAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    address?: true
    city?: true
    state?: true
    createdAt?: true
    _all?: true
  }

  export type ClinicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clinic to aggregate.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clinics
    **/
    _count?: true | ClinicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClinicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClinicMaxAggregateInputType
  }

  export type GetClinicAggregateType<T extends ClinicAggregateArgs> = {
        [P in keyof T & keyof AggregateClinic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinic[P]>
      : GetScalarType<T[P], AggregateClinic[P]>
  }




  export type ClinicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClinicWhereInput
    orderBy?: ClinicOrderByWithAggregationInput | ClinicOrderByWithAggregationInput[]
    by: ClinicScalarFieldEnum[] | ClinicScalarFieldEnum
    having?: ClinicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClinicCountAggregateInputType | true
    _min?: ClinicMinAggregateInputType
    _max?: ClinicMaxAggregateInputType
  }

  export type ClinicGroupByOutputType = {
    id: string
    name: string
    cnpj: string
    address: string
    city: string
    state: string
    createdAt: Date
    _count: ClinicCountAggregateOutputType | null
    _min: ClinicMinAggregateOutputType | null
    _max: ClinicMaxAggregateOutputType | null
  }

  type GetClinicGroupByPayload<T extends ClinicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClinicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClinicGroupByOutputType[P]>
            : GetScalarType<T[P], ClinicGroupByOutputType[P]>
        }
      >
    >


  export type ClinicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cnpj?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    createdAt?: boolean
    reports?: boolean | Clinic$reportsArgs<ExtArgs>
    payments?: boolean | Clinic$paymentsArgs<ExtArgs>
    transactions?: boolean | Clinic$transactionsArgs<ExtArgs>
    _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinic"]>

  export type ClinicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cnpj?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["clinic"]>

  export type ClinicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cnpj?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["clinic"]>

  export type ClinicSelectScalar = {
    id?: boolean
    name?: boolean
    cnpj?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    createdAt?: boolean
  }

  export type ClinicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cnpj" | "address" | "city" | "state" | "createdAt", ExtArgs["result"]["clinic"]>
  export type ClinicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | Clinic$reportsArgs<ExtArgs>
    payments?: boolean | Clinic$paymentsArgs<ExtArgs>
    transactions?: boolean | Clinic$transactionsArgs<ExtArgs>
    _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClinicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClinicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClinicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clinic"
    objects: {
      reports: Prisma.$ReportPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      transactions: Prisma.$FinancialTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cnpj: string
      address: string
      city: string
      state: string
      createdAt: Date
    }, ExtArgs["result"]["clinic"]>
    composites: {}
  }

  type ClinicGetPayload<S extends boolean | null | undefined | ClinicDefaultArgs> = $Result.GetResult<Prisma.$ClinicPayload, S>

  type ClinicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClinicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClinicCountAggregateInputType | true
    }

  export interface ClinicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clinic'], meta: { name: 'Clinic' } }
    /**
     * Find zero or one Clinic that matches the filter.
     * @param {ClinicFindUniqueArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClinicFindUniqueArgs>(args: SelectSubset<T, ClinicFindUniqueArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clinic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClinicFindUniqueOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClinicFindUniqueOrThrowArgs>(args: SelectSubset<T, ClinicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clinic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindFirstArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClinicFindFirstArgs>(args?: SelectSubset<T, ClinicFindFirstArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clinic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindFirstOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClinicFindFirstOrThrowArgs>(args?: SelectSubset<T, ClinicFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clinics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clinics
     * const clinics = await prisma.clinic.findMany()
     * 
     * // Get first 10 Clinics
     * const clinics = await prisma.clinic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clinicWithIdOnly = await prisma.clinic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClinicFindManyArgs>(args?: SelectSubset<T, ClinicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clinic.
     * @param {ClinicCreateArgs} args - Arguments to create a Clinic.
     * @example
     * // Create one Clinic
     * const Clinic = await prisma.clinic.create({
     *   data: {
     *     // ... data to create a Clinic
     *   }
     * })
     * 
     */
    create<T extends ClinicCreateArgs>(args: SelectSubset<T, ClinicCreateArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clinics.
     * @param {ClinicCreateManyArgs} args - Arguments to create many Clinics.
     * @example
     * // Create many Clinics
     * const clinic = await prisma.clinic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClinicCreateManyArgs>(args?: SelectSubset<T, ClinicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clinics and returns the data saved in the database.
     * @param {ClinicCreateManyAndReturnArgs} args - Arguments to create many Clinics.
     * @example
     * // Create many Clinics
     * const clinic = await prisma.clinic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clinics and only return the `id`
     * const clinicWithIdOnly = await prisma.clinic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClinicCreateManyAndReturnArgs>(args?: SelectSubset<T, ClinicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clinic.
     * @param {ClinicDeleteArgs} args - Arguments to delete one Clinic.
     * @example
     * // Delete one Clinic
     * const Clinic = await prisma.clinic.delete({
     *   where: {
     *     // ... filter to delete one Clinic
     *   }
     * })
     * 
     */
    delete<T extends ClinicDeleteArgs>(args: SelectSubset<T, ClinicDeleteArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clinic.
     * @param {ClinicUpdateArgs} args - Arguments to update one Clinic.
     * @example
     * // Update one Clinic
     * const clinic = await prisma.clinic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClinicUpdateArgs>(args: SelectSubset<T, ClinicUpdateArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clinics.
     * @param {ClinicDeleteManyArgs} args - Arguments to filter Clinics to delete.
     * @example
     * // Delete a few Clinics
     * const { count } = await prisma.clinic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClinicDeleteManyArgs>(args?: SelectSubset<T, ClinicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clinics
     * const clinic = await prisma.clinic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClinicUpdateManyArgs>(args: SelectSubset<T, ClinicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinics and returns the data updated in the database.
     * @param {ClinicUpdateManyAndReturnArgs} args - Arguments to update many Clinics.
     * @example
     * // Update many Clinics
     * const clinic = await prisma.clinic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clinics and only return the `id`
     * const clinicWithIdOnly = await prisma.clinic.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClinicUpdateManyAndReturnArgs>(args: SelectSubset<T, ClinicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clinic.
     * @param {ClinicUpsertArgs} args - Arguments to update or create a Clinic.
     * @example
     * // Update or create a Clinic
     * const clinic = await prisma.clinic.upsert({
     *   create: {
     *     // ... data to create a Clinic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clinic we want to update
     *   }
     * })
     */
    upsert<T extends ClinicUpsertArgs>(args: SelectSubset<T, ClinicUpsertArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicCountArgs} args - Arguments to filter Clinics to count.
     * @example
     * // Count the number of Clinics
     * const count = await prisma.clinic.count({
     *   where: {
     *     // ... the filter for the Clinics we want to count
     *   }
     * })
    **/
    count<T extends ClinicCountArgs>(
      args?: Subset<T, ClinicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClinicAggregateArgs>(args: Subset<T, ClinicAggregateArgs>): Prisma.PrismaPromise<GetClinicAggregateType<T>>

    /**
     * Group by Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicGroupByArgs} args - Group by arguments.
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
      T extends ClinicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClinicGroupByArgs['orderBy'] }
        : { orderBy?: ClinicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClinicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clinic model
   */
  readonly fields: ClinicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clinic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClinicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reports<T extends Clinic$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Clinic$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Clinic$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Clinic$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Clinic$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Clinic$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Clinic model
   */
  interface ClinicFieldRefs {
    readonly id: FieldRef<"Clinic", 'String'>
    readonly name: FieldRef<"Clinic", 'String'>
    readonly cnpj: FieldRef<"Clinic", 'String'>
    readonly address: FieldRef<"Clinic", 'String'>
    readonly city: FieldRef<"Clinic", 'String'>
    readonly state: FieldRef<"Clinic", 'String'>
    readonly createdAt: FieldRef<"Clinic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Clinic findUnique
   */
  export type ClinicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic findUniqueOrThrow
   */
  export type ClinicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic findFirst
   */
  export type ClinicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * Clinic findFirstOrThrow
   */
  export type ClinicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * Clinic findMany
   */
  export type ClinicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinics to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * Clinic create
   */
  export type ClinicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * The data needed to create a Clinic.
     */
    data: XOR<ClinicCreateInput, ClinicUncheckedCreateInput>
  }

  /**
   * Clinic createMany
   */
  export type ClinicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clinics.
     */
    data: ClinicCreateManyInput | ClinicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clinic createManyAndReturn
   */
  export type ClinicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * The data used to create many Clinics.
     */
    data: ClinicCreateManyInput | ClinicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clinic update
   */
  export type ClinicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * The data needed to update a Clinic.
     */
    data: XOR<ClinicUpdateInput, ClinicUncheckedUpdateInput>
    /**
     * Choose, which Clinic to update.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic updateMany
   */
  export type ClinicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clinics.
     */
    data: XOR<ClinicUpdateManyMutationInput, ClinicUncheckedUpdateManyInput>
    /**
     * Filter which Clinics to update
     */
    where?: ClinicWhereInput
    /**
     * Limit how many Clinics to update.
     */
    limit?: number
  }

  /**
   * Clinic updateManyAndReturn
   */
  export type ClinicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * The data used to update Clinics.
     */
    data: XOR<ClinicUpdateManyMutationInput, ClinicUncheckedUpdateManyInput>
    /**
     * Filter which Clinics to update
     */
    where?: ClinicWhereInput
    /**
     * Limit how many Clinics to update.
     */
    limit?: number
  }

  /**
   * Clinic upsert
   */
  export type ClinicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * The filter to search for the Clinic to update in case it exists.
     */
    where: ClinicWhereUniqueInput
    /**
     * In case the Clinic found by the `where` argument doesn't exist, create a new Clinic with this data.
     */
    create: XOR<ClinicCreateInput, ClinicUncheckedCreateInput>
    /**
     * In case the Clinic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClinicUpdateInput, ClinicUncheckedUpdateInput>
  }

  /**
   * Clinic delete
   */
  export type ClinicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter which Clinic to delete.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic deleteMany
   */
  export type ClinicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clinics to delete
     */
    where?: ClinicWhereInput
    /**
     * Limit how many Clinics to delete.
     */
    limit?: number
  }

  /**
   * Clinic.reports
   */
  export type Clinic$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Clinic.payments
   */
  export type Clinic$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Clinic.transactions
   */
  export type Clinic$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    where?: FinancialTransactionWhereInput
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    cursor?: FinancialTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialTransactionScalarFieldEnum | FinancialTransactionScalarFieldEnum[]
  }

  /**
   * Clinic without action
   */
  export type ClinicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    baseValue: number | null
    additionalValue: number | null
  }

  export type ReportSumAggregateOutputType = {
    baseValue: number | null
    additionalValue: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    clinicId: string | null
    type: $Enums.ExamType | null
    categoryUltrasound: $Enums.UltrasoundCategory | null
    categoryXRay: $Enums.XRayCategory | null
    findings: string | null
    conclusion: string | null
    createdAt: Date | null
    status: $Enums.ReportStatus | null
    baseValue: number | null
    additionalValue: number | null
    code: string | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    clinicId: string | null
    type: $Enums.ExamType | null
    categoryUltrasound: $Enums.UltrasoundCategory | null
    categoryXRay: $Enums.XRayCategory | null
    findings: string | null
    conclusion: string | null
    createdAt: Date | null
    status: $Enums.ReportStatus | null
    baseValue: number | null
    additionalValue: number | null
    code: string | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    patientId: number
    clinicId: number
    type: number
    categoryUltrasound: number
    categoryXRay: number
    findings: number
    conclusion: number
    createdAt: number
    status: number
    baseValue: number
    additionalValue: number
    code: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    baseValue?: true
    additionalValue?: true
  }

  export type ReportSumAggregateInputType = {
    baseValue?: true
    additionalValue?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    patientId?: true
    clinicId?: true
    type?: true
    categoryUltrasound?: true
    categoryXRay?: true
    findings?: true
    conclusion?: true
    createdAt?: true
    status?: true
    baseValue?: true
    additionalValue?: true
    code?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    patientId?: true
    clinicId?: true
    type?: true
    categoryUltrasound?: true
    categoryXRay?: true
    findings?: true
    conclusion?: true
    createdAt?: true
    status?: true
    baseValue?: true
    additionalValue?: true
    code?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    patientId?: true
    clinicId?: true
    type?: true
    categoryUltrasound?: true
    categoryXRay?: true
    findings?: true
    conclusion?: true
    createdAt?: true
    status?: true
    baseValue?: true
    additionalValue?: true
    code?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    patientId: string
    clinicId: string
    type: $Enums.ExamType
    categoryUltrasound: $Enums.UltrasoundCategory | null
    categoryXRay: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt: Date
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    clinicId?: boolean
    type?: boolean
    categoryUltrasound?: boolean
    categoryXRay?: boolean
    findings?: boolean
    conclusion?: boolean
    createdAt?: boolean
    status?: boolean
    baseValue?: boolean
    additionalValue?: boolean
    code?: boolean
    images?: boolean | Report$imagesArgs<ExtArgs>
    measurements?: boolean | Report$measurementsArgs<ExtArgs>
    payment?: boolean | Report$paymentArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    transactions?: boolean | Report$transactionsArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    clinicId?: boolean
    type?: boolean
    categoryUltrasound?: boolean
    categoryXRay?: boolean
    findings?: boolean
    conclusion?: boolean
    createdAt?: boolean
    status?: boolean
    baseValue?: boolean
    additionalValue?: boolean
    code?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    clinicId?: boolean
    type?: boolean
    categoryUltrasound?: boolean
    categoryXRay?: boolean
    findings?: boolean
    conclusion?: boolean
    createdAt?: boolean
    status?: boolean
    baseValue?: boolean
    additionalValue?: boolean
    code?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    patientId?: boolean
    clinicId?: boolean
    type?: boolean
    categoryUltrasound?: boolean
    categoryXRay?: boolean
    findings?: boolean
    conclusion?: boolean
    createdAt?: boolean
    status?: boolean
    baseValue?: boolean
    additionalValue?: boolean
    code?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "clinicId" | "type" | "categoryUltrasound" | "categoryXRay" | "findings" | "conclusion" | "createdAt" | "status" | "baseValue" | "additionalValue" | "code", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Report$imagesArgs<ExtArgs>
    measurements?: boolean | Report$measurementsArgs<ExtArgs>
    payment?: boolean | Report$paymentArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    transactions?: boolean | Report$transactionsArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      images: Prisma.$ReportImagePayload<ExtArgs>[]
      measurements: Prisma.$MeasurementPayload<ExtArgs>[]
      payment: Prisma.$PaymentPayload<ExtArgs> | null
      patient: Prisma.$PatientPayload<ExtArgs>
      clinic: Prisma.$ClinicPayload<ExtArgs>
      transactions: Prisma.$FinancialTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      clinicId: string
      type: $Enums.ExamType
      categoryUltrasound: $Enums.UltrasoundCategory | null
      categoryXRay: $Enums.XRayCategory | null
      findings: string
      conclusion: string
      createdAt: Date
      status: $Enums.ReportStatus
      baseValue: number
      additionalValue: number
      code: string
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Report$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Report$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    measurements<T extends Report$measurementsArgs<ExtArgs> = {}>(args?: Subset<T, Report$measurementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends Report$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Report$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clinic<T extends ClinicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicDefaultArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Report$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Report$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly patientId: FieldRef<"Report", 'String'>
    readonly clinicId: FieldRef<"Report", 'String'>
    readonly type: FieldRef<"Report", 'ExamType'>
    readonly categoryUltrasound: FieldRef<"Report", 'UltrasoundCategory'>
    readonly categoryXRay: FieldRef<"Report", 'XRayCategory'>
    readonly findings: FieldRef<"Report", 'String'>
    readonly conclusion: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly status: FieldRef<"Report", 'ReportStatus'>
    readonly baseValue: FieldRef<"Report", 'Float'>
    readonly additionalValue: FieldRef<"Report", 'Float'>
    readonly code: FieldRef<"Report", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report.images
   */
  export type Report$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportImage
     */
    select?: ReportImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportImage
     */
    omit?: ReportImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportImageInclude<ExtArgs> | null
    where?: ReportImageWhereInput
    orderBy?: ReportImageOrderByWithRelationInput | ReportImageOrderByWithRelationInput[]
    cursor?: ReportImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportImageScalarFieldEnum | ReportImageScalarFieldEnum[]
  }

  /**
   * Report.measurements
   */
  export type Report$measurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    where?: MeasurementWhereInput
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    cursor?: MeasurementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * Report.payment
   */
  export type Report$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Report.transactions
   */
  export type Report$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    where?: FinancialTransactionWhereInput
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    cursor?: FinancialTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialTransactionScalarFieldEnum | FinancialTransactionScalarFieldEnum[]
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model ReportImage
   */

  export type AggregateReportImage = {
    _count: ReportImageCountAggregateOutputType | null
    _min: ReportImageMinAggregateOutputType | null
    _max: ReportImageMaxAggregateOutputType | null
  }

  export type ReportImageMinAggregateOutputType = {
    id: string | null
    reportId: string | null
    url: string | null
    createdAt: Date | null
  }

  export type ReportImageMaxAggregateOutputType = {
    id: string | null
    reportId: string | null
    url: string | null
    createdAt: Date | null
  }

  export type ReportImageCountAggregateOutputType = {
    id: number
    reportId: number
    url: number
    createdAt: number
    _all: number
  }


  export type ReportImageMinAggregateInputType = {
    id?: true
    reportId?: true
    url?: true
    createdAt?: true
  }

  export type ReportImageMaxAggregateInputType = {
    id?: true
    reportId?: true
    url?: true
    createdAt?: true
  }

  export type ReportImageCountAggregateInputType = {
    id?: true
    reportId?: true
    url?: true
    createdAt?: true
    _all?: true
  }

  export type ReportImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportImage to aggregate.
     */
    where?: ReportImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportImages to fetch.
     */
    orderBy?: ReportImageOrderByWithRelationInput | ReportImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReportImages
    **/
    _count?: true | ReportImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportImageMaxAggregateInputType
  }

  export type GetReportImageAggregateType<T extends ReportImageAggregateArgs> = {
        [P in keyof T & keyof AggregateReportImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReportImage[P]>
      : GetScalarType<T[P], AggregateReportImage[P]>
  }




  export type ReportImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportImageWhereInput
    orderBy?: ReportImageOrderByWithAggregationInput | ReportImageOrderByWithAggregationInput[]
    by: ReportImageScalarFieldEnum[] | ReportImageScalarFieldEnum
    having?: ReportImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportImageCountAggregateInputType | true
    _min?: ReportImageMinAggregateInputType
    _max?: ReportImageMaxAggregateInputType
  }

  export type ReportImageGroupByOutputType = {
    id: string
    reportId: string
    url: string
    createdAt: Date
    _count: ReportImageCountAggregateOutputType | null
    _min: ReportImageMinAggregateOutputType | null
    _max: ReportImageMaxAggregateOutputType | null
  }

  type GetReportImageGroupByPayload<T extends ReportImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportImageGroupByOutputType[P]>
            : GetScalarType<T[P], ReportImageGroupByOutputType[P]>
        }
      >
    >


  export type ReportImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    url?: boolean
    createdAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportImage"]>

  export type ReportImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    url?: boolean
    createdAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportImage"]>

  export type ReportImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    url?: boolean
    createdAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportImage"]>

  export type ReportImageSelectScalar = {
    id?: boolean
    reportId?: boolean
    url?: boolean
    createdAt?: boolean
  }

  export type ReportImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportId" | "url" | "createdAt", ExtArgs["result"]["reportImage"]>
  export type ReportImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }
  export type ReportImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }
  export type ReportImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }

  export type $ReportImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReportImage"
    objects: {
      report: Prisma.$ReportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reportId: string
      url: string
      createdAt: Date
    }, ExtArgs["result"]["reportImage"]>
    composites: {}
  }

  type ReportImageGetPayload<S extends boolean | null | undefined | ReportImageDefaultArgs> = $Result.GetResult<Prisma.$ReportImagePayload, S>

  type ReportImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportImageCountAggregateInputType | true
    }

  export interface ReportImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReportImage'], meta: { name: 'ReportImage' } }
    /**
     * Find zero or one ReportImage that matches the filter.
     * @param {ReportImageFindUniqueArgs} args - Arguments to find a ReportImage
     * @example
     * // Get one ReportImage
     * const reportImage = await prisma.reportImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportImageFindUniqueArgs>(args: SelectSubset<T, ReportImageFindUniqueArgs<ExtArgs>>): Prisma__ReportImageClient<$Result.GetResult<Prisma.$ReportImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReportImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportImageFindUniqueOrThrowArgs} args - Arguments to find a ReportImage
     * @example
     * // Get one ReportImage
     * const reportImage = await prisma.reportImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportImageClient<$Result.GetResult<Prisma.$ReportImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportImageFindFirstArgs} args - Arguments to find a ReportImage
     * @example
     * // Get one ReportImage
     * const reportImage = await prisma.reportImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportImageFindFirstArgs>(args?: SelectSubset<T, ReportImageFindFirstArgs<ExtArgs>>): Prisma__ReportImageClient<$Result.GetResult<Prisma.$ReportImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportImageFindFirstOrThrowArgs} args - Arguments to find a ReportImage
     * @example
     * // Get one ReportImage
     * const reportImage = await prisma.reportImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportImageClient<$Result.GetResult<Prisma.$ReportImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReportImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReportImages
     * const reportImages = await prisma.reportImage.findMany()
     * 
     * // Get first 10 ReportImages
     * const reportImages = await prisma.reportImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportImageWithIdOnly = await prisma.reportImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportImageFindManyArgs>(args?: SelectSubset<T, ReportImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReportImage.
     * @param {ReportImageCreateArgs} args - Arguments to create a ReportImage.
     * @example
     * // Create one ReportImage
     * const ReportImage = await prisma.reportImage.create({
     *   data: {
     *     // ... data to create a ReportImage
     *   }
     * })
     * 
     */
    create<T extends ReportImageCreateArgs>(args: SelectSubset<T, ReportImageCreateArgs<ExtArgs>>): Prisma__ReportImageClient<$Result.GetResult<Prisma.$ReportImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReportImages.
     * @param {ReportImageCreateManyArgs} args - Arguments to create many ReportImages.
     * @example
     * // Create many ReportImages
     * const reportImage = await prisma.reportImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportImageCreateManyArgs>(args?: SelectSubset<T, ReportImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReportImages and returns the data saved in the database.
     * @param {ReportImageCreateManyAndReturnArgs} args - Arguments to create many ReportImages.
     * @example
     * // Create many ReportImages
     * const reportImage = await prisma.reportImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReportImages and only return the `id`
     * const reportImageWithIdOnly = await prisma.reportImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReportImage.
     * @param {ReportImageDeleteArgs} args - Arguments to delete one ReportImage.
     * @example
     * // Delete one ReportImage
     * const ReportImage = await prisma.reportImage.delete({
     *   where: {
     *     // ... filter to delete one ReportImage
     *   }
     * })
     * 
     */
    delete<T extends ReportImageDeleteArgs>(args: SelectSubset<T, ReportImageDeleteArgs<ExtArgs>>): Prisma__ReportImageClient<$Result.GetResult<Prisma.$ReportImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReportImage.
     * @param {ReportImageUpdateArgs} args - Arguments to update one ReportImage.
     * @example
     * // Update one ReportImage
     * const reportImage = await prisma.reportImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportImageUpdateArgs>(args: SelectSubset<T, ReportImageUpdateArgs<ExtArgs>>): Prisma__ReportImageClient<$Result.GetResult<Prisma.$ReportImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReportImages.
     * @param {ReportImageDeleteManyArgs} args - Arguments to filter ReportImages to delete.
     * @example
     * // Delete a few ReportImages
     * const { count } = await prisma.reportImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportImageDeleteManyArgs>(args?: SelectSubset<T, ReportImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReportImages
     * const reportImage = await prisma.reportImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportImageUpdateManyArgs>(args: SelectSubset<T, ReportImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportImages and returns the data updated in the database.
     * @param {ReportImageUpdateManyAndReturnArgs} args - Arguments to update many ReportImages.
     * @example
     * // Update many ReportImages
     * const reportImage = await prisma.reportImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReportImages and only return the `id`
     * const reportImageWithIdOnly = await prisma.reportImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReportImage.
     * @param {ReportImageUpsertArgs} args - Arguments to update or create a ReportImage.
     * @example
     * // Update or create a ReportImage
     * const reportImage = await prisma.reportImage.upsert({
     *   create: {
     *     // ... data to create a ReportImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReportImage we want to update
     *   }
     * })
     */
    upsert<T extends ReportImageUpsertArgs>(args: SelectSubset<T, ReportImageUpsertArgs<ExtArgs>>): Prisma__ReportImageClient<$Result.GetResult<Prisma.$ReportImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReportImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportImageCountArgs} args - Arguments to filter ReportImages to count.
     * @example
     * // Count the number of ReportImages
     * const count = await prisma.reportImage.count({
     *   where: {
     *     // ... the filter for the ReportImages we want to count
     *   }
     * })
    **/
    count<T extends ReportImageCountArgs>(
      args?: Subset<T, ReportImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReportImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportImageAggregateArgs>(args: Subset<T, ReportImageAggregateArgs>): Prisma.PrismaPromise<GetReportImageAggregateType<T>>

    /**
     * Group by ReportImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportImageGroupByArgs} args - Group by arguments.
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
      T extends ReportImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportImageGroupByArgs['orderBy'] }
        : { orderBy?: ReportImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReportImage model
   */
  readonly fields: ReportImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReportImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportDefaultArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReportImage model
   */
  interface ReportImageFieldRefs {
    readonly id: FieldRef<"ReportImage", 'String'>
    readonly reportId: FieldRef<"ReportImage", 'String'>
    readonly url: FieldRef<"ReportImage", 'String'>
    readonly createdAt: FieldRef<"ReportImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReportImage findUnique
   */
  export type ReportImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportImage
     */
    select?: ReportImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportImage
     */
    omit?: ReportImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportImageInclude<ExtArgs> | null
    /**
     * Filter, which ReportImage to fetch.
     */
    where: ReportImageWhereUniqueInput
  }

  /**
   * ReportImage findUniqueOrThrow
   */
  export type ReportImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportImage
     */
    select?: ReportImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportImage
     */
    omit?: ReportImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportImageInclude<ExtArgs> | null
    /**
     * Filter, which ReportImage to fetch.
     */
    where: ReportImageWhereUniqueInput
  }

  /**
   * ReportImage findFirst
   */
  export type ReportImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportImage
     */
    select?: ReportImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportImage
     */
    omit?: ReportImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportImageInclude<ExtArgs> | null
    /**
     * Filter, which ReportImage to fetch.
     */
    where?: ReportImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportImages to fetch.
     */
    orderBy?: ReportImageOrderByWithRelationInput | ReportImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportImages.
     */
    cursor?: ReportImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportImages.
     */
    distinct?: ReportImageScalarFieldEnum | ReportImageScalarFieldEnum[]
  }

  /**
   * ReportImage findFirstOrThrow
   */
  export type ReportImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportImage
     */
    select?: ReportImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportImage
     */
    omit?: ReportImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportImageInclude<ExtArgs> | null
    /**
     * Filter, which ReportImage to fetch.
     */
    where?: ReportImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportImages to fetch.
     */
    orderBy?: ReportImageOrderByWithRelationInput | ReportImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportImages.
     */
    cursor?: ReportImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportImages.
     */
    distinct?: ReportImageScalarFieldEnum | ReportImageScalarFieldEnum[]
  }

  /**
   * ReportImage findMany
   */
  export type ReportImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportImage
     */
    select?: ReportImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportImage
     */
    omit?: ReportImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportImageInclude<ExtArgs> | null
    /**
     * Filter, which ReportImages to fetch.
     */
    where?: ReportImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportImages to fetch.
     */
    orderBy?: ReportImageOrderByWithRelationInput | ReportImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReportImages.
     */
    cursor?: ReportImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportImages.
     */
    skip?: number
    distinct?: ReportImageScalarFieldEnum | ReportImageScalarFieldEnum[]
  }

  /**
   * ReportImage create
   */
  export type ReportImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportImage
     */
    select?: ReportImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportImage
     */
    omit?: ReportImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ReportImage.
     */
    data: XOR<ReportImageCreateInput, ReportImageUncheckedCreateInput>
  }

  /**
   * ReportImage createMany
   */
  export type ReportImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReportImages.
     */
    data: ReportImageCreateManyInput | ReportImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReportImage createManyAndReturn
   */
  export type ReportImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportImage
     */
    select?: ReportImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportImage
     */
    omit?: ReportImageOmit<ExtArgs> | null
    /**
     * The data used to create many ReportImages.
     */
    data: ReportImageCreateManyInput | ReportImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReportImage update
   */
  export type ReportImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportImage
     */
    select?: ReportImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportImage
     */
    omit?: ReportImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ReportImage.
     */
    data: XOR<ReportImageUpdateInput, ReportImageUncheckedUpdateInput>
    /**
     * Choose, which ReportImage to update.
     */
    where: ReportImageWhereUniqueInput
  }

  /**
   * ReportImage updateMany
   */
  export type ReportImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReportImages.
     */
    data: XOR<ReportImageUpdateManyMutationInput, ReportImageUncheckedUpdateManyInput>
    /**
     * Filter which ReportImages to update
     */
    where?: ReportImageWhereInput
    /**
     * Limit how many ReportImages to update.
     */
    limit?: number
  }

  /**
   * ReportImage updateManyAndReturn
   */
  export type ReportImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportImage
     */
    select?: ReportImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportImage
     */
    omit?: ReportImageOmit<ExtArgs> | null
    /**
     * The data used to update ReportImages.
     */
    data: XOR<ReportImageUpdateManyMutationInput, ReportImageUncheckedUpdateManyInput>
    /**
     * Filter which ReportImages to update
     */
    where?: ReportImageWhereInput
    /**
     * Limit how many ReportImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReportImage upsert
   */
  export type ReportImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportImage
     */
    select?: ReportImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportImage
     */
    omit?: ReportImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ReportImage to update in case it exists.
     */
    where: ReportImageWhereUniqueInput
    /**
     * In case the ReportImage found by the `where` argument doesn't exist, create a new ReportImage with this data.
     */
    create: XOR<ReportImageCreateInput, ReportImageUncheckedCreateInput>
    /**
     * In case the ReportImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportImageUpdateInput, ReportImageUncheckedUpdateInput>
  }

  /**
   * ReportImage delete
   */
  export type ReportImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportImage
     */
    select?: ReportImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportImage
     */
    omit?: ReportImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportImageInclude<ExtArgs> | null
    /**
     * Filter which ReportImage to delete.
     */
    where: ReportImageWhereUniqueInput
  }

  /**
   * ReportImage deleteMany
   */
  export type ReportImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportImages to delete
     */
    where?: ReportImageWhereInput
    /**
     * Limit how many ReportImages to delete.
     */
    limit?: number
  }

  /**
   * ReportImage without action
   */
  export type ReportImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportImage
     */
    select?: ReportImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportImage
     */
    omit?: ReportImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportImageInclude<ExtArgs> | null
  }


  /**
   * Model Measurement
   */

  export type AggregateMeasurement = {
    _count: MeasurementCountAggregateOutputType | null
    _min: MeasurementMinAggregateOutputType | null
    _max: MeasurementMaxAggregateOutputType | null
  }

  export type MeasurementMinAggregateOutputType = {
    id: string | null
    organ: string | null
    value: string | null
    reportId: string | null
  }

  export type MeasurementMaxAggregateOutputType = {
    id: string | null
    organ: string | null
    value: string | null
    reportId: string | null
  }

  export type MeasurementCountAggregateOutputType = {
    id: number
    organ: number
    value: number
    reportId: number
    _all: number
  }


  export type MeasurementMinAggregateInputType = {
    id?: true
    organ?: true
    value?: true
    reportId?: true
  }

  export type MeasurementMaxAggregateInputType = {
    id?: true
    organ?: true
    value?: true
    reportId?: true
  }

  export type MeasurementCountAggregateInputType = {
    id?: true
    organ?: true
    value?: true
    reportId?: true
    _all?: true
  }

  export type MeasurementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Measurement to aggregate.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Measurements
    **/
    _count?: true | MeasurementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeasurementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeasurementMaxAggregateInputType
  }

  export type GetMeasurementAggregateType<T extends MeasurementAggregateArgs> = {
        [P in keyof T & keyof AggregateMeasurement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeasurement[P]>
      : GetScalarType<T[P], AggregateMeasurement[P]>
  }




  export type MeasurementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeasurementWhereInput
    orderBy?: MeasurementOrderByWithAggregationInput | MeasurementOrderByWithAggregationInput[]
    by: MeasurementScalarFieldEnum[] | MeasurementScalarFieldEnum
    having?: MeasurementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeasurementCountAggregateInputType | true
    _min?: MeasurementMinAggregateInputType
    _max?: MeasurementMaxAggregateInputType
  }

  export type MeasurementGroupByOutputType = {
    id: string
    organ: string
    value: string
    reportId: string
    _count: MeasurementCountAggregateOutputType | null
    _min: MeasurementMinAggregateOutputType | null
    _max: MeasurementMaxAggregateOutputType | null
  }

  type GetMeasurementGroupByPayload<T extends MeasurementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeasurementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeasurementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeasurementGroupByOutputType[P]>
            : GetScalarType<T[P], MeasurementGroupByOutputType[P]>
        }
      >
    >


  export type MeasurementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organ?: boolean
    value?: boolean
    reportId?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type MeasurementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organ?: boolean
    value?: boolean
    reportId?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type MeasurementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organ?: boolean
    value?: boolean
    reportId?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["measurement"]>

  export type MeasurementSelectScalar = {
    id?: boolean
    organ?: boolean
    value?: boolean
    reportId?: boolean
  }

  export type MeasurementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organ" | "value" | "reportId", ExtArgs["result"]["measurement"]>
  export type MeasurementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }
  export type MeasurementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }
  export type MeasurementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }

  export type $MeasurementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Measurement"
    objects: {
      report: Prisma.$ReportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organ: string
      value: string
      reportId: string
    }, ExtArgs["result"]["measurement"]>
    composites: {}
  }

  type MeasurementGetPayload<S extends boolean | null | undefined | MeasurementDefaultArgs> = $Result.GetResult<Prisma.$MeasurementPayload, S>

  type MeasurementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeasurementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeasurementCountAggregateInputType | true
    }

  export interface MeasurementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Measurement'], meta: { name: 'Measurement' } }
    /**
     * Find zero or one Measurement that matches the filter.
     * @param {MeasurementFindUniqueArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeasurementFindUniqueArgs>(args: SelectSubset<T, MeasurementFindUniqueArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Measurement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeasurementFindUniqueOrThrowArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeasurementFindUniqueOrThrowArgs>(args: SelectSubset<T, MeasurementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Measurement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementFindFirstArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeasurementFindFirstArgs>(args?: SelectSubset<T, MeasurementFindFirstArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Measurement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementFindFirstOrThrowArgs} args - Arguments to find a Measurement
     * @example
     * // Get one Measurement
     * const measurement = await prisma.measurement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeasurementFindFirstOrThrowArgs>(args?: SelectSubset<T, MeasurementFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Measurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Measurements
     * const measurements = await prisma.measurement.findMany()
     * 
     * // Get first 10 Measurements
     * const measurements = await prisma.measurement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const measurementWithIdOnly = await prisma.measurement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeasurementFindManyArgs>(args?: SelectSubset<T, MeasurementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Measurement.
     * @param {MeasurementCreateArgs} args - Arguments to create a Measurement.
     * @example
     * // Create one Measurement
     * const Measurement = await prisma.measurement.create({
     *   data: {
     *     // ... data to create a Measurement
     *   }
     * })
     * 
     */
    create<T extends MeasurementCreateArgs>(args: SelectSubset<T, MeasurementCreateArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Measurements.
     * @param {MeasurementCreateManyArgs} args - Arguments to create many Measurements.
     * @example
     * // Create many Measurements
     * const measurement = await prisma.measurement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeasurementCreateManyArgs>(args?: SelectSubset<T, MeasurementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Measurements and returns the data saved in the database.
     * @param {MeasurementCreateManyAndReturnArgs} args - Arguments to create many Measurements.
     * @example
     * // Create many Measurements
     * const measurement = await prisma.measurement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Measurements and only return the `id`
     * const measurementWithIdOnly = await prisma.measurement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeasurementCreateManyAndReturnArgs>(args?: SelectSubset<T, MeasurementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Measurement.
     * @param {MeasurementDeleteArgs} args - Arguments to delete one Measurement.
     * @example
     * // Delete one Measurement
     * const Measurement = await prisma.measurement.delete({
     *   where: {
     *     // ... filter to delete one Measurement
     *   }
     * })
     * 
     */
    delete<T extends MeasurementDeleteArgs>(args: SelectSubset<T, MeasurementDeleteArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Measurement.
     * @param {MeasurementUpdateArgs} args - Arguments to update one Measurement.
     * @example
     * // Update one Measurement
     * const measurement = await prisma.measurement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeasurementUpdateArgs>(args: SelectSubset<T, MeasurementUpdateArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Measurements.
     * @param {MeasurementDeleteManyArgs} args - Arguments to filter Measurements to delete.
     * @example
     * // Delete a few Measurements
     * const { count } = await prisma.measurement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeasurementDeleteManyArgs>(args?: SelectSubset<T, MeasurementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Measurements
     * const measurement = await prisma.measurement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeasurementUpdateManyArgs>(args: SelectSubset<T, MeasurementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Measurements and returns the data updated in the database.
     * @param {MeasurementUpdateManyAndReturnArgs} args - Arguments to update many Measurements.
     * @example
     * // Update many Measurements
     * const measurement = await prisma.measurement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Measurements and only return the `id`
     * const measurementWithIdOnly = await prisma.measurement.updateManyAndReturn({
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
    updateManyAndReturn<T extends MeasurementUpdateManyAndReturnArgs>(args: SelectSubset<T, MeasurementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Measurement.
     * @param {MeasurementUpsertArgs} args - Arguments to update or create a Measurement.
     * @example
     * // Update or create a Measurement
     * const measurement = await prisma.measurement.upsert({
     *   create: {
     *     // ... data to create a Measurement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Measurement we want to update
     *   }
     * })
     */
    upsert<T extends MeasurementUpsertArgs>(args: SelectSubset<T, MeasurementUpsertArgs<ExtArgs>>): Prisma__MeasurementClient<$Result.GetResult<Prisma.$MeasurementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Measurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementCountArgs} args - Arguments to filter Measurements to count.
     * @example
     * // Count the number of Measurements
     * const count = await prisma.measurement.count({
     *   where: {
     *     // ... the filter for the Measurements we want to count
     *   }
     * })
    **/
    count<T extends MeasurementCountArgs>(
      args?: Subset<T, MeasurementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeasurementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Measurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeasurementAggregateArgs>(args: Subset<T, MeasurementAggregateArgs>): Prisma.PrismaPromise<GetMeasurementAggregateType<T>>

    /**
     * Group by Measurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeasurementGroupByArgs} args - Group by arguments.
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
      T extends MeasurementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeasurementGroupByArgs['orderBy'] }
        : { orderBy?: MeasurementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MeasurementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeasurementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Measurement model
   */
  readonly fields: MeasurementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Measurement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeasurementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportDefaultArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Measurement model
   */
  interface MeasurementFieldRefs {
    readonly id: FieldRef<"Measurement", 'String'>
    readonly organ: FieldRef<"Measurement", 'String'>
    readonly value: FieldRef<"Measurement", 'String'>
    readonly reportId: FieldRef<"Measurement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Measurement findUnique
   */
  export type MeasurementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where: MeasurementWhereUniqueInput
  }

  /**
   * Measurement findUniqueOrThrow
   */
  export type MeasurementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where: MeasurementWhereUniqueInput
  }

  /**
   * Measurement findFirst
   */
  export type MeasurementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Measurements.
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Measurements.
     */
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * Measurement findFirstOrThrow
   */
  export type MeasurementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurement to fetch.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Measurements.
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Measurements.
     */
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * Measurement findMany
   */
  export type MeasurementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter, which Measurements to fetch.
     */
    where?: MeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Measurements to fetch.
     */
    orderBy?: MeasurementOrderByWithRelationInput | MeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Measurements.
     */
    cursor?: MeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Measurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Measurements.
     */
    skip?: number
    distinct?: MeasurementScalarFieldEnum | MeasurementScalarFieldEnum[]
  }

  /**
   * Measurement create
   */
  export type MeasurementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * The data needed to create a Measurement.
     */
    data: XOR<MeasurementCreateInput, MeasurementUncheckedCreateInput>
  }

  /**
   * Measurement createMany
   */
  export type MeasurementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Measurements.
     */
    data: MeasurementCreateManyInput | MeasurementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Measurement createManyAndReturn
   */
  export type MeasurementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * The data used to create many Measurements.
     */
    data: MeasurementCreateManyInput | MeasurementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Measurement update
   */
  export type MeasurementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * The data needed to update a Measurement.
     */
    data: XOR<MeasurementUpdateInput, MeasurementUncheckedUpdateInput>
    /**
     * Choose, which Measurement to update.
     */
    where: MeasurementWhereUniqueInput
  }

  /**
   * Measurement updateMany
   */
  export type MeasurementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Measurements.
     */
    data: XOR<MeasurementUpdateManyMutationInput, MeasurementUncheckedUpdateManyInput>
    /**
     * Filter which Measurements to update
     */
    where?: MeasurementWhereInput
    /**
     * Limit how many Measurements to update.
     */
    limit?: number
  }

  /**
   * Measurement updateManyAndReturn
   */
  export type MeasurementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * The data used to update Measurements.
     */
    data: XOR<MeasurementUpdateManyMutationInput, MeasurementUncheckedUpdateManyInput>
    /**
     * Filter which Measurements to update
     */
    where?: MeasurementWhereInput
    /**
     * Limit how many Measurements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Measurement upsert
   */
  export type MeasurementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * The filter to search for the Measurement to update in case it exists.
     */
    where: MeasurementWhereUniqueInput
    /**
     * In case the Measurement found by the `where` argument doesn't exist, create a new Measurement with this data.
     */
    create: XOR<MeasurementCreateInput, MeasurementUncheckedCreateInput>
    /**
     * In case the Measurement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeasurementUpdateInput, MeasurementUncheckedUpdateInput>
  }

  /**
   * Measurement delete
   */
  export type MeasurementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
    /**
     * Filter which Measurement to delete.
     */
    where: MeasurementWhereUniqueInput
  }

  /**
   * Measurement deleteMany
   */
  export type MeasurementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Measurements to delete
     */
    where?: MeasurementWhereInput
    /**
     * Limit how many Measurements to delete.
     */
    limit?: number
  }

  /**
   * Measurement without action
   */
  export type MeasurementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Measurement
     */
    select?: MeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Measurement
     */
    omit?: MeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeasurementInclude<ExtArgs> | null
  }


  /**
   * Model TextTemplate
   */

  export type AggregateTextTemplate = {
    _count: TextTemplateCountAggregateOutputType | null
    _min: TextTemplateMinAggregateOutputType | null
    _max: TextTemplateMaxAggregateOutputType | null
  }

  export type TextTemplateMinAggregateOutputType = {
    id: string | null
    title: string | null
    categoryUltrasound: $Enums.UltrasoundCategory | null
    categoryXRay: $Enums.XRayCategory | null
    content: string | null
    createdAt: Date | null
  }

  export type TextTemplateMaxAggregateOutputType = {
    id: string | null
    title: string | null
    categoryUltrasound: $Enums.UltrasoundCategory | null
    categoryXRay: $Enums.XRayCategory | null
    content: string | null
    createdAt: Date | null
  }

  export type TextTemplateCountAggregateOutputType = {
    id: number
    title: number
    categoryUltrasound: number
    categoryXRay: number
    content: number
    createdAt: number
    _all: number
  }


  export type TextTemplateMinAggregateInputType = {
    id?: true
    title?: true
    categoryUltrasound?: true
    categoryXRay?: true
    content?: true
    createdAt?: true
  }

  export type TextTemplateMaxAggregateInputType = {
    id?: true
    title?: true
    categoryUltrasound?: true
    categoryXRay?: true
    content?: true
    createdAt?: true
  }

  export type TextTemplateCountAggregateInputType = {
    id?: true
    title?: true
    categoryUltrasound?: true
    categoryXRay?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type TextTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TextTemplate to aggregate.
     */
    where?: TextTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextTemplates to fetch.
     */
    orderBy?: TextTemplateOrderByWithRelationInput | TextTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TextTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TextTemplates
    **/
    _count?: true | TextTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TextTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TextTemplateMaxAggregateInputType
  }

  export type GetTextTemplateAggregateType<T extends TextTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTextTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTextTemplate[P]>
      : GetScalarType<T[P], AggregateTextTemplate[P]>
  }




  export type TextTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextTemplateWhereInput
    orderBy?: TextTemplateOrderByWithAggregationInput | TextTemplateOrderByWithAggregationInput[]
    by: TextTemplateScalarFieldEnum[] | TextTemplateScalarFieldEnum
    having?: TextTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TextTemplateCountAggregateInputType | true
    _min?: TextTemplateMinAggregateInputType
    _max?: TextTemplateMaxAggregateInputType
  }

  export type TextTemplateGroupByOutputType = {
    id: string
    title: string
    categoryUltrasound: $Enums.UltrasoundCategory | null
    categoryXRay: $Enums.XRayCategory | null
    content: string
    createdAt: Date
    _count: TextTemplateCountAggregateOutputType | null
    _min: TextTemplateMinAggregateOutputType | null
    _max: TextTemplateMaxAggregateOutputType | null
  }

  type GetTextTemplateGroupByPayload<T extends TextTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TextTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TextTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TextTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TextTemplateGroupByOutputType[P]>
        }
      >
    >


  export type TextTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    categoryUltrasound?: boolean
    categoryXRay?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["textTemplate"]>

  export type TextTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    categoryUltrasound?: boolean
    categoryXRay?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["textTemplate"]>

  export type TextTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    categoryUltrasound?: boolean
    categoryXRay?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["textTemplate"]>

  export type TextTemplateSelectScalar = {
    id?: boolean
    title?: boolean
    categoryUltrasound?: boolean
    categoryXRay?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type TextTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "categoryUltrasound" | "categoryXRay" | "content" | "createdAt", ExtArgs["result"]["textTemplate"]>

  export type $TextTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TextTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      categoryUltrasound: $Enums.UltrasoundCategory | null
      categoryXRay: $Enums.XRayCategory | null
      content: string
      createdAt: Date
    }, ExtArgs["result"]["textTemplate"]>
    composites: {}
  }

  type TextTemplateGetPayload<S extends boolean | null | undefined | TextTemplateDefaultArgs> = $Result.GetResult<Prisma.$TextTemplatePayload, S>

  type TextTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TextTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TextTemplateCountAggregateInputType | true
    }

  export interface TextTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TextTemplate'], meta: { name: 'TextTemplate' } }
    /**
     * Find zero or one TextTemplate that matches the filter.
     * @param {TextTemplateFindUniqueArgs} args - Arguments to find a TextTemplate
     * @example
     * // Get one TextTemplate
     * const textTemplate = await prisma.textTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TextTemplateFindUniqueArgs>(args: SelectSubset<T, TextTemplateFindUniqueArgs<ExtArgs>>): Prisma__TextTemplateClient<$Result.GetResult<Prisma.$TextTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TextTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TextTemplateFindUniqueOrThrowArgs} args - Arguments to find a TextTemplate
     * @example
     * // Get one TextTemplate
     * const textTemplate = await prisma.textTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TextTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TextTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TextTemplateClient<$Result.GetResult<Prisma.$TextTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TextTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextTemplateFindFirstArgs} args - Arguments to find a TextTemplate
     * @example
     * // Get one TextTemplate
     * const textTemplate = await prisma.textTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TextTemplateFindFirstArgs>(args?: SelectSubset<T, TextTemplateFindFirstArgs<ExtArgs>>): Prisma__TextTemplateClient<$Result.GetResult<Prisma.$TextTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TextTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextTemplateFindFirstOrThrowArgs} args - Arguments to find a TextTemplate
     * @example
     * // Get one TextTemplate
     * const textTemplate = await prisma.textTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TextTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TextTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TextTemplateClient<$Result.GetResult<Prisma.$TextTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TextTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TextTemplates
     * const textTemplates = await prisma.textTemplate.findMany()
     * 
     * // Get first 10 TextTemplates
     * const textTemplates = await prisma.textTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const textTemplateWithIdOnly = await prisma.textTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TextTemplateFindManyArgs>(args?: SelectSubset<T, TextTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TextTemplate.
     * @param {TextTemplateCreateArgs} args - Arguments to create a TextTemplate.
     * @example
     * // Create one TextTemplate
     * const TextTemplate = await prisma.textTemplate.create({
     *   data: {
     *     // ... data to create a TextTemplate
     *   }
     * })
     * 
     */
    create<T extends TextTemplateCreateArgs>(args: SelectSubset<T, TextTemplateCreateArgs<ExtArgs>>): Prisma__TextTemplateClient<$Result.GetResult<Prisma.$TextTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TextTemplates.
     * @param {TextTemplateCreateManyArgs} args - Arguments to create many TextTemplates.
     * @example
     * // Create many TextTemplates
     * const textTemplate = await prisma.textTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TextTemplateCreateManyArgs>(args?: SelectSubset<T, TextTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TextTemplates and returns the data saved in the database.
     * @param {TextTemplateCreateManyAndReturnArgs} args - Arguments to create many TextTemplates.
     * @example
     * // Create many TextTemplates
     * const textTemplate = await prisma.textTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TextTemplates and only return the `id`
     * const textTemplateWithIdOnly = await prisma.textTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TextTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TextTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TextTemplate.
     * @param {TextTemplateDeleteArgs} args - Arguments to delete one TextTemplate.
     * @example
     * // Delete one TextTemplate
     * const TextTemplate = await prisma.textTemplate.delete({
     *   where: {
     *     // ... filter to delete one TextTemplate
     *   }
     * })
     * 
     */
    delete<T extends TextTemplateDeleteArgs>(args: SelectSubset<T, TextTemplateDeleteArgs<ExtArgs>>): Prisma__TextTemplateClient<$Result.GetResult<Prisma.$TextTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TextTemplate.
     * @param {TextTemplateUpdateArgs} args - Arguments to update one TextTemplate.
     * @example
     * // Update one TextTemplate
     * const textTemplate = await prisma.textTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TextTemplateUpdateArgs>(args: SelectSubset<T, TextTemplateUpdateArgs<ExtArgs>>): Prisma__TextTemplateClient<$Result.GetResult<Prisma.$TextTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TextTemplates.
     * @param {TextTemplateDeleteManyArgs} args - Arguments to filter TextTemplates to delete.
     * @example
     * // Delete a few TextTemplates
     * const { count } = await prisma.textTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TextTemplateDeleteManyArgs>(args?: SelectSubset<T, TextTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TextTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TextTemplates
     * const textTemplate = await prisma.textTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TextTemplateUpdateManyArgs>(args: SelectSubset<T, TextTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TextTemplates and returns the data updated in the database.
     * @param {TextTemplateUpdateManyAndReturnArgs} args - Arguments to update many TextTemplates.
     * @example
     * // Update many TextTemplates
     * const textTemplate = await prisma.textTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TextTemplates and only return the `id`
     * const textTemplateWithIdOnly = await prisma.textTemplate.updateManyAndReturn({
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
    updateManyAndReturn<T extends TextTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TextTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TextTemplate.
     * @param {TextTemplateUpsertArgs} args - Arguments to update or create a TextTemplate.
     * @example
     * // Update or create a TextTemplate
     * const textTemplate = await prisma.textTemplate.upsert({
     *   create: {
     *     // ... data to create a TextTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TextTemplate we want to update
     *   }
     * })
     */
    upsert<T extends TextTemplateUpsertArgs>(args: SelectSubset<T, TextTemplateUpsertArgs<ExtArgs>>): Prisma__TextTemplateClient<$Result.GetResult<Prisma.$TextTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TextTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextTemplateCountArgs} args - Arguments to filter TextTemplates to count.
     * @example
     * // Count the number of TextTemplates
     * const count = await prisma.textTemplate.count({
     *   where: {
     *     // ... the filter for the TextTemplates we want to count
     *   }
     * })
    **/
    count<T extends TextTemplateCountArgs>(
      args?: Subset<T, TextTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TextTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TextTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TextTemplateAggregateArgs>(args: Subset<T, TextTemplateAggregateArgs>): Prisma.PrismaPromise<GetTextTemplateAggregateType<T>>

    /**
     * Group by TextTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextTemplateGroupByArgs} args - Group by arguments.
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
      T extends TextTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TextTemplateGroupByArgs['orderBy'] }
        : { orderBy?: TextTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TextTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTextTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TextTemplate model
   */
  readonly fields: TextTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TextTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TextTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TextTemplate model
   */
  interface TextTemplateFieldRefs {
    readonly id: FieldRef<"TextTemplate", 'String'>
    readonly title: FieldRef<"TextTemplate", 'String'>
    readonly categoryUltrasound: FieldRef<"TextTemplate", 'UltrasoundCategory'>
    readonly categoryXRay: FieldRef<"TextTemplate", 'XRayCategory'>
    readonly content: FieldRef<"TextTemplate", 'String'>
    readonly createdAt: FieldRef<"TextTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TextTemplate findUnique
   */
  export type TextTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextTemplate
     */
    select?: TextTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextTemplate
     */
    omit?: TextTemplateOmit<ExtArgs> | null
    /**
     * Filter, which TextTemplate to fetch.
     */
    where: TextTemplateWhereUniqueInput
  }

  /**
   * TextTemplate findUniqueOrThrow
   */
  export type TextTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextTemplate
     */
    select?: TextTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextTemplate
     */
    omit?: TextTemplateOmit<ExtArgs> | null
    /**
     * Filter, which TextTemplate to fetch.
     */
    where: TextTemplateWhereUniqueInput
  }

  /**
   * TextTemplate findFirst
   */
  export type TextTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextTemplate
     */
    select?: TextTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextTemplate
     */
    omit?: TextTemplateOmit<ExtArgs> | null
    /**
     * Filter, which TextTemplate to fetch.
     */
    where?: TextTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextTemplates to fetch.
     */
    orderBy?: TextTemplateOrderByWithRelationInput | TextTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TextTemplates.
     */
    cursor?: TextTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TextTemplates.
     */
    distinct?: TextTemplateScalarFieldEnum | TextTemplateScalarFieldEnum[]
  }

  /**
   * TextTemplate findFirstOrThrow
   */
  export type TextTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextTemplate
     */
    select?: TextTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextTemplate
     */
    omit?: TextTemplateOmit<ExtArgs> | null
    /**
     * Filter, which TextTemplate to fetch.
     */
    where?: TextTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextTemplates to fetch.
     */
    orderBy?: TextTemplateOrderByWithRelationInput | TextTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TextTemplates.
     */
    cursor?: TextTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TextTemplates.
     */
    distinct?: TextTemplateScalarFieldEnum | TextTemplateScalarFieldEnum[]
  }

  /**
   * TextTemplate findMany
   */
  export type TextTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextTemplate
     */
    select?: TextTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextTemplate
     */
    omit?: TextTemplateOmit<ExtArgs> | null
    /**
     * Filter, which TextTemplates to fetch.
     */
    where?: TextTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextTemplates to fetch.
     */
    orderBy?: TextTemplateOrderByWithRelationInput | TextTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TextTemplates.
     */
    cursor?: TextTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextTemplates.
     */
    skip?: number
    distinct?: TextTemplateScalarFieldEnum | TextTemplateScalarFieldEnum[]
  }

  /**
   * TextTemplate create
   */
  export type TextTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextTemplate
     */
    select?: TextTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextTemplate
     */
    omit?: TextTemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a TextTemplate.
     */
    data: XOR<TextTemplateCreateInput, TextTemplateUncheckedCreateInput>
  }

  /**
   * TextTemplate createMany
   */
  export type TextTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TextTemplates.
     */
    data: TextTemplateCreateManyInput | TextTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TextTemplate createManyAndReturn
   */
  export type TextTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextTemplate
     */
    select?: TextTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TextTemplate
     */
    omit?: TextTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many TextTemplates.
     */
    data: TextTemplateCreateManyInput | TextTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TextTemplate update
   */
  export type TextTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextTemplate
     */
    select?: TextTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextTemplate
     */
    omit?: TextTemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a TextTemplate.
     */
    data: XOR<TextTemplateUpdateInput, TextTemplateUncheckedUpdateInput>
    /**
     * Choose, which TextTemplate to update.
     */
    where: TextTemplateWhereUniqueInput
  }

  /**
   * TextTemplate updateMany
   */
  export type TextTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TextTemplates.
     */
    data: XOR<TextTemplateUpdateManyMutationInput, TextTemplateUncheckedUpdateManyInput>
    /**
     * Filter which TextTemplates to update
     */
    where?: TextTemplateWhereInput
    /**
     * Limit how many TextTemplates to update.
     */
    limit?: number
  }

  /**
   * TextTemplate updateManyAndReturn
   */
  export type TextTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextTemplate
     */
    select?: TextTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TextTemplate
     */
    omit?: TextTemplateOmit<ExtArgs> | null
    /**
     * The data used to update TextTemplates.
     */
    data: XOR<TextTemplateUpdateManyMutationInput, TextTemplateUncheckedUpdateManyInput>
    /**
     * Filter which TextTemplates to update
     */
    where?: TextTemplateWhereInput
    /**
     * Limit how many TextTemplates to update.
     */
    limit?: number
  }

  /**
   * TextTemplate upsert
   */
  export type TextTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextTemplate
     */
    select?: TextTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextTemplate
     */
    omit?: TextTemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the TextTemplate to update in case it exists.
     */
    where: TextTemplateWhereUniqueInput
    /**
     * In case the TextTemplate found by the `where` argument doesn't exist, create a new TextTemplate with this data.
     */
    create: XOR<TextTemplateCreateInput, TextTemplateUncheckedCreateInput>
    /**
     * In case the TextTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TextTemplateUpdateInput, TextTemplateUncheckedUpdateInput>
  }

  /**
   * TextTemplate delete
   */
  export type TextTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextTemplate
     */
    select?: TextTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextTemplate
     */
    omit?: TextTemplateOmit<ExtArgs> | null
    /**
     * Filter which TextTemplate to delete.
     */
    where: TextTemplateWhereUniqueInput
  }

  /**
   * TextTemplate deleteMany
   */
  export type TextTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TextTemplates to delete
     */
    where?: TextTemplateWhereInput
    /**
     * Limit how many TextTemplates to delete.
     */
    limit?: number
  }

  /**
   * TextTemplate without action
   */
  export type TextTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextTemplate
     */
    select?: TextTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextTemplate
     */
    omit?: TextTemplateOmit<ExtArgs> | null
  }


  /**
   * Model ConclusionTemplate
   */

  export type AggregateConclusionTemplate = {
    _count: ConclusionTemplateCountAggregateOutputType | null
    _min: ConclusionTemplateMinAggregateOutputType | null
    _max: ConclusionTemplateMaxAggregateOutputType | null
  }

  export type ConclusionTemplateMinAggregateOutputType = {
    id: string | null
    title: string | null
    categoryUltrasound: $Enums.UltrasoundCategory | null
    categoryXRay: $Enums.XRayCategory | null
    content: string | null
    createdAt: Date | null
  }

  export type ConclusionTemplateMaxAggregateOutputType = {
    id: string | null
    title: string | null
    categoryUltrasound: $Enums.UltrasoundCategory | null
    categoryXRay: $Enums.XRayCategory | null
    content: string | null
    createdAt: Date | null
  }

  export type ConclusionTemplateCountAggregateOutputType = {
    id: number
    title: number
    categoryUltrasound: number
    categoryXRay: number
    content: number
    createdAt: number
    _all: number
  }


  export type ConclusionTemplateMinAggregateInputType = {
    id?: true
    title?: true
    categoryUltrasound?: true
    categoryXRay?: true
    content?: true
    createdAt?: true
  }

  export type ConclusionTemplateMaxAggregateInputType = {
    id?: true
    title?: true
    categoryUltrasound?: true
    categoryXRay?: true
    content?: true
    createdAt?: true
  }

  export type ConclusionTemplateCountAggregateInputType = {
    id?: true
    title?: true
    categoryUltrasound?: true
    categoryXRay?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ConclusionTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConclusionTemplate to aggregate.
     */
    where?: ConclusionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConclusionTemplates to fetch.
     */
    orderBy?: ConclusionTemplateOrderByWithRelationInput | ConclusionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConclusionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConclusionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConclusionTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConclusionTemplates
    **/
    _count?: true | ConclusionTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConclusionTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConclusionTemplateMaxAggregateInputType
  }

  export type GetConclusionTemplateAggregateType<T extends ConclusionTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateConclusionTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConclusionTemplate[P]>
      : GetScalarType<T[P], AggregateConclusionTemplate[P]>
  }




  export type ConclusionTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConclusionTemplateWhereInput
    orderBy?: ConclusionTemplateOrderByWithAggregationInput | ConclusionTemplateOrderByWithAggregationInput[]
    by: ConclusionTemplateScalarFieldEnum[] | ConclusionTemplateScalarFieldEnum
    having?: ConclusionTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConclusionTemplateCountAggregateInputType | true
    _min?: ConclusionTemplateMinAggregateInputType
    _max?: ConclusionTemplateMaxAggregateInputType
  }

  export type ConclusionTemplateGroupByOutputType = {
    id: string
    title: string
    categoryUltrasound: $Enums.UltrasoundCategory | null
    categoryXRay: $Enums.XRayCategory | null
    content: string
    createdAt: Date
    _count: ConclusionTemplateCountAggregateOutputType | null
    _min: ConclusionTemplateMinAggregateOutputType | null
    _max: ConclusionTemplateMaxAggregateOutputType | null
  }

  type GetConclusionTemplateGroupByPayload<T extends ConclusionTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConclusionTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConclusionTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConclusionTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], ConclusionTemplateGroupByOutputType[P]>
        }
      >
    >


  export type ConclusionTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    categoryUltrasound?: boolean
    categoryXRay?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["conclusionTemplate"]>

  export type ConclusionTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    categoryUltrasound?: boolean
    categoryXRay?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["conclusionTemplate"]>

  export type ConclusionTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    categoryUltrasound?: boolean
    categoryXRay?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["conclusionTemplate"]>

  export type ConclusionTemplateSelectScalar = {
    id?: boolean
    title?: boolean
    categoryUltrasound?: boolean
    categoryXRay?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ConclusionTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "categoryUltrasound" | "categoryXRay" | "content" | "createdAt", ExtArgs["result"]["conclusionTemplate"]>

  export type $ConclusionTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConclusionTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      categoryUltrasound: $Enums.UltrasoundCategory | null
      categoryXRay: $Enums.XRayCategory | null
      content: string
      createdAt: Date
    }, ExtArgs["result"]["conclusionTemplate"]>
    composites: {}
  }

  type ConclusionTemplateGetPayload<S extends boolean | null | undefined | ConclusionTemplateDefaultArgs> = $Result.GetResult<Prisma.$ConclusionTemplatePayload, S>

  type ConclusionTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConclusionTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConclusionTemplateCountAggregateInputType | true
    }

  export interface ConclusionTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConclusionTemplate'], meta: { name: 'ConclusionTemplate' } }
    /**
     * Find zero or one ConclusionTemplate that matches the filter.
     * @param {ConclusionTemplateFindUniqueArgs} args - Arguments to find a ConclusionTemplate
     * @example
     * // Get one ConclusionTemplate
     * const conclusionTemplate = await prisma.conclusionTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConclusionTemplateFindUniqueArgs>(args: SelectSubset<T, ConclusionTemplateFindUniqueArgs<ExtArgs>>): Prisma__ConclusionTemplateClient<$Result.GetResult<Prisma.$ConclusionTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConclusionTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConclusionTemplateFindUniqueOrThrowArgs} args - Arguments to find a ConclusionTemplate
     * @example
     * // Get one ConclusionTemplate
     * const conclusionTemplate = await prisma.conclusionTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConclusionTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, ConclusionTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConclusionTemplateClient<$Result.GetResult<Prisma.$ConclusionTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConclusionTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConclusionTemplateFindFirstArgs} args - Arguments to find a ConclusionTemplate
     * @example
     * // Get one ConclusionTemplate
     * const conclusionTemplate = await prisma.conclusionTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConclusionTemplateFindFirstArgs>(args?: SelectSubset<T, ConclusionTemplateFindFirstArgs<ExtArgs>>): Prisma__ConclusionTemplateClient<$Result.GetResult<Prisma.$ConclusionTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConclusionTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConclusionTemplateFindFirstOrThrowArgs} args - Arguments to find a ConclusionTemplate
     * @example
     * // Get one ConclusionTemplate
     * const conclusionTemplate = await prisma.conclusionTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConclusionTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, ConclusionTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConclusionTemplateClient<$Result.GetResult<Prisma.$ConclusionTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConclusionTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConclusionTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConclusionTemplates
     * const conclusionTemplates = await prisma.conclusionTemplate.findMany()
     * 
     * // Get first 10 ConclusionTemplates
     * const conclusionTemplates = await prisma.conclusionTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conclusionTemplateWithIdOnly = await prisma.conclusionTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConclusionTemplateFindManyArgs>(args?: SelectSubset<T, ConclusionTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConclusionTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConclusionTemplate.
     * @param {ConclusionTemplateCreateArgs} args - Arguments to create a ConclusionTemplate.
     * @example
     * // Create one ConclusionTemplate
     * const ConclusionTemplate = await prisma.conclusionTemplate.create({
     *   data: {
     *     // ... data to create a ConclusionTemplate
     *   }
     * })
     * 
     */
    create<T extends ConclusionTemplateCreateArgs>(args: SelectSubset<T, ConclusionTemplateCreateArgs<ExtArgs>>): Prisma__ConclusionTemplateClient<$Result.GetResult<Prisma.$ConclusionTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConclusionTemplates.
     * @param {ConclusionTemplateCreateManyArgs} args - Arguments to create many ConclusionTemplates.
     * @example
     * // Create many ConclusionTemplates
     * const conclusionTemplate = await prisma.conclusionTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConclusionTemplateCreateManyArgs>(args?: SelectSubset<T, ConclusionTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConclusionTemplates and returns the data saved in the database.
     * @param {ConclusionTemplateCreateManyAndReturnArgs} args - Arguments to create many ConclusionTemplates.
     * @example
     * // Create many ConclusionTemplates
     * const conclusionTemplate = await prisma.conclusionTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConclusionTemplates and only return the `id`
     * const conclusionTemplateWithIdOnly = await prisma.conclusionTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConclusionTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, ConclusionTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConclusionTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConclusionTemplate.
     * @param {ConclusionTemplateDeleteArgs} args - Arguments to delete one ConclusionTemplate.
     * @example
     * // Delete one ConclusionTemplate
     * const ConclusionTemplate = await prisma.conclusionTemplate.delete({
     *   where: {
     *     // ... filter to delete one ConclusionTemplate
     *   }
     * })
     * 
     */
    delete<T extends ConclusionTemplateDeleteArgs>(args: SelectSubset<T, ConclusionTemplateDeleteArgs<ExtArgs>>): Prisma__ConclusionTemplateClient<$Result.GetResult<Prisma.$ConclusionTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConclusionTemplate.
     * @param {ConclusionTemplateUpdateArgs} args - Arguments to update one ConclusionTemplate.
     * @example
     * // Update one ConclusionTemplate
     * const conclusionTemplate = await prisma.conclusionTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConclusionTemplateUpdateArgs>(args: SelectSubset<T, ConclusionTemplateUpdateArgs<ExtArgs>>): Prisma__ConclusionTemplateClient<$Result.GetResult<Prisma.$ConclusionTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConclusionTemplates.
     * @param {ConclusionTemplateDeleteManyArgs} args - Arguments to filter ConclusionTemplates to delete.
     * @example
     * // Delete a few ConclusionTemplates
     * const { count } = await prisma.conclusionTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConclusionTemplateDeleteManyArgs>(args?: SelectSubset<T, ConclusionTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConclusionTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConclusionTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConclusionTemplates
     * const conclusionTemplate = await prisma.conclusionTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConclusionTemplateUpdateManyArgs>(args: SelectSubset<T, ConclusionTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConclusionTemplates and returns the data updated in the database.
     * @param {ConclusionTemplateUpdateManyAndReturnArgs} args - Arguments to update many ConclusionTemplates.
     * @example
     * // Update many ConclusionTemplates
     * const conclusionTemplate = await prisma.conclusionTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConclusionTemplates and only return the `id`
     * const conclusionTemplateWithIdOnly = await prisma.conclusionTemplate.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConclusionTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, ConclusionTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConclusionTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConclusionTemplate.
     * @param {ConclusionTemplateUpsertArgs} args - Arguments to update or create a ConclusionTemplate.
     * @example
     * // Update or create a ConclusionTemplate
     * const conclusionTemplate = await prisma.conclusionTemplate.upsert({
     *   create: {
     *     // ... data to create a ConclusionTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConclusionTemplate we want to update
     *   }
     * })
     */
    upsert<T extends ConclusionTemplateUpsertArgs>(args: SelectSubset<T, ConclusionTemplateUpsertArgs<ExtArgs>>): Prisma__ConclusionTemplateClient<$Result.GetResult<Prisma.$ConclusionTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConclusionTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConclusionTemplateCountArgs} args - Arguments to filter ConclusionTemplates to count.
     * @example
     * // Count the number of ConclusionTemplates
     * const count = await prisma.conclusionTemplate.count({
     *   where: {
     *     // ... the filter for the ConclusionTemplates we want to count
     *   }
     * })
    **/
    count<T extends ConclusionTemplateCountArgs>(
      args?: Subset<T, ConclusionTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConclusionTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConclusionTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConclusionTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConclusionTemplateAggregateArgs>(args: Subset<T, ConclusionTemplateAggregateArgs>): Prisma.PrismaPromise<GetConclusionTemplateAggregateType<T>>

    /**
     * Group by ConclusionTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConclusionTemplateGroupByArgs} args - Group by arguments.
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
      T extends ConclusionTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConclusionTemplateGroupByArgs['orderBy'] }
        : { orderBy?: ConclusionTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConclusionTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConclusionTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConclusionTemplate model
   */
  readonly fields: ConclusionTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConclusionTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConclusionTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ConclusionTemplate model
   */
  interface ConclusionTemplateFieldRefs {
    readonly id: FieldRef<"ConclusionTemplate", 'String'>
    readonly title: FieldRef<"ConclusionTemplate", 'String'>
    readonly categoryUltrasound: FieldRef<"ConclusionTemplate", 'UltrasoundCategory'>
    readonly categoryXRay: FieldRef<"ConclusionTemplate", 'XRayCategory'>
    readonly content: FieldRef<"ConclusionTemplate", 'String'>
    readonly createdAt: FieldRef<"ConclusionTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConclusionTemplate findUnique
   */
  export type ConclusionTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConclusionTemplate
     */
    select?: ConclusionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConclusionTemplate
     */
    omit?: ConclusionTemplateOmit<ExtArgs> | null
    /**
     * Filter, which ConclusionTemplate to fetch.
     */
    where: ConclusionTemplateWhereUniqueInput
  }

  /**
   * ConclusionTemplate findUniqueOrThrow
   */
  export type ConclusionTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConclusionTemplate
     */
    select?: ConclusionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConclusionTemplate
     */
    omit?: ConclusionTemplateOmit<ExtArgs> | null
    /**
     * Filter, which ConclusionTemplate to fetch.
     */
    where: ConclusionTemplateWhereUniqueInput
  }

  /**
   * ConclusionTemplate findFirst
   */
  export type ConclusionTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConclusionTemplate
     */
    select?: ConclusionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConclusionTemplate
     */
    omit?: ConclusionTemplateOmit<ExtArgs> | null
    /**
     * Filter, which ConclusionTemplate to fetch.
     */
    where?: ConclusionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConclusionTemplates to fetch.
     */
    orderBy?: ConclusionTemplateOrderByWithRelationInput | ConclusionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConclusionTemplates.
     */
    cursor?: ConclusionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConclusionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConclusionTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConclusionTemplates.
     */
    distinct?: ConclusionTemplateScalarFieldEnum | ConclusionTemplateScalarFieldEnum[]
  }

  /**
   * ConclusionTemplate findFirstOrThrow
   */
  export type ConclusionTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConclusionTemplate
     */
    select?: ConclusionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConclusionTemplate
     */
    omit?: ConclusionTemplateOmit<ExtArgs> | null
    /**
     * Filter, which ConclusionTemplate to fetch.
     */
    where?: ConclusionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConclusionTemplates to fetch.
     */
    orderBy?: ConclusionTemplateOrderByWithRelationInput | ConclusionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConclusionTemplates.
     */
    cursor?: ConclusionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConclusionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConclusionTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConclusionTemplates.
     */
    distinct?: ConclusionTemplateScalarFieldEnum | ConclusionTemplateScalarFieldEnum[]
  }

  /**
   * ConclusionTemplate findMany
   */
  export type ConclusionTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConclusionTemplate
     */
    select?: ConclusionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConclusionTemplate
     */
    omit?: ConclusionTemplateOmit<ExtArgs> | null
    /**
     * Filter, which ConclusionTemplates to fetch.
     */
    where?: ConclusionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConclusionTemplates to fetch.
     */
    orderBy?: ConclusionTemplateOrderByWithRelationInput | ConclusionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConclusionTemplates.
     */
    cursor?: ConclusionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConclusionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConclusionTemplates.
     */
    skip?: number
    distinct?: ConclusionTemplateScalarFieldEnum | ConclusionTemplateScalarFieldEnum[]
  }

  /**
   * ConclusionTemplate create
   */
  export type ConclusionTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConclusionTemplate
     */
    select?: ConclusionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConclusionTemplate
     */
    omit?: ConclusionTemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a ConclusionTemplate.
     */
    data: XOR<ConclusionTemplateCreateInput, ConclusionTemplateUncheckedCreateInput>
  }

  /**
   * ConclusionTemplate createMany
   */
  export type ConclusionTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConclusionTemplates.
     */
    data: ConclusionTemplateCreateManyInput | ConclusionTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConclusionTemplate createManyAndReturn
   */
  export type ConclusionTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConclusionTemplate
     */
    select?: ConclusionTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConclusionTemplate
     */
    omit?: ConclusionTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many ConclusionTemplates.
     */
    data: ConclusionTemplateCreateManyInput | ConclusionTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConclusionTemplate update
   */
  export type ConclusionTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConclusionTemplate
     */
    select?: ConclusionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConclusionTemplate
     */
    omit?: ConclusionTemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a ConclusionTemplate.
     */
    data: XOR<ConclusionTemplateUpdateInput, ConclusionTemplateUncheckedUpdateInput>
    /**
     * Choose, which ConclusionTemplate to update.
     */
    where: ConclusionTemplateWhereUniqueInput
  }

  /**
   * ConclusionTemplate updateMany
   */
  export type ConclusionTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConclusionTemplates.
     */
    data: XOR<ConclusionTemplateUpdateManyMutationInput, ConclusionTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ConclusionTemplates to update
     */
    where?: ConclusionTemplateWhereInput
    /**
     * Limit how many ConclusionTemplates to update.
     */
    limit?: number
  }

  /**
   * ConclusionTemplate updateManyAndReturn
   */
  export type ConclusionTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConclusionTemplate
     */
    select?: ConclusionTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConclusionTemplate
     */
    omit?: ConclusionTemplateOmit<ExtArgs> | null
    /**
     * The data used to update ConclusionTemplates.
     */
    data: XOR<ConclusionTemplateUpdateManyMutationInput, ConclusionTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ConclusionTemplates to update
     */
    where?: ConclusionTemplateWhereInput
    /**
     * Limit how many ConclusionTemplates to update.
     */
    limit?: number
  }

  /**
   * ConclusionTemplate upsert
   */
  export type ConclusionTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConclusionTemplate
     */
    select?: ConclusionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConclusionTemplate
     */
    omit?: ConclusionTemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the ConclusionTemplate to update in case it exists.
     */
    where: ConclusionTemplateWhereUniqueInput
    /**
     * In case the ConclusionTemplate found by the `where` argument doesn't exist, create a new ConclusionTemplate with this data.
     */
    create: XOR<ConclusionTemplateCreateInput, ConclusionTemplateUncheckedCreateInput>
    /**
     * In case the ConclusionTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConclusionTemplateUpdateInput, ConclusionTemplateUncheckedUpdateInput>
  }

  /**
   * ConclusionTemplate delete
   */
  export type ConclusionTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConclusionTemplate
     */
    select?: ConclusionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConclusionTemplate
     */
    omit?: ConclusionTemplateOmit<ExtArgs> | null
    /**
     * Filter which ConclusionTemplate to delete.
     */
    where: ConclusionTemplateWhereUniqueInput
  }

  /**
   * ConclusionTemplate deleteMany
   */
  export type ConclusionTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConclusionTemplates to delete
     */
    where?: ConclusionTemplateWhereInput
    /**
     * Limit how many ConclusionTemplates to delete.
     */
    limit?: number
  }

  /**
   * ConclusionTemplate without action
   */
  export type ConclusionTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConclusionTemplate
     */
    select?: ConclusionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConclusionTemplate
     */
    omit?: ConclusionTemplateOmit<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    reportId: string | null
    amount: number | null
    method: $Enums.PaymentMethod | null
    source: $Enums.PaymentSource | null
    sourceId: string | null
    date: Date | null
    status: $Enums.TransactionStatus | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    reportId: string | null
    amount: number | null
    method: $Enums.PaymentMethod | null
    source: $Enums.PaymentSource | null
    sourceId: string | null
    date: Date | null
    status: $Enums.TransactionStatus | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    reportId: number
    amount: number
    method: number
    source: number
    sourceId: number
    date: number
    status: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    reportId?: true
    amount?: true
    method?: true
    source?: true
    sourceId?: true
    date?: true
    status?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    reportId?: true
    amount?: true
    method?: true
    source?: true
    sourceId?: true
    date?: true
    status?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    reportId?: true
    amount?: true
    method?: true
    source?: true
    sourceId?: true
    date?: true
    status?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    reportId: string
    amount: number
    method: $Enums.PaymentMethod
    source: $Enums.PaymentSource
    sourceId: string
    date: Date
    status: $Enums.TransactionStatus
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    amount?: boolean
    method?: boolean
    source?: boolean
    sourceId?: boolean
    date?: boolean
    status?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
    clinic?: boolean | Payment$clinicArgs<ExtArgs>
    patient?: boolean | Payment$patientArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    amount?: boolean
    method?: boolean
    source?: boolean
    sourceId?: boolean
    date?: boolean
    status?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
    clinic?: boolean | Payment$clinicArgs<ExtArgs>
    patient?: boolean | Payment$patientArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    amount?: boolean
    method?: boolean
    source?: boolean
    sourceId?: boolean
    date?: boolean
    status?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
    clinic?: boolean | Payment$clinicArgs<ExtArgs>
    patient?: boolean | Payment$patientArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    reportId?: boolean
    amount?: boolean
    method?: boolean
    source?: boolean
    sourceId?: boolean
    date?: boolean
    status?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportId" | "amount" | "method" | "source" | "sourceId" | "date" | "status", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
    clinic?: boolean | Payment$clinicArgs<ExtArgs>
    patient?: boolean | Payment$patientArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
    clinic?: boolean | Payment$clinicArgs<ExtArgs>
    patient?: boolean | Payment$patientArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
    clinic?: boolean | Payment$clinicArgs<ExtArgs>
    patient?: boolean | Payment$patientArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      report: Prisma.$ReportPayload<ExtArgs>
      clinic: Prisma.$ClinicPayload<ExtArgs> | null
      patient: Prisma.$PatientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reportId: string
      amount: number
      method: $Enums.PaymentMethod
      source: $Enums.PaymentSource
      sourceId: string
      date: Date
      status: $Enums.TransactionStatus
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportDefaultArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clinic<T extends Payment$clinicArgs<ExtArgs> = {}>(args?: Subset<T, Payment$clinicArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patient<T extends Payment$patientArgs<ExtArgs> = {}>(args?: Subset<T, Payment$patientArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly reportId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly source: FieldRef<"Payment", 'PaymentSource'>
    readonly sourceId: FieldRef<"Payment", 'String'>
    readonly date: FieldRef<"Payment", 'DateTime'>
    readonly status: FieldRef<"Payment", 'TransactionStatus'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.clinic
   */
  export type Payment$clinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    where?: ClinicWhereInput
  }

  /**
   * Payment.patient
   */
  export type Payment$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model FinancialTransaction
   */

  export type AggregateFinancialTransaction = {
    _count: FinancialTransactionCountAggregateOutputType | null
    _avg: FinancialTransactionAvgAggregateOutputType | null
    _sum: FinancialTransactionSumAggregateOutputType | null
    _min: FinancialTransactionMinAggregateOutputType | null
    _max: FinancialTransactionMaxAggregateOutputType | null
  }

  export type FinancialTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type FinancialTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type FinancialTransactionMinAggregateOutputType = {
    id: string | null
    type: $Enums.TransactionType | null
    category: string | null
    description: string | null
    amount: number | null
    date: Date | null
    relatedReportId: string | null
    relatedClinicId: string | null
    relatedPatientId: string | null
    paymentMethod: string | null
    status: $Enums.TransactionStatus | null
  }

  export type FinancialTransactionMaxAggregateOutputType = {
    id: string | null
    type: $Enums.TransactionType | null
    category: string | null
    description: string | null
    amount: number | null
    date: Date | null
    relatedReportId: string | null
    relatedClinicId: string | null
    relatedPatientId: string | null
    paymentMethod: string | null
    status: $Enums.TransactionStatus | null
  }

  export type FinancialTransactionCountAggregateOutputType = {
    id: number
    type: number
    category: number
    description: number
    amount: number
    date: number
    relatedReportId: number
    relatedClinicId: number
    relatedPatientId: number
    paymentMethod: number
    status: number
    _all: number
  }


  export type FinancialTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type FinancialTransactionSumAggregateInputType = {
    amount?: true
  }

  export type FinancialTransactionMinAggregateInputType = {
    id?: true
    type?: true
    category?: true
    description?: true
    amount?: true
    date?: true
    relatedReportId?: true
    relatedClinicId?: true
    relatedPatientId?: true
    paymentMethod?: true
    status?: true
  }

  export type FinancialTransactionMaxAggregateInputType = {
    id?: true
    type?: true
    category?: true
    description?: true
    amount?: true
    date?: true
    relatedReportId?: true
    relatedClinicId?: true
    relatedPatientId?: true
    paymentMethod?: true
    status?: true
  }

  export type FinancialTransactionCountAggregateInputType = {
    id?: true
    type?: true
    category?: true
    description?: true
    amount?: true
    date?: true
    relatedReportId?: true
    relatedClinicId?: true
    relatedPatientId?: true
    paymentMethod?: true
    status?: true
    _all?: true
  }

  export type FinancialTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialTransaction to aggregate.
     */
    where?: FinancialTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialTransactions to fetch.
     */
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialTransactions
    **/
    _count?: true | FinancialTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancialTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancialTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialTransactionMaxAggregateInputType
  }

  export type GetFinancialTransactionAggregateType<T extends FinancialTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialTransaction[P]>
      : GetScalarType<T[P], AggregateFinancialTransaction[P]>
  }




  export type FinancialTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialTransactionWhereInput
    orderBy?: FinancialTransactionOrderByWithAggregationInput | FinancialTransactionOrderByWithAggregationInput[]
    by: FinancialTransactionScalarFieldEnum[] | FinancialTransactionScalarFieldEnum
    having?: FinancialTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialTransactionCountAggregateInputType | true
    _avg?: FinancialTransactionAvgAggregateInputType
    _sum?: FinancialTransactionSumAggregateInputType
    _min?: FinancialTransactionMinAggregateInputType
    _max?: FinancialTransactionMaxAggregateInputType
  }

  export type FinancialTransactionGroupByOutputType = {
    id: string
    type: $Enums.TransactionType
    category: string
    description: string
    amount: number
    date: Date
    relatedReportId: string | null
    relatedClinicId: string | null
    relatedPatientId: string | null
    paymentMethod: string | null
    status: $Enums.TransactionStatus
    _count: FinancialTransactionCountAggregateOutputType | null
    _avg: FinancialTransactionAvgAggregateOutputType | null
    _sum: FinancialTransactionSumAggregateOutputType | null
    _min: FinancialTransactionMinAggregateOutputType | null
    _max: FinancialTransactionMaxAggregateOutputType | null
  }

  type GetFinancialTransactionGroupByPayload<T extends FinancialTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialTransactionGroupByOutputType[P]>
        }
      >
    >


  export type FinancialTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    relatedReportId?: boolean
    relatedClinicId?: boolean
    relatedPatientId?: boolean
    paymentMethod?: boolean
    status?: boolean
    report?: boolean | FinancialTransaction$reportArgs<ExtArgs>
    clinic?: boolean | FinancialTransaction$clinicArgs<ExtArgs>
    patient?: boolean | FinancialTransaction$patientArgs<ExtArgs>
  }, ExtArgs["result"]["financialTransaction"]>

  export type FinancialTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    relatedReportId?: boolean
    relatedClinicId?: boolean
    relatedPatientId?: boolean
    paymentMethod?: boolean
    status?: boolean
    report?: boolean | FinancialTransaction$reportArgs<ExtArgs>
    clinic?: boolean | FinancialTransaction$clinicArgs<ExtArgs>
    patient?: boolean | FinancialTransaction$patientArgs<ExtArgs>
  }, ExtArgs["result"]["financialTransaction"]>

  export type FinancialTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    relatedReportId?: boolean
    relatedClinicId?: boolean
    relatedPatientId?: boolean
    paymentMethod?: boolean
    status?: boolean
    report?: boolean | FinancialTransaction$reportArgs<ExtArgs>
    clinic?: boolean | FinancialTransaction$clinicArgs<ExtArgs>
    patient?: boolean | FinancialTransaction$patientArgs<ExtArgs>
  }, ExtArgs["result"]["financialTransaction"]>

  export type FinancialTransactionSelectScalar = {
    id?: boolean
    type?: boolean
    category?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    relatedReportId?: boolean
    relatedClinicId?: boolean
    relatedPatientId?: boolean
    paymentMethod?: boolean
    status?: boolean
  }

  export type FinancialTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "category" | "description" | "amount" | "date" | "relatedReportId" | "relatedClinicId" | "relatedPatientId" | "paymentMethod" | "status", ExtArgs["result"]["financialTransaction"]>
  export type FinancialTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | FinancialTransaction$reportArgs<ExtArgs>
    clinic?: boolean | FinancialTransaction$clinicArgs<ExtArgs>
    patient?: boolean | FinancialTransaction$patientArgs<ExtArgs>
  }
  export type FinancialTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | FinancialTransaction$reportArgs<ExtArgs>
    clinic?: boolean | FinancialTransaction$clinicArgs<ExtArgs>
    patient?: boolean | FinancialTransaction$patientArgs<ExtArgs>
  }
  export type FinancialTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | FinancialTransaction$reportArgs<ExtArgs>
    clinic?: boolean | FinancialTransaction$clinicArgs<ExtArgs>
    patient?: boolean | FinancialTransaction$patientArgs<ExtArgs>
  }

  export type $FinancialTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialTransaction"
    objects: {
      report: Prisma.$ReportPayload<ExtArgs> | null
      clinic: Prisma.$ClinicPayload<ExtArgs> | null
      patient: Prisma.$PatientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.TransactionType
      category: string
      description: string
      amount: number
      date: Date
      relatedReportId: string | null
      relatedClinicId: string | null
      relatedPatientId: string | null
      paymentMethod: string | null
      status: $Enums.TransactionStatus
    }, ExtArgs["result"]["financialTransaction"]>
    composites: {}
  }

  type FinancialTransactionGetPayload<S extends boolean | null | undefined | FinancialTransactionDefaultArgs> = $Result.GetResult<Prisma.$FinancialTransactionPayload, S>

  type FinancialTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinancialTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinancialTransactionCountAggregateInputType | true
    }

  export interface FinancialTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialTransaction'], meta: { name: 'FinancialTransaction' } }
    /**
     * Find zero or one FinancialTransaction that matches the filter.
     * @param {FinancialTransactionFindUniqueArgs} args - Arguments to find a FinancialTransaction
     * @example
     * // Get one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialTransactionFindUniqueArgs>(args: SelectSubset<T, FinancialTransactionFindUniqueArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinancialTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinancialTransactionFindUniqueOrThrowArgs} args - Arguments to find a FinancialTransaction
     * @example
     * // Get one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionFindFirstArgs} args - Arguments to find a FinancialTransaction
     * @example
     * // Get one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialTransactionFindFirstArgs>(args?: SelectSubset<T, FinancialTransactionFindFirstArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionFindFirstOrThrowArgs} args - Arguments to find a FinancialTransaction
     * @example
     * // Get one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinancialTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialTransactions
     * const financialTransactions = await prisma.financialTransaction.findMany()
     * 
     * // Get first 10 FinancialTransactions
     * const financialTransactions = await prisma.financialTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialTransactionWithIdOnly = await prisma.financialTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancialTransactionFindManyArgs>(args?: SelectSubset<T, FinancialTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinancialTransaction.
     * @param {FinancialTransactionCreateArgs} args - Arguments to create a FinancialTransaction.
     * @example
     * // Create one FinancialTransaction
     * const FinancialTransaction = await prisma.financialTransaction.create({
     *   data: {
     *     // ... data to create a FinancialTransaction
     *   }
     * })
     * 
     */
    create<T extends FinancialTransactionCreateArgs>(args: SelectSubset<T, FinancialTransactionCreateArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinancialTransactions.
     * @param {FinancialTransactionCreateManyArgs} args - Arguments to create many FinancialTransactions.
     * @example
     * // Create many FinancialTransactions
     * const financialTransaction = await prisma.financialTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialTransactionCreateManyArgs>(args?: SelectSubset<T, FinancialTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancialTransactions and returns the data saved in the database.
     * @param {FinancialTransactionCreateManyAndReturnArgs} args - Arguments to create many FinancialTransactions.
     * @example
     * // Create many FinancialTransactions
     * const financialTransaction = await prisma.financialTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancialTransactions and only return the `id`
     * const financialTransactionWithIdOnly = await prisma.financialTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinancialTransaction.
     * @param {FinancialTransactionDeleteArgs} args - Arguments to delete one FinancialTransaction.
     * @example
     * // Delete one FinancialTransaction
     * const FinancialTransaction = await prisma.financialTransaction.delete({
     *   where: {
     *     // ... filter to delete one FinancialTransaction
     *   }
     * })
     * 
     */
    delete<T extends FinancialTransactionDeleteArgs>(args: SelectSubset<T, FinancialTransactionDeleteArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinancialTransaction.
     * @param {FinancialTransactionUpdateArgs} args - Arguments to update one FinancialTransaction.
     * @example
     * // Update one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialTransactionUpdateArgs>(args: SelectSubset<T, FinancialTransactionUpdateArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinancialTransactions.
     * @param {FinancialTransactionDeleteManyArgs} args - Arguments to filter FinancialTransactions to delete.
     * @example
     * // Delete a few FinancialTransactions
     * const { count } = await prisma.financialTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialTransactionDeleteManyArgs>(args?: SelectSubset<T, FinancialTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialTransactions
     * const financialTransaction = await prisma.financialTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialTransactionUpdateManyArgs>(args: SelectSubset<T, FinancialTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialTransactions and returns the data updated in the database.
     * @param {FinancialTransactionUpdateManyAndReturnArgs} args - Arguments to update many FinancialTransactions.
     * @example
     * // Update many FinancialTransactions
     * const financialTransaction = await prisma.financialTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinancialTransactions and only return the `id`
     * const financialTransactionWithIdOnly = await prisma.financialTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends FinancialTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, FinancialTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinancialTransaction.
     * @param {FinancialTransactionUpsertArgs} args - Arguments to update or create a FinancialTransaction.
     * @example
     * // Update or create a FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.upsert({
     *   create: {
     *     // ... data to create a FinancialTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialTransaction we want to update
     *   }
     * })
     */
    upsert<T extends FinancialTransactionUpsertArgs>(args: SelectSubset<T, FinancialTransactionUpsertArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinancialTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionCountArgs} args - Arguments to filter FinancialTransactions to count.
     * @example
     * // Count the number of FinancialTransactions
     * const count = await prisma.financialTransaction.count({
     *   where: {
     *     // ... the filter for the FinancialTransactions we want to count
     *   }
     * })
    **/
    count<T extends FinancialTransactionCountArgs>(
      args?: Subset<T, FinancialTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinancialTransactionAggregateArgs>(args: Subset<T, FinancialTransactionAggregateArgs>): Prisma.PrismaPromise<GetFinancialTransactionAggregateType<T>>

    /**
     * Group by FinancialTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionGroupByArgs} args - Group by arguments.
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
      T extends FinancialTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialTransactionGroupByArgs['orderBy'] }
        : { orderBy?: FinancialTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinancialTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialTransaction model
   */
  readonly fields: FinancialTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends FinancialTransaction$reportArgs<ExtArgs> = {}>(args?: Subset<T, FinancialTransaction$reportArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    clinic<T extends FinancialTransaction$clinicArgs<ExtArgs> = {}>(args?: Subset<T, FinancialTransaction$clinicArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patient<T extends FinancialTransaction$patientArgs<ExtArgs> = {}>(args?: Subset<T, FinancialTransaction$patientArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FinancialTransaction model
   */
  interface FinancialTransactionFieldRefs {
    readonly id: FieldRef<"FinancialTransaction", 'String'>
    readonly type: FieldRef<"FinancialTransaction", 'TransactionType'>
    readonly category: FieldRef<"FinancialTransaction", 'String'>
    readonly description: FieldRef<"FinancialTransaction", 'String'>
    readonly amount: FieldRef<"FinancialTransaction", 'Float'>
    readonly date: FieldRef<"FinancialTransaction", 'DateTime'>
    readonly relatedReportId: FieldRef<"FinancialTransaction", 'String'>
    readonly relatedClinicId: FieldRef<"FinancialTransaction", 'String'>
    readonly relatedPatientId: FieldRef<"FinancialTransaction", 'String'>
    readonly paymentMethod: FieldRef<"FinancialTransaction", 'String'>
    readonly status: FieldRef<"FinancialTransaction", 'TransactionStatus'>
  }
    

  // Custom InputTypes
  /**
   * FinancialTransaction findUnique
   */
  export type FinancialTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FinancialTransaction to fetch.
     */
    where: FinancialTransactionWhereUniqueInput
  }

  /**
   * FinancialTransaction findUniqueOrThrow
   */
  export type FinancialTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FinancialTransaction to fetch.
     */
    where: FinancialTransactionWhereUniqueInput
  }

  /**
   * FinancialTransaction findFirst
   */
  export type FinancialTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FinancialTransaction to fetch.
     */
    where?: FinancialTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialTransactions to fetch.
     */
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialTransactions.
     */
    cursor?: FinancialTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialTransactions.
     */
    distinct?: FinancialTransactionScalarFieldEnum | FinancialTransactionScalarFieldEnum[]
  }

  /**
   * FinancialTransaction findFirstOrThrow
   */
  export type FinancialTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FinancialTransaction to fetch.
     */
    where?: FinancialTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialTransactions to fetch.
     */
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialTransactions.
     */
    cursor?: FinancialTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialTransactions.
     */
    distinct?: FinancialTransactionScalarFieldEnum | FinancialTransactionScalarFieldEnum[]
  }

  /**
   * FinancialTransaction findMany
   */
  export type FinancialTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FinancialTransactions to fetch.
     */
    where?: FinancialTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialTransactions to fetch.
     */
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialTransactions.
     */
    cursor?: FinancialTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialTransactions.
     */
    skip?: number
    distinct?: FinancialTransactionScalarFieldEnum | FinancialTransactionScalarFieldEnum[]
  }

  /**
   * FinancialTransaction create
   */
  export type FinancialTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a FinancialTransaction.
     */
    data: XOR<FinancialTransactionCreateInput, FinancialTransactionUncheckedCreateInput>
  }

  /**
   * FinancialTransaction createMany
   */
  export type FinancialTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialTransactions.
     */
    data: FinancialTransactionCreateManyInput | FinancialTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialTransaction createManyAndReturn
   */
  export type FinancialTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many FinancialTransactions.
     */
    data: FinancialTransactionCreateManyInput | FinancialTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialTransaction update
   */
  export type FinancialTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a FinancialTransaction.
     */
    data: XOR<FinancialTransactionUpdateInput, FinancialTransactionUncheckedUpdateInput>
    /**
     * Choose, which FinancialTransaction to update.
     */
    where: FinancialTransactionWhereUniqueInput
  }

  /**
   * FinancialTransaction updateMany
   */
  export type FinancialTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialTransactions.
     */
    data: XOR<FinancialTransactionUpdateManyMutationInput, FinancialTransactionUncheckedUpdateManyInput>
    /**
     * Filter which FinancialTransactions to update
     */
    where?: FinancialTransactionWhereInput
    /**
     * Limit how many FinancialTransactions to update.
     */
    limit?: number
  }

  /**
   * FinancialTransaction updateManyAndReturn
   */
  export type FinancialTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * The data used to update FinancialTransactions.
     */
    data: XOR<FinancialTransactionUpdateManyMutationInput, FinancialTransactionUncheckedUpdateManyInput>
    /**
     * Filter which FinancialTransactions to update
     */
    where?: FinancialTransactionWhereInput
    /**
     * Limit how many FinancialTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialTransaction upsert
   */
  export type FinancialTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the FinancialTransaction to update in case it exists.
     */
    where: FinancialTransactionWhereUniqueInput
    /**
     * In case the FinancialTransaction found by the `where` argument doesn't exist, create a new FinancialTransaction with this data.
     */
    create: XOR<FinancialTransactionCreateInput, FinancialTransactionUncheckedCreateInput>
    /**
     * In case the FinancialTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialTransactionUpdateInput, FinancialTransactionUncheckedUpdateInput>
  }

  /**
   * FinancialTransaction delete
   */
  export type FinancialTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * Filter which FinancialTransaction to delete.
     */
    where: FinancialTransactionWhereUniqueInput
  }

  /**
   * FinancialTransaction deleteMany
   */
  export type FinancialTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialTransactions to delete
     */
    where?: FinancialTransactionWhereInput
    /**
     * Limit how many FinancialTransactions to delete.
     */
    limit?: number
  }

  /**
   * FinancialTransaction.report
   */
  export type FinancialTransaction$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
  }

  /**
   * FinancialTransaction.clinic
   */
  export type FinancialTransaction$clinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    where?: ClinicWhereInput
  }

  /**
   * FinancialTransaction.patient
   */
  export type FinancialTransaction$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * FinancialTransaction without action
   */
  export type FinancialTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    cnpj: 'cnpj',
    CRMV: 'CRMV',
    phone: 'phone',
    instagramHandle: 'instagramHandle',
    instagramURL: 'instagramURL',
    twitterHandle: 'twitterHandle',
    twitterURL: 'twitterURL',
    websiteHandle: 'websiteHandle',
    websiteURL: 'websiteURL',
    address: 'address',
    city: 'city',
    state: 'state',
    profilePictureURL: 'profilePictureURL',
    logoPictureURL: 'logoPictureURL',
    signaturePictureURL: 'signaturePictureURL',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    species: 'species',
    breed: 'breed',
    sex: 'sex',
    age: 'age',
    ageUnit: 'ageUnit',
    ownerName: 'ownerName',
    ownerPhone: 'ownerPhone',
    createdAt: 'createdAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const ClinicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cnpj: 'cnpj',
    address: 'address',
    city: 'city',
    state: 'state',
    createdAt: 'createdAt'
  };

  export type ClinicScalarFieldEnum = (typeof ClinicScalarFieldEnum)[keyof typeof ClinicScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    clinicId: 'clinicId',
    type: 'type',
    categoryUltrasound: 'categoryUltrasound',
    categoryXRay: 'categoryXRay',
    findings: 'findings',
    conclusion: 'conclusion',
    createdAt: 'createdAt',
    status: 'status',
    baseValue: 'baseValue',
    additionalValue: 'additionalValue',
    code: 'code'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const ReportImageScalarFieldEnum: {
    id: 'id',
    reportId: 'reportId',
    url: 'url',
    createdAt: 'createdAt'
  };

  export type ReportImageScalarFieldEnum = (typeof ReportImageScalarFieldEnum)[keyof typeof ReportImageScalarFieldEnum]


  export const MeasurementScalarFieldEnum: {
    id: 'id',
    organ: 'organ',
    value: 'value',
    reportId: 'reportId'
  };

  export type MeasurementScalarFieldEnum = (typeof MeasurementScalarFieldEnum)[keyof typeof MeasurementScalarFieldEnum]


  export const TextTemplateScalarFieldEnum: {
    id: 'id',
    title: 'title',
    categoryUltrasound: 'categoryUltrasound',
    categoryXRay: 'categoryXRay',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type TextTemplateScalarFieldEnum = (typeof TextTemplateScalarFieldEnum)[keyof typeof TextTemplateScalarFieldEnum]


  export const ConclusionTemplateScalarFieldEnum: {
    id: 'id',
    title: 'title',
    categoryUltrasound: 'categoryUltrasound',
    categoryXRay: 'categoryXRay',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ConclusionTemplateScalarFieldEnum = (typeof ConclusionTemplateScalarFieldEnum)[keyof typeof ConclusionTemplateScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    reportId: 'reportId',
    amount: 'amount',
    method: 'method',
    source: 'source',
    sourceId: 'sourceId',
    date: 'date',
    status: 'status'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const FinancialTransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    category: 'category',
    description: 'description',
    amount: 'amount',
    date: 'date',
    relatedReportId: 'relatedReportId',
    relatedClinicId: 'relatedClinicId',
    relatedPatientId: 'relatedPatientId',
    paymentMethod: 'paymentMethod',
    status: 'status'
  };

  export type FinancialTransactionScalarFieldEnum = (typeof FinancialTransactionScalarFieldEnum)[keyof typeof FinancialTransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Sex'
   */
  export type EnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex'>
    


  /**
   * Reference to a field of type 'Sex[]'
   */
  export type ListEnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AgeUnit'
   */
  export type EnumAgeUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgeUnit'>
    


  /**
   * Reference to a field of type 'AgeUnit[]'
   */
  export type ListEnumAgeUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgeUnit[]'>
    


  /**
   * Reference to a field of type 'ExamType'
   */
  export type EnumExamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamType'>
    


  /**
   * Reference to a field of type 'ExamType[]'
   */
  export type ListEnumExamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamType[]'>
    


  /**
   * Reference to a field of type 'UltrasoundCategory'
   */
  export type EnumUltrasoundCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UltrasoundCategory'>
    


  /**
   * Reference to a field of type 'UltrasoundCategory[]'
   */
  export type ListEnumUltrasoundCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UltrasoundCategory[]'>
    


  /**
   * Reference to a field of type 'XRayCategory'
   */
  export type EnumXRayCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'XRayCategory'>
    


  /**
   * Reference to a field of type 'XRayCategory[]'
   */
  export type ListEnumXRayCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'XRayCategory[]'>
    


  /**
   * Reference to a field of type 'ReportStatus'
   */
  export type EnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus'>
    


  /**
   * Reference to a field of type 'ReportStatus[]'
   */
  export type ListEnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentSource'
   */
  export type EnumPaymentSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentSource'>
    


  /**
   * Reference to a field of type 'PaymentSource[]'
   */
  export type ListEnumPaymentSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentSource[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    name?: StringFilter<"UserProfile"> | string
    cnpj?: StringNullableFilter<"UserProfile"> | string | null
    CRMV?: StringNullableFilter<"UserProfile"> | string | null
    phone?: StringNullableFilter<"UserProfile"> | string | null
    instagramHandle?: StringNullableFilter<"UserProfile"> | string | null
    instagramURL?: StringNullableFilter<"UserProfile"> | string | null
    twitterHandle?: StringNullableFilter<"UserProfile"> | string | null
    twitterURL?: StringNullableFilter<"UserProfile"> | string | null
    websiteHandle?: StringNullableFilter<"UserProfile"> | string | null
    websiteURL?: StringNullableFilter<"UserProfile"> | string | null
    address?: StringNullableFilter<"UserProfile"> | string | null
    city?: StringNullableFilter<"UserProfile"> | string | null
    state?: StringNullableFilter<"UserProfile"> | string | null
    profilePictureURL?: StringNullableFilter<"UserProfile"> | string | null
    logoPictureURL?: StringNullableFilter<"UserProfile"> | string | null
    signaturePictureURL?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    cnpj?: SortOrderInput | SortOrder
    CRMV?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    instagramHandle?: SortOrderInput | SortOrder
    instagramURL?: SortOrderInput | SortOrder
    twitterHandle?: SortOrderInput | SortOrder
    twitterURL?: SortOrderInput | SortOrder
    websiteHandle?: SortOrderInput | SortOrder
    websiteURL?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    profilePictureURL?: SortOrderInput | SortOrder
    logoPictureURL?: SortOrderInput | SortOrder
    signaturePictureURL?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    cnpj?: string
    CRMV?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    name?: StringFilter<"UserProfile"> | string
    phone?: StringNullableFilter<"UserProfile"> | string | null
    instagramHandle?: StringNullableFilter<"UserProfile"> | string | null
    instagramURL?: StringNullableFilter<"UserProfile"> | string | null
    twitterHandle?: StringNullableFilter<"UserProfile"> | string | null
    twitterURL?: StringNullableFilter<"UserProfile"> | string | null
    websiteHandle?: StringNullableFilter<"UserProfile"> | string | null
    websiteURL?: StringNullableFilter<"UserProfile"> | string | null
    address?: StringNullableFilter<"UserProfile"> | string | null
    city?: StringNullableFilter<"UserProfile"> | string | null
    state?: StringNullableFilter<"UserProfile"> | string | null
    profilePictureURL?: StringNullableFilter<"UserProfile"> | string | null
    logoPictureURL?: StringNullableFilter<"UserProfile"> | string | null
    signaturePictureURL?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "cnpj" | "CRMV">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    cnpj?: SortOrderInput | SortOrder
    CRMV?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    instagramHandle?: SortOrderInput | SortOrder
    instagramURL?: SortOrderInput | SortOrder
    twitterHandle?: SortOrderInput | SortOrder
    twitterURL?: SortOrderInput | SortOrder
    websiteHandle?: SortOrderInput | SortOrder
    websiteURL?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    profilePictureURL?: SortOrderInput | SortOrder
    logoPictureURL?: SortOrderInput | SortOrder
    signaturePictureURL?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    name?: StringWithAggregatesFilter<"UserProfile"> | string
    cnpj?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    CRMV?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    instagramHandle?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    instagramURL?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    twitterHandle?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    twitterURL?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    websiteHandle?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    websiteURL?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    address?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    city?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    state?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    profilePictureURL?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    logoPictureURL?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    signaturePictureURL?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    species?: StringFilter<"Patient"> | string
    breed?: StringFilter<"Patient"> | string
    sex?: EnumSexFilter<"Patient"> | $Enums.Sex
    age?: IntFilter<"Patient"> | number
    ageUnit?: EnumAgeUnitFilter<"Patient"> | $Enums.AgeUnit
    ownerName?: StringFilter<"Patient"> | string
    ownerPhone?: StringFilter<"Patient"> | string
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    reports?: ReportListRelationFilter
    Payment?: PaymentListRelationFilter
    financialTransactions?: FinancialTransactionListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    sex?: SortOrder
    age?: SortOrder
    ageUnit?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    createdAt?: SortOrder
    reports?: ReportOrderByRelationAggregateInput
    Payment?: PaymentOrderByRelationAggregateInput
    financialTransactions?: FinancialTransactionOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    name?: StringFilter<"Patient"> | string
    species?: StringFilter<"Patient"> | string
    breed?: StringFilter<"Patient"> | string
    sex?: EnumSexFilter<"Patient"> | $Enums.Sex
    age?: IntFilter<"Patient"> | number
    ageUnit?: EnumAgeUnitFilter<"Patient"> | $Enums.AgeUnit
    ownerName?: StringFilter<"Patient"> | string
    ownerPhone?: StringFilter<"Patient"> | string
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    reports?: ReportListRelationFilter
    Payment?: PaymentListRelationFilter
    financialTransactions?: FinancialTransactionListRelationFilter
  }, "id">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    sex?: SortOrder
    age?: SortOrder
    ageUnit?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    createdAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    name?: StringWithAggregatesFilter<"Patient"> | string
    species?: StringWithAggregatesFilter<"Patient"> | string
    breed?: StringWithAggregatesFilter<"Patient"> | string
    sex?: EnumSexWithAggregatesFilter<"Patient"> | $Enums.Sex
    age?: IntWithAggregatesFilter<"Patient"> | number
    ageUnit?: EnumAgeUnitWithAggregatesFilter<"Patient"> | $Enums.AgeUnit
    ownerName?: StringWithAggregatesFilter<"Patient"> | string
    ownerPhone?: StringWithAggregatesFilter<"Patient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type ClinicWhereInput = {
    AND?: ClinicWhereInput | ClinicWhereInput[]
    OR?: ClinicWhereInput[]
    NOT?: ClinicWhereInput | ClinicWhereInput[]
    id?: StringFilter<"Clinic"> | string
    name?: StringFilter<"Clinic"> | string
    cnpj?: StringFilter<"Clinic"> | string
    address?: StringFilter<"Clinic"> | string
    city?: StringFilter<"Clinic"> | string
    state?: StringFilter<"Clinic"> | string
    createdAt?: DateTimeFilter<"Clinic"> | Date | string
    reports?: ReportListRelationFilter
    payments?: PaymentListRelationFilter
    transactions?: FinancialTransactionListRelationFilter
  }

  export type ClinicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    reports?: ReportOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    transactions?: FinancialTransactionOrderByRelationAggregateInput
  }

  export type ClinicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    AND?: ClinicWhereInput | ClinicWhereInput[]
    OR?: ClinicWhereInput[]
    NOT?: ClinicWhereInput | ClinicWhereInput[]
    name?: StringFilter<"Clinic"> | string
    address?: StringFilter<"Clinic"> | string
    city?: StringFilter<"Clinic"> | string
    state?: StringFilter<"Clinic"> | string
    createdAt?: DateTimeFilter<"Clinic"> | Date | string
    reports?: ReportListRelationFilter
    payments?: PaymentListRelationFilter
    transactions?: FinancialTransactionListRelationFilter
  }, "id" | "cnpj">

  export type ClinicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    _count?: ClinicCountOrderByAggregateInput
    _max?: ClinicMaxOrderByAggregateInput
    _min?: ClinicMinOrderByAggregateInput
  }

  export type ClinicScalarWhereWithAggregatesInput = {
    AND?: ClinicScalarWhereWithAggregatesInput | ClinicScalarWhereWithAggregatesInput[]
    OR?: ClinicScalarWhereWithAggregatesInput[]
    NOT?: ClinicScalarWhereWithAggregatesInput | ClinicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Clinic"> | string
    name?: StringWithAggregatesFilter<"Clinic"> | string
    cnpj?: StringWithAggregatesFilter<"Clinic"> | string
    address?: StringWithAggregatesFilter<"Clinic"> | string
    city?: StringWithAggregatesFilter<"Clinic"> | string
    state?: StringWithAggregatesFilter<"Clinic"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Clinic"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    patientId?: StringFilter<"Report"> | string
    clinicId?: StringFilter<"Report"> | string
    type?: EnumExamTypeFilter<"Report"> | $Enums.ExamType
    categoryUltrasound?: EnumUltrasoundCategoryNullableFilter<"Report"> | $Enums.UltrasoundCategory | null
    categoryXRay?: EnumXRayCategoryNullableFilter<"Report"> | $Enums.XRayCategory | null
    findings?: StringFilter<"Report"> | string
    conclusion?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    baseValue?: FloatFilter<"Report"> | number
    additionalValue?: FloatFilter<"Report"> | number
    code?: StringFilter<"Report"> | string
    images?: ReportImageListRelationFilter
    measurements?: MeasurementListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    clinic?: XOR<ClinicScalarRelationFilter, ClinicWhereInput>
    transactions?: FinancialTransactionListRelationFilter
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    clinicId?: SortOrder
    type?: SortOrder
    categoryUltrasound?: SortOrderInput | SortOrder
    categoryXRay?: SortOrderInput | SortOrder
    findings?: SortOrder
    conclusion?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    baseValue?: SortOrder
    additionalValue?: SortOrder
    code?: SortOrder
    images?: ReportImageOrderByRelationAggregateInput
    measurements?: MeasurementOrderByRelationAggregateInput
    payment?: PaymentOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
    clinic?: ClinicOrderByWithRelationInput
    transactions?: FinancialTransactionOrderByRelationAggregateInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    patientId?: StringFilter<"Report"> | string
    clinicId?: StringFilter<"Report"> | string
    type?: EnumExamTypeFilter<"Report"> | $Enums.ExamType
    categoryUltrasound?: EnumUltrasoundCategoryNullableFilter<"Report"> | $Enums.UltrasoundCategory | null
    categoryXRay?: EnumXRayCategoryNullableFilter<"Report"> | $Enums.XRayCategory | null
    findings?: StringFilter<"Report"> | string
    conclusion?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    baseValue?: FloatFilter<"Report"> | number
    additionalValue?: FloatFilter<"Report"> | number
    images?: ReportImageListRelationFilter
    measurements?: MeasurementListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    clinic?: XOR<ClinicScalarRelationFilter, ClinicWhereInput>
    transactions?: FinancialTransactionListRelationFilter
  }, "id" | "code">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    clinicId?: SortOrder
    type?: SortOrder
    categoryUltrasound?: SortOrderInput | SortOrder
    categoryXRay?: SortOrderInput | SortOrder
    findings?: SortOrder
    conclusion?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    baseValue?: SortOrder
    additionalValue?: SortOrder
    code?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _avg?: ReportAvgOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
    _sum?: ReportSumOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    patientId?: StringWithAggregatesFilter<"Report"> | string
    clinicId?: StringWithAggregatesFilter<"Report"> | string
    type?: EnumExamTypeWithAggregatesFilter<"Report"> | $Enums.ExamType
    categoryUltrasound?: EnumUltrasoundCategoryNullableWithAggregatesFilter<"Report"> | $Enums.UltrasoundCategory | null
    categoryXRay?: EnumXRayCategoryNullableWithAggregatesFilter<"Report"> | $Enums.XRayCategory | null
    findings?: StringWithAggregatesFilter<"Report"> | string
    conclusion?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    status?: EnumReportStatusWithAggregatesFilter<"Report"> | $Enums.ReportStatus
    baseValue?: FloatWithAggregatesFilter<"Report"> | number
    additionalValue?: FloatWithAggregatesFilter<"Report"> | number
    code?: StringWithAggregatesFilter<"Report"> | string
  }

  export type ReportImageWhereInput = {
    AND?: ReportImageWhereInput | ReportImageWhereInput[]
    OR?: ReportImageWhereInput[]
    NOT?: ReportImageWhereInput | ReportImageWhereInput[]
    id?: StringFilter<"ReportImage"> | string
    reportId?: StringFilter<"ReportImage"> | string
    url?: StringFilter<"ReportImage"> | string
    createdAt?: DateTimeFilter<"ReportImage"> | Date | string
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
  }

  export type ReportImageOrderByWithRelationInput = {
    id?: SortOrder
    reportId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    report?: ReportOrderByWithRelationInput
  }

  export type ReportImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportImageWhereInput | ReportImageWhereInput[]
    OR?: ReportImageWhereInput[]
    NOT?: ReportImageWhereInput | ReportImageWhereInput[]
    reportId?: StringFilter<"ReportImage"> | string
    url?: StringFilter<"ReportImage"> | string
    createdAt?: DateTimeFilter<"ReportImage"> | Date | string
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
  }, "id">

  export type ReportImageOrderByWithAggregationInput = {
    id?: SortOrder
    reportId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    _count?: ReportImageCountOrderByAggregateInput
    _max?: ReportImageMaxOrderByAggregateInput
    _min?: ReportImageMinOrderByAggregateInput
  }

  export type ReportImageScalarWhereWithAggregatesInput = {
    AND?: ReportImageScalarWhereWithAggregatesInput | ReportImageScalarWhereWithAggregatesInput[]
    OR?: ReportImageScalarWhereWithAggregatesInput[]
    NOT?: ReportImageScalarWhereWithAggregatesInput | ReportImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReportImage"> | string
    reportId?: StringWithAggregatesFilter<"ReportImage"> | string
    url?: StringWithAggregatesFilter<"ReportImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReportImage"> | Date | string
  }

  export type MeasurementWhereInput = {
    AND?: MeasurementWhereInput | MeasurementWhereInput[]
    OR?: MeasurementWhereInput[]
    NOT?: MeasurementWhereInput | MeasurementWhereInput[]
    id?: StringFilter<"Measurement"> | string
    organ?: StringFilter<"Measurement"> | string
    value?: StringFilter<"Measurement"> | string
    reportId?: StringFilter<"Measurement"> | string
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
  }

  export type MeasurementOrderByWithRelationInput = {
    id?: SortOrder
    organ?: SortOrder
    value?: SortOrder
    reportId?: SortOrder
    report?: ReportOrderByWithRelationInput
  }

  export type MeasurementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MeasurementWhereInput | MeasurementWhereInput[]
    OR?: MeasurementWhereInput[]
    NOT?: MeasurementWhereInput | MeasurementWhereInput[]
    organ?: StringFilter<"Measurement"> | string
    value?: StringFilter<"Measurement"> | string
    reportId?: StringFilter<"Measurement"> | string
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
  }, "id">

  export type MeasurementOrderByWithAggregationInput = {
    id?: SortOrder
    organ?: SortOrder
    value?: SortOrder
    reportId?: SortOrder
    _count?: MeasurementCountOrderByAggregateInput
    _max?: MeasurementMaxOrderByAggregateInput
    _min?: MeasurementMinOrderByAggregateInput
  }

  export type MeasurementScalarWhereWithAggregatesInput = {
    AND?: MeasurementScalarWhereWithAggregatesInput | MeasurementScalarWhereWithAggregatesInput[]
    OR?: MeasurementScalarWhereWithAggregatesInput[]
    NOT?: MeasurementScalarWhereWithAggregatesInput | MeasurementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Measurement"> | string
    organ?: StringWithAggregatesFilter<"Measurement"> | string
    value?: StringWithAggregatesFilter<"Measurement"> | string
    reportId?: StringWithAggregatesFilter<"Measurement"> | string
  }

  export type TextTemplateWhereInput = {
    AND?: TextTemplateWhereInput | TextTemplateWhereInput[]
    OR?: TextTemplateWhereInput[]
    NOT?: TextTemplateWhereInput | TextTemplateWhereInput[]
    id?: StringFilter<"TextTemplate"> | string
    title?: StringFilter<"TextTemplate"> | string
    categoryUltrasound?: EnumUltrasoundCategoryNullableFilter<"TextTemplate"> | $Enums.UltrasoundCategory | null
    categoryXRay?: EnumXRayCategoryNullableFilter<"TextTemplate"> | $Enums.XRayCategory | null
    content?: StringFilter<"TextTemplate"> | string
    createdAt?: DateTimeFilter<"TextTemplate"> | Date | string
  }

  export type TextTemplateOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    categoryUltrasound?: SortOrderInput | SortOrder
    categoryXRay?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type TextTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TextTemplateWhereInput | TextTemplateWhereInput[]
    OR?: TextTemplateWhereInput[]
    NOT?: TextTemplateWhereInput | TextTemplateWhereInput[]
    title?: StringFilter<"TextTemplate"> | string
    categoryUltrasound?: EnumUltrasoundCategoryNullableFilter<"TextTemplate"> | $Enums.UltrasoundCategory | null
    categoryXRay?: EnumXRayCategoryNullableFilter<"TextTemplate"> | $Enums.XRayCategory | null
    content?: StringFilter<"TextTemplate"> | string
    createdAt?: DateTimeFilter<"TextTemplate"> | Date | string
  }, "id">

  export type TextTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    categoryUltrasound?: SortOrderInput | SortOrder
    categoryXRay?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: TextTemplateCountOrderByAggregateInput
    _max?: TextTemplateMaxOrderByAggregateInput
    _min?: TextTemplateMinOrderByAggregateInput
  }

  export type TextTemplateScalarWhereWithAggregatesInput = {
    AND?: TextTemplateScalarWhereWithAggregatesInput | TextTemplateScalarWhereWithAggregatesInput[]
    OR?: TextTemplateScalarWhereWithAggregatesInput[]
    NOT?: TextTemplateScalarWhereWithAggregatesInput | TextTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TextTemplate"> | string
    title?: StringWithAggregatesFilter<"TextTemplate"> | string
    categoryUltrasound?: EnumUltrasoundCategoryNullableWithAggregatesFilter<"TextTemplate"> | $Enums.UltrasoundCategory | null
    categoryXRay?: EnumXRayCategoryNullableWithAggregatesFilter<"TextTemplate"> | $Enums.XRayCategory | null
    content?: StringWithAggregatesFilter<"TextTemplate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TextTemplate"> | Date | string
  }

  export type ConclusionTemplateWhereInput = {
    AND?: ConclusionTemplateWhereInput | ConclusionTemplateWhereInput[]
    OR?: ConclusionTemplateWhereInput[]
    NOT?: ConclusionTemplateWhereInput | ConclusionTemplateWhereInput[]
    id?: StringFilter<"ConclusionTemplate"> | string
    title?: StringFilter<"ConclusionTemplate"> | string
    categoryUltrasound?: EnumUltrasoundCategoryNullableFilter<"ConclusionTemplate"> | $Enums.UltrasoundCategory | null
    categoryXRay?: EnumXRayCategoryNullableFilter<"ConclusionTemplate"> | $Enums.XRayCategory | null
    content?: StringFilter<"ConclusionTemplate"> | string
    createdAt?: DateTimeFilter<"ConclusionTemplate"> | Date | string
  }

  export type ConclusionTemplateOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    categoryUltrasound?: SortOrderInput | SortOrder
    categoryXRay?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ConclusionTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConclusionTemplateWhereInput | ConclusionTemplateWhereInput[]
    OR?: ConclusionTemplateWhereInput[]
    NOT?: ConclusionTemplateWhereInput | ConclusionTemplateWhereInput[]
    title?: StringFilter<"ConclusionTemplate"> | string
    categoryUltrasound?: EnumUltrasoundCategoryNullableFilter<"ConclusionTemplate"> | $Enums.UltrasoundCategory | null
    categoryXRay?: EnumXRayCategoryNullableFilter<"ConclusionTemplate"> | $Enums.XRayCategory | null
    content?: StringFilter<"ConclusionTemplate"> | string
    createdAt?: DateTimeFilter<"ConclusionTemplate"> | Date | string
  }, "id">

  export type ConclusionTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    categoryUltrasound?: SortOrderInput | SortOrder
    categoryXRay?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ConclusionTemplateCountOrderByAggregateInput
    _max?: ConclusionTemplateMaxOrderByAggregateInput
    _min?: ConclusionTemplateMinOrderByAggregateInput
  }

  export type ConclusionTemplateScalarWhereWithAggregatesInput = {
    AND?: ConclusionTemplateScalarWhereWithAggregatesInput | ConclusionTemplateScalarWhereWithAggregatesInput[]
    OR?: ConclusionTemplateScalarWhereWithAggregatesInput[]
    NOT?: ConclusionTemplateScalarWhereWithAggregatesInput | ConclusionTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConclusionTemplate"> | string
    title?: StringWithAggregatesFilter<"ConclusionTemplate"> | string
    categoryUltrasound?: EnumUltrasoundCategoryNullableWithAggregatesFilter<"ConclusionTemplate"> | $Enums.UltrasoundCategory | null
    categoryXRay?: EnumXRayCategoryNullableWithAggregatesFilter<"ConclusionTemplate"> | $Enums.XRayCategory | null
    content?: StringWithAggregatesFilter<"ConclusionTemplate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ConclusionTemplate"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    reportId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    source?: EnumPaymentSourceFilter<"Payment"> | $Enums.PaymentSource
    sourceId?: StringFilter<"Payment"> | string
    date?: DateTimeFilter<"Payment"> | Date | string
    status?: EnumTransactionStatusFilter<"Payment"> | $Enums.TransactionStatus
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
    clinic?: XOR<ClinicNullableScalarRelationFilter, ClinicWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    reportId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    report?: ReportOrderByWithRelationInput
    clinic?: ClinicOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reportId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: FloatFilter<"Payment"> | number
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    source?: EnumPaymentSourceFilter<"Payment"> | $Enums.PaymentSource
    sourceId?: StringFilter<"Payment"> | string
    date?: DateTimeFilter<"Payment"> | Date | string
    status?: EnumTransactionStatusFilter<"Payment"> | $Enums.TransactionStatus
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
    clinic?: XOR<ClinicNullableScalarRelationFilter, ClinicWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }, "id" | "reportId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    reportId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    reportId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    source?: EnumPaymentSourceWithAggregatesFilter<"Payment"> | $Enums.PaymentSource
    sourceId?: StringWithAggregatesFilter<"Payment"> | string
    date?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    status?: EnumTransactionStatusWithAggregatesFilter<"Payment"> | $Enums.TransactionStatus
  }

  export type FinancialTransactionWhereInput = {
    AND?: FinancialTransactionWhereInput | FinancialTransactionWhereInput[]
    OR?: FinancialTransactionWhereInput[]
    NOT?: FinancialTransactionWhereInput | FinancialTransactionWhereInput[]
    id?: StringFilter<"FinancialTransaction"> | string
    type?: EnumTransactionTypeFilter<"FinancialTransaction"> | $Enums.TransactionType
    category?: StringFilter<"FinancialTransaction"> | string
    description?: StringFilter<"FinancialTransaction"> | string
    amount?: FloatFilter<"FinancialTransaction"> | number
    date?: DateTimeFilter<"FinancialTransaction"> | Date | string
    relatedReportId?: StringNullableFilter<"FinancialTransaction"> | string | null
    relatedClinicId?: StringNullableFilter<"FinancialTransaction"> | string | null
    relatedPatientId?: StringNullableFilter<"FinancialTransaction"> | string | null
    paymentMethod?: StringNullableFilter<"FinancialTransaction"> | string | null
    status?: EnumTransactionStatusFilter<"FinancialTransaction"> | $Enums.TransactionStatus
    report?: XOR<ReportNullableScalarRelationFilter, ReportWhereInput> | null
    clinic?: XOR<ClinicNullableScalarRelationFilter, ClinicWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }

  export type FinancialTransactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    relatedReportId?: SortOrderInput | SortOrder
    relatedClinicId?: SortOrderInput | SortOrder
    relatedPatientId?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    status?: SortOrder
    report?: ReportOrderByWithRelationInput
    clinic?: ClinicOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type FinancialTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinancialTransactionWhereInput | FinancialTransactionWhereInput[]
    OR?: FinancialTransactionWhereInput[]
    NOT?: FinancialTransactionWhereInput | FinancialTransactionWhereInput[]
    type?: EnumTransactionTypeFilter<"FinancialTransaction"> | $Enums.TransactionType
    category?: StringFilter<"FinancialTransaction"> | string
    description?: StringFilter<"FinancialTransaction"> | string
    amount?: FloatFilter<"FinancialTransaction"> | number
    date?: DateTimeFilter<"FinancialTransaction"> | Date | string
    relatedReportId?: StringNullableFilter<"FinancialTransaction"> | string | null
    relatedClinicId?: StringNullableFilter<"FinancialTransaction"> | string | null
    relatedPatientId?: StringNullableFilter<"FinancialTransaction"> | string | null
    paymentMethod?: StringNullableFilter<"FinancialTransaction"> | string | null
    status?: EnumTransactionStatusFilter<"FinancialTransaction"> | $Enums.TransactionStatus
    report?: XOR<ReportNullableScalarRelationFilter, ReportWhereInput> | null
    clinic?: XOR<ClinicNullableScalarRelationFilter, ClinicWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }, "id">

  export type FinancialTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    relatedReportId?: SortOrderInput | SortOrder
    relatedClinicId?: SortOrderInput | SortOrder
    relatedPatientId?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: FinancialTransactionCountOrderByAggregateInput
    _avg?: FinancialTransactionAvgOrderByAggregateInput
    _max?: FinancialTransactionMaxOrderByAggregateInput
    _min?: FinancialTransactionMinOrderByAggregateInput
    _sum?: FinancialTransactionSumOrderByAggregateInput
  }

  export type FinancialTransactionScalarWhereWithAggregatesInput = {
    AND?: FinancialTransactionScalarWhereWithAggregatesInput | FinancialTransactionScalarWhereWithAggregatesInput[]
    OR?: FinancialTransactionScalarWhereWithAggregatesInput[]
    NOT?: FinancialTransactionScalarWhereWithAggregatesInput | FinancialTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    type?: EnumTransactionTypeWithAggregatesFilter<"FinancialTransaction"> | $Enums.TransactionType
    category?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    description?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    amount?: FloatWithAggregatesFilter<"FinancialTransaction"> | number
    date?: DateTimeWithAggregatesFilter<"FinancialTransaction"> | Date | string
    relatedReportId?: StringNullableWithAggregatesFilter<"FinancialTransaction"> | string | null
    relatedClinicId?: StringNullableWithAggregatesFilter<"FinancialTransaction"> | string | null
    relatedPatientId?: StringNullableWithAggregatesFilter<"FinancialTransaction"> | string | null
    paymentMethod?: StringNullableWithAggregatesFilter<"FinancialTransaction"> | string | null
    status?: EnumTransactionStatusWithAggregatesFilter<"FinancialTransaction"> | $Enums.TransactionStatus
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    profile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    profile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserProfileCreateInput = {
    id?: string
    name: string
    cnpj?: string | null
    CRMV?: string | null
    phone?: string | null
    instagramHandle?: string | null
    instagramURL?: string | null
    twitterHandle?: string | null
    twitterURL?: string | null
    websiteHandle?: string | null
    websiteURL?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    profilePictureURL?: string | null
    logoPictureURL?: string | null
    signaturePictureURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    cnpj?: string | null
    CRMV?: string | null
    phone?: string | null
    instagramHandle?: string | null
    instagramURL?: string | null
    twitterHandle?: string | null
    twitterURL?: string | null
    websiteHandle?: string | null
    websiteURL?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    profilePictureURL?: string | null
    logoPictureURL?: string | null
    signaturePictureURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    CRMV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    instagramHandle?: NullableStringFieldUpdateOperationsInput | string | null
    instagramURL?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    twitterURL?: NullableStringFieldUpdateOperationsInput | string | null
    websiteHandle?: NullableStringFieldUpdateOperationsInput | string | null
    websiteURL?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    logoPictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    signaturePictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    CRMV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    instagramHandle?: NullableStringFieldUpdateOperationsInput | string | null
    instagramURL?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    twitterURL?: NullableStringFieldUpdateOperationsInput | string | null
    websiteHandle?: NullableStringFieldUpdateOperationsInput | string | null
    websiteURL?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    logoPictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    signaturePictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    name: string
    cnpj?: string | null
    CRMV?: string | null
    phone?: string | null
    instagramHandle?: string | null
    instagramURL?: string | null
    twitterHandle?: string | null
    twitterURL?: string | null
    websiteHandle?: string | null
    websiteURL?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    profilePictureURL?: string | null
    logoPictureURL?: string | null
    signaturePictureURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    CRMV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    instagramHandle?: NullableStringFieldUpdateOperationsInput | string | null
    instagramURL?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    twitterURL?: NullableStringFieldUpdateOperationsInput | string | null
    websiteHandle?: NullableStringFieldUpdateOperationsInput | string | null
    websiteURL?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    logoPictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    signaturePictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    CRMV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    instagramHandle?: NullableStringFieldUpdateOperationsInput | string | null
    instagramURL?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    twitterURL?: NullableStringFieldUpdateOperationsInput | string | null
    websiteHandle?: NullableStringFieldUpdateOperationsInput | string | null
    websiteURL?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    logoPictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    signaturePictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    id?: string
    name: string
    species: string
    breed: string
    sex: $Enums.Sex
    age: number
    ageUnit: $Enums.AgeUnit
    ownerName: string
    ownerPhone: string
    createdAt?: Date | string
    reports?: ReportCreateNestedManyWithoutPatientInput
    Payment?: PaymentCreateNestedManyWithoutPatientInput
    financialTransactions?: FinancialTransactionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    name: string
    species: string
    breed: string
    sex: $Enums.Sex
    age: number
    ageUnit: $Enums.AgeUnit
    ownerName: string
    ownerPhone: string
    createdAt?: Date | string
    reports?: ReportUncheckedCreateNestedManyWithoutPatientInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutPatientInput
    financialTransactions?: FinancialTransactionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    age?: IntFieldUpdateOperationsInput | number
    ageUnit?: EnumAgeUnitFieldUpdateOperationsInput | $Enums.AgeUnit
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUpdateManyWithoutPatientNestedInput
    Payment?: PaymentUpdateManyWithoutPatientNestedInput
    financialTransactions?: FinancialTransactionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    age?: IntFieldUpdateOperationsInput | number
    ageUnit?: EnumAgeUnitFieldUpdateOperationsInput | $Enums.AgeUnit
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUncheckedUpdateManyWithoutPatientNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutPatientNestedInput
    financialTransactions?: FinancialTransactionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    name: string
    species: string
    breed: string
    sex: $Enums.Sex
    age: number
    ageUnit: $Enums.AgeUnit
    ownerName: string
    ownerPhone: string
    createdAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    age?: IntFieldUpdateOperationsInput | number
    ageUnit?: EnumAgeUnitFieldUpdateOperationsInput | $Enums.AgeUnit
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    age?: IntFieldUpdateOperationsInput | number
    ageUnit?: EnumAgeUnitFieldUpdateOperationsInput | $Enums.AgeUnit
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicCreateInput = {
    id?: string
    name: string
    cnpj: string
    address: string
    city: string
    state: string
    createdAt?: Date | string
    reports?: ReportCreateNestedManyWithoutClinicInput
    payments?: PaymentCreateNestedManyWithoutClinicInput
    transactions?: FinancialTransactionCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateInput = {
    id?: string
    name: string
    cnpj: string
    address: string
    city: string
    state: string
    createdAt?: Date | string
    reports?: ReportUncheckedCreateNestedManyWithoutClinicInput
    payments?: PaymentUncheckedCreateNestedManyWithoutClinicInput
    transactions?: FinancialTransactionUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUpdateManyWithoutClinicNestedInput
    payments?: PaymentUpdateManyWithoutClinicNestedInput
    transactions?: FinancialTransactionUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUncheckedUpdateManyWithoutClinicNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutClinicNestedInput
    transactions?: FinancialTransactionUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type ClinicCreateManyInput = {
    id?: string
    name: string
    cnpj: string
    address: string
    city: string
    state: string
    createdAt?: Date | string
  }

  export type ClinicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    type: $Enums.ExamType
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt?: Date | string
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
    images?: ReportImageCreateNestedManyWithoutReportInput
    measurements?: MeasurementCreateNestedManyWithoutReportInput
    payment?: PaymentCreateNestedOneWithoutReportInput
    patient: PatientCreateNestedOneWithoutReportsInput
    clinic: ClinicCreateNestedOneWithoutReportsInput
    transactions?: FinancialTransactionCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    patientId: string
    clinicId: string
    type: $Enums.ExamType
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt?: Date | string
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
    images?: ReportImageUncheckedCreateNestedManyWithoutReportInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutReportInput
    payment?: PaymentUncheckedCreateNestedOneWithoutReportInput
    transactions?: FinancialTransactionUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    images?: ReportImageUpdateManyWithoutReportNestedInput
    measurements?: MeasurementUpdateManyWithoutReportNestedInput
    payment?: PaymentUpdateOneWithoutReportNestedInput
    patient?: PatientUpdateOneRequiredWithoutReportsNestedInput
    clinic?: ClinicUpdateOneRequiredWithoutReportsNestedInput
    transactions?: FinancialTransactionUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    images?: ReportImageUncheckedUpdateManyWithoutReportNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutReportNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutReportNestedInput
    transactions?: FinancialTransactionUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportCreateManyInput = {
    id?: string
    patientId: string
    clinicId: string
    type: $Enums.ExamType
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt?: Date | string
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
  }

  export type ReportImageCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    report: ReportCreateNestedOneWithoutImagesInput
  }

  export type ReportImageUncheckedCreateInput = {
    id?: string
    reportId: string
    url: string
    createdAt?: Date | string
  }

  export type ReportImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ReportImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportImageCreateManyInput = {
    id?: string
    reportId: string
    url: string
    createdAt?: Date | string
  }

  export type ReportImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementCreateInput = {
    id?: string
    organ: string
    value: string
    report: ReportCreateNestedOneWithoutMeasurementsInput
  }

  export type MeasurementUncheckedCreateInput = {
    id?: string
    organ: string
    value: string
    reportId: string
  }

  export type MeasurementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organ?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    report?: ReportUpdateOneRequiredWithoutMeasurementsNestedInput
  }

  export type MeasurementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organ?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
  }

  export type MeasurementCreateManyInput = {
    id?: string
    organ: string
    value: string
    reportId: string
  }

  export type MeasurementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organ?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type MeasurementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organ?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
  }

  export type TextTemplateCreateInput = {
    id?: string
    title: string
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    content: string
    createdAt?: Date | string
  }

  export type TextTemplateUncheckedCreateInput = {
    id?: string
    title: string
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    content: string
    createdAt?: Date | string
  }

  export type TextTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TextTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TextTemplateCreateManyInput = {
    id?: string
    title: string
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    content: string
    createdAt?: Date | string
  }

  export type TextTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TextTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConclusionTemplateCreateInput = {
    id?: string
    title: string
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    content: string
    createdAt?: Date | string
  }

  export type ConclusionTemplateUncheckedCreateInput = {
    id?: string
    title: string
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    content: string
    createdAt?: Date | string
  }

  export type ConclusionTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConclusionTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConclusionTemplateCreateManyInput = {
    id?: string
    title: string
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    content: string
    createdAt?: Date | string
  }

  export type ConclusionTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConclusionTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    method: $Enums.PaymentMethod
    source: $Enums.PaymentSource
    date: Date | string
    status: $Enums.TransactionStatus
    report: ReportCreateNestedOneWithoutPaymentInput
    clinic?: ClinicCreateNestedOneWithoutPaymentsInput
    patient?: PatientCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    reportId: string
    amount: number
    method: $Enums.PaymentMethod
    source: $Enums.PaymentSource
    sourceId: string
    date: Date | string
    status: $Enums.TransactionStatus
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    source?: EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    report?: ReportUpdateOneRequiredWithoutPaymentNestedInput
    clinic?: ClinicUpdateOneWithoutPaymentsNestedInput
    patient?: PatientUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    source?: EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource
    sourceId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type PaymentCreateManyInput = {
    id?: string
    reportId: string
    amount: number
    method: $Enums.PaymentMethod
    source: $Enums.PaymentSource
    sourceId: string
    date: Date | string
    status: $Enums.TransactionStatus
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    source?: EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    source?: EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource
    sourceId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type FinancialTransactionCreateInput = {
    id?: string
    type: $Enums.TransactionType
    category: string
    description: string
    amount: number
    date: Date | string
    paymentMethod?: string | null
    status: $Enums.TransactionStatus
    report?: ReportCreateNestedOneWithoutTransactionsInput
    clinic?: ClinicCreateNestedOneWithoutTransactionsInput
    patient?: PatientCreateNestedOneWithoutFinancialTransactionsInput
  }

  export type FinancialTransactionUncheckedCreateInput = {
    id?: string
    type: $Enums.TransactionType
    category: string
    description: string
    amount: number
    date: Date | string
    relatedReportId?: string | null
    relatedClinicId?: string | null
    relatedPatientId?: string | null
    paymentMethod?: string | null
    status: $Enums.TransactionStatus
  }

  export type FinancialTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    report?: ReportUpdateOneWithoutTransactionsNestedInput
    clinic?: ClinicUpdateOneWithoutTransactionsNestedInput
    patient?: PatientUpdateOneWithoutFinancialTransactionsNestedInput
  }

  export type FinancialTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedReportId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedClinicId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedPatientId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type FinancialTransactionCreateManyInput = {
    id?: string
    type: $Enums.TransactionType
    category: string
    description: string
    amount: number
    date: Date | string
    relatedReportId?: string | null
    relatedClinicId?: string | null
    relatedPatientId?: string | null
    paymentMethod?: string | null
    status: $Enums.TransactionStatus
  }

  export type FinancialTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type FinancialTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedReportId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedClinicId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedPatientId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    CRMV?: SortOrder
    phone?: SortOrder
    instagramHandle?: SortOrder
    instagramURL?: SortOrder
    twitterHandle?: SortOrder
    twitterURL?: SortOrder
    websiteHandle?: SortOrder
    websiteURL?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    profilePictureURL?: SortOrder
    logoPictureURL?: SortOrder
    signaturePictureURL?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    CRMV?: SortOrder
    phone?: SortOrder
    instagramHandle?: SortOrder
    instagramURL?: SortOrder
    twitterHandle?: SortOrder
    twitterURL?: SortOrder
    websiteHandle?: SortOrder
    websiteURL?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    profilePictureURL?: SortOrder
    logoPictureURL?: SortOrder
    signaturePictureURL?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    CRMV?: SortOrder
    phone?: SortOrder
    instagramHandle?: SortOrder
    instagramURL?: SortOrder
    twitterHandle?: SortOrder
    twitterURL?: SortOrder
    websiteHandle?: SortOrder
    websiteURL?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    profilePictureURL?: SortOrder
    logoPictureURL?: SortOrder
    signaturePictureURL?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSexFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexFilter<$PrismaModel> | $Enums.Sex
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumAgeUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeUnit | EnumAgeUnitFieldRefInput<$PrismaModel>
    in?: $Enums.AgeUnit[] | ListEnumAgeUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeUnit[] | ListEnumAgeUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeUnitFilter<$PrismaModel> | $Enums.AgeUnit
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type FinancialTransactionListRelationFilter = {
    every?: FinancialTransactionWhereInput
    some?: FinancialTransactionWhereInput
    none?: FinancialTransactionWhereInput
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinancialTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    sex?: SortOrder
    age?: SortOrder
    ageUnit?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    sex?: SortOrder
    age?: SortOrder
    ageUnit?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    sex?: SortOrder
    age?: SortOrder
    ageUnit?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type EnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | $Enums.Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumAgeUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeUnit | EnumAgeUnitFieldRefInput<$PrismaModel>
    in?: $Enums.AgeUnit[] | ListEnumAgeUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeUnit[] | ListEnumAgeUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeUnitWithAggregatesFilter<$PrismaModel> | $Enums.AgeUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgeUnitFilter<$PrismaModel>
    _max?: NestedEnumAgeUnitFilter<$PrismaModel>
  }

  export type ClinicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
  }

  export type ClinicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
  }

  export type ClinicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumExamTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamType | EnumExamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExamType[] | ListEnumExamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamType[] | ListEnumExamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExamTypeFilter<$PrismaModel> | $Enums.ExamType
  }

  export type EnumUltrasoundCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UltrasoundCategory | EnumUltrasoundCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.UltrasoundCategory[] | ListEnumUltrasoundCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UltrasoundCategory[] | ListEnumUltrasoundCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUltrasoundCategoryNullableFilter<$PrismaModel> | $Enums.UltrasoundCategory | null
  }

  export type EnumXRayCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.XRayCategory | EnumXRayCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.XRayCategory[] | ListEnumXRayCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.XRayCategory[] | ListEnumXRayCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumXRayCategoryNullableFilter<$PrismaModel> | $Enums.XRayCategory | null
  }

  export type EnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
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

  export type ReportImageListRelationFilter = {
    every?: ReportImageWhereInput
    some?: ReportImageWhereInput
    none?: ReportImageWhereInput
  }

  export type MeasurementListRelationFilter = {
    every?: MeasurementWhereInput
    some?: MeasurementWhereInput
    none?: MeasurementWhereInput
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type ClinicScalarRelationFilter = {
    is?: ClinicWhereInput
    isNot?: ClinicWhereInput
  }

  export type ReportImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeasurementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    clinicId?: SortOrder
    type?: SortOrder
    categoryUltrasound?: SortOrder
    categoryXRay?: SortOrder
    findings?: SortOrder
    conclusion?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    baseValue?: SortOrder
    additionalValue?: SortOrder
    code?: SortOrder
  }

  export type ReportAvgOrderByAggregateInput = {
    baseValue?: SortOrder
    additionalValue?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    clinicId?: SortOrder
    type?: SortOrder
    categoryUltrasound?: SortOrder
    categoryXRay?: SortOrder
    findings?: SortOrder
    conclusion?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    baseValue?: SortOrder
    additionalValue?: SortOrder
    code?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    clinicId?: SortOrder
    type?: SortOrder
    categoryUltrasound?: SortOrder
    categoryXRay?: SortOrder
    findings?: SortOrder
    conclusion?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    baseValue?: SortOrder
    additionalValue?: SortOrder
    code?: SortOrder
  }

  export type ReportSumOrderByAggregateInput = {
    baseValue?: SortOrder
    additionalValue?: SortOrder
  }

  export type EnumExamTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamType | EnumExamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExamType[] | ListEnumExamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamType[] | ListEnumExamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExamTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExamType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExamTypeFilter<$PrismaModel>
    _max?: NestedEnumExamTypeFilter<$PrismaModel>
  }

  export type EnumUltrasoundCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UltrasoundCategory | EnumUltrasoundCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.UltrasoundCategory[] | ListEnumUltrasoundCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UltrasoundCategory[] | ListEnumUltrasoundCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUltrasoundCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.UltrasoundCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUltrasoundCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumUltrasoundCategoryNullableFilter<$PrismaModel>
  }

  export type EnumXRayCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.XRayCategory | EnumXRayCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.XRayCategory[] | ListEnumXRayCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.XRayCategory[] | ListEnumXRayCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumXRayCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.XRayCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumXRayCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumXRayCategoryNullableFilter<$PrismaModel>
  }

  export type EnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
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

  export type ReportScalarRelationFilter = {
    is?: ReportWhereInput
    isNot?: ReportWhereInput
  }

  export type ReportImageCountOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportImageMaxOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportImageMinOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type MeasurementCountOrderByAggregateInput = {
    id?: SortOrder
    organ?: SortOrder
    value?: SortOrder
    reportId?: SortOrder
  }

  export type MeasurementMaxOrderByAggregateInput = {
    id?: SortOrder
    organ?: SortOrder
    value?: SortOrder
    reportId?: SortOrder
  }

  export type MeasurementMinOrderByAggregateInput = {
    id?: SortOrder
    organ?: SortOrder
    value?: SortOrder
    reportId?: SortOrder
  }

  export type TextTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoryUltrasound?: SortOrder
    categoryXRay?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type TextTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoryUltrasound?: SortOrder
    categoryXRay?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type TextTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoryUltrasound?: SortOrder
    categoryXRay?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ConclusionTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoryUltrasound?: SortOrder
    categoryXRay?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ConclusionTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoryUltrasound?: SortOrder
    categoryXRay?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ConclusionTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoryUltrasound?: SortOrder
    categoryXRay?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentSource | EnumPaymentSourceFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentSource[] | ListEnumPaymentSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentSource[] | ListEnumPaymentSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentSourceFilter<$PrismaModel> | $Enums.PaymentSource
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type ClinicNullableScalarRelationFilter = {
    is?: ClinicWhereInput | null
    isNot?: ClinicWhereInput | null
  }

  export type PatientNullableScalarRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentSource | EnumPaymentSourceFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentSource[] | ListEnumPaymentSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentSource[] | ListEnumPaymentSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentSourceWithAggregatesFilter<$PrismaModel> | $Enums.PaymentSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentSourceFilter<$PrismaModel>
    _max?: NestedEnumPaymentSourceFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type ReportNullableScalarRelationFilter = {
    is?: ReportWhereInput | null
    isNot?: ReportWhereInput | null
  }

  export type FinancialTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    relatedReportId?: SortOrder
    relatedClinicId?: SortOrder
    relatedPatientId?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
  }

  export type FinancialTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FinancialTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    relatedReportId?: SortOrder
    relatedClinicId?: SortOrder
    relatedPatientId?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
  }

  export type FinancialTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    relatedReportId?: SortOrder
    relatedClinicId?: SortOrder
    relatedPatientId?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
  }

  export type FinancialTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type ReportCreateNestedManyWithoutPatientInput = {
    create?: XOR<ReportCreateWithoutPatientInput, ReportUncheckedCreateWithoutPatientInput> | ReportCreateWithoutPatientInput[] | ReportUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutPatientInput | ReportCreateOrConnectWithoutPatientInput[]
    createMany?: ReportCreateManyPatientInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutPatientInput = {
    create?: XOR<PaymentCreateWithoutPatientInput, PaymentUncheckedCreateWithoutPatientInput> | PaymentCreateWithoutPatientInput[] | PaymentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPatientInput | PaymentCreateOrConnectWithoutPatientInput[]
    createMany?: PaymentCreateManyPatientInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FinancialTransactionCreateNestedManyWithoutPatientInput = {
    create?: XOR<FinancialTransactionCreateWithoutPatientInput, FinancialTransactionUncheckedCreateWithoutPatientInput> | FinancialTransactionCreateWithoutPatientInput[] | FinancialTransactionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutPatientInput | FinancialTransactionCreateOrConnectWithoutPatientInput[]
    createMany?: FinancialTransactionCreateManyPatientInputEnvelope
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<ReportCreateWithoutPatientInput, ReportUncheckedCreateWithoutPatientInput> | ReportCreateWithoutPatientInput[] | ReportUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutPatientInput | ReportCreateOrConnectWithoutPatientInput[]
    createMany?: ReportCreateManyPatientInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PaymentCreateWithoutPatientInput, PaymentUncheckedCreateWithoutPatientInput> | PaymentCreateWithoutPatientInput[] | PaymentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPatientInput | PaymentCreateOrConnectWithoutPatientInput[]
    createMany?: PaymentCreateManyPatientInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FinancialTransactionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<FinancialTransactionCreateWithoutPatientInput, FinancialTransactionUncheckedCreateWithoutPatientInput> | FinancialTransactionCreateWithoutPatientInput[] | FinancialTransactionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutPatientInput | FinancialTransactionCreateOrConnectWithoutPatientInput[]
    createMany?: FinancialTransactionCreateManyPatientInputEnvelope
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
  }

  export type EnumSexFieldUpdateOperationsInput = {
    set?: $Enums.Sex
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAgeUnitFieldUpdateOperationsInput = {
    set?: $Enums.AgeUnit
  }

  export type ReportUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ReportCreateWithoutPatientInput, ReportUncheckedCreateWithoutPatientInput> | ReportCreateWithoutPatientInput[] | ReportUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutPatientInput | ReportCreateOrConnectWithoutPatientInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutPatientInput | ReportUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ReportCreateManyPatientInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutPatientInput | ReportUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutPatientInput | ReportUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PaymentCreateWithoutPatientInput, PaymentUncheckedCreateWithoutPatientInput> | PaymentCreateWithoutPatientInput[] | PaymentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPatientInput | PaymentCreateOrConnectWithoutPatientInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPatientInput | PaymentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PaymentCreateManyPatientInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPatientInput | PaymentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPatientInput | PaymentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type FinancialTransactionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<FinancialTransactionCreateWithoutPatientInput, FinancialTransactionUncheckedCreateWithoutPatientInput> | FinancialTransactionCreateWithoutPatientInput[] | FinancialTransactionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutPatientInput | FinancialTransactionCreateOrConnectWithoutPatientInput[]
    upsert?: FinancialTransactionUpsertWithWhereUniqueWithoutPatientInput | FinancialTransactionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: FinancialTransactionCreateManyPatientInputEnvelope
    set?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    disconnect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    delete?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    update?: FinancialTransactionUpdateWithWhereUniqueWithoutPatientInput | FinancialTransactionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: FinancialTransactionUpdateManyWithWhereWithoutPatientInput | FinancialTransactionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: FinancialTransactionScalarWhereInput | FinancialTransactionScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ReportCreateWithoutPatientInput, ReportUncheckedCreateWithoutPatientInput> | ReportCreateWithoutPatientInput[] | ReportUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutPatientInput | ReportCreateOrConnectWithoutPatientInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutPatientInput | ReportUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ReportCreateManyPatientInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutPatientInput | ReportUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutPatientInput | ReportUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PaymentCreateWithoutPatientInput, PaymentUncheckedCreateWithoutPatientInput> | PaymentCreateWithoutPatientInput[] | PaymentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPatientInput | PaymentCreateOrConnectWithoutPatientInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPatientInput | PaymentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PaymentCreateManyPatientInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPatientInput | PaymentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPatientInput | PaymentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type FinancialTransactionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<FinancialTransactionCreateWithoutPatientInput, FinancialTransactionUncheckedCreateWithoutPatientInput> | FinancialTransactionCreateWithoutPatientInput[] | FinancialTransactionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutPatientInput | FinancialTransactionCreateOrConnectWithoutPatientInput[]
    upsert?: FinancialTransactionUpsertWithWhereUniqueWithoutPatientInput | FinancialTransactionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: FinancialTransactionCreateManyPatientInputEnvelope
    set?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    disconnect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    delete?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    update?: FinancialTransactionUpdateWithWhereUniqueWithoutPatientInput | FinancialTransactionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: FinancialTransactionUpdateManyWithWhereWithoutPatientInput | FinancialTransactionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: FinancialTransactionScalarWhereInput | FinancialTransactionScalarWhereInput[]
  }

  export type ReportCreateNestedManyWithoutClinicInput = {
    create?: XOR<ReportCreateWithoutClinicInput, ReportUncheckedCreateWithoutClinicInput> | ReportCreateWithoutClinicInput[] | ReportUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutClinicInput | ReportCreateOrConnectWithoutClinicInput[]
    createMany?: ReportCreateManyClinicInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutClinicInput = {
    create?: XOR<PaymentCreateWithoutClinicInput, PaymentUncheckedCreateWithoutClinicInput> | PaymentCreateWithoutClinicInput[] | PaymentUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutClinicInput | PaymentCreateOrConnectWithoutClinicInput[]
    createMany?: PaymentCreateManyClinicInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FinancialTransactionCreateNestedManyWithoutClinicInput = {
    create?: XOR<FinancialTransactionCreateWithoutClinicInput, FinancialTransactionUncheckedCreateWithoutClinicInput> | FinancialTransactionCreateWithoutClinicInput[] | FinancialTransactionUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutClinicInput | FinancialTransactionCreateOrConnectWithoutClinicInput[]
    createMany?: FinancialTransactionCreateManyClinicInputEnvelope
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<ReportCreateWithoutClinicInput, ReportUncheckedCreateWithoutClinicInput> | ReportCreateWithoutClinicInput[] | ReportUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutClinicInput | ReportCreateOrConnectWithoutClinicInput[]
    createMany?: ReportCreateManyClinicInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<PaymentCreateWithoutClinicInput, PaymentUncheckedCreateWithoutClinicInput> | PaymentCreateWithoutClinicInput[] | PaymentUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutClinicInput | PaymentCreateOrConnectWithoutClinicInput[]
    createMany?: PaymentCreateManyClinicInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FinancialTransactionUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<FinancialTransactionCreateWithoutClinicInput, FinancialTransactionUncheckedCreateWithoutClinicInput> | FinancialTransactionCreateWithoutClinicInput[] | FinancialTransactionUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutClinicInput | FinancialTransactionCreateOrConnectWithoutClinicInput[]
    createMany?: FinancialTransactionCreateManyClinicInputEnvelope
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
  }

  export type ReportUpdateManyWithoutClinicNestedInput = {
    create?: XOR<ReportCreateWithoutClinicInput, ReportUncheckedCreateWithoutClinicInput> | ReportCreateWithoutClinicInput[] | ReportUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutClinicInput | ReportCreateOrConnectWithoutClinicInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutClinicInput | ReportUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: ReportCreateManyClinicInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutClinicInput | ReportUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutClinicInput | ReportUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutClinicNestedInput = {
    create?: XOR<PaymentCreateWithoutClinicInput, PaymentUncheckedCreateWithoutClinicInput> | PaymentCreateWithoutClinicInput[] | PaymentUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutClinicInput | PaymentCreateOrConnectWithoutClinicInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutClinicInput | PaymentUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: PaymentCreateManyClinicInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutClinicInput | PaymentUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutClinicInput | PaymentUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type FinancialTransactionUpdateManyWithoutClinicNestedInput = {
    create?: XOR<FinancialTransactionCreateWithoutClinicInput, FinancialTransactionUncheckedCreateWithoutClinicInput> | FinancialTransactionCreateWithoutClinicInput[] | FinancialTransactionUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutClinicInput | FinancialTransactionCreateOrConnectWithoutClinicInput[]
    upsert?: FinancialTransactionUpsertWithWhereUniqueWithoutClinicInput | FinancialTransactionUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: FinancialTransactionCreateManyClinicInputEnvelope
    set?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    disconnect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    delete?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    update?: FinancialTransactionUpdateWithWhereUniqueWithoutClinicInput | FinancialTransactionUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: FinancialTransactionUpdateManyWithWhereWithoutClinicInput | FinancialTransactionUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: FinancialTransactionScalarWhereInput | FinancialTransactionScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<ReportCreateWithoutClinicInput, ReportUncheckedCreateWithoutClinicInput> | ReportCreateWithoutClinicInput[] | ReportUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutClinicInput | ReportCreateOrConnectWithoutClinicInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutClinicInput | ReportUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: ReportCreateManyClinicInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutClinicInput | ReportUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutClinicInput | ReportUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<PaymentCreateWithoutClinicInput, PaymentUncheckedCreateWithoutClinicInput> | PaymentCreateWithoutClinicInput[] | PaymentUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutClinicInput | PaymentCreateOrConnectWithoutClinicInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutClinicInput | PaymentUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: PaymentCreateManyClinicInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutClinicInput | PaymentUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutClinicInput | PaymentUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type FinancialTransactionUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<FinancialTransactionCreateWithoutClinicInput, FinancialTransactionUncheckedCreateWithoutClinicInput> | FinancialTransactionCreateWithoutClinicInput[] | FinancialTransactionUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutClinicInput | FinancialTransactionCreateOrConnectWithoutClinicInput[]
    upsert?: FinancialTransactionUpsertWithWhereUniqueWithoutClinicInput | FinancialTransactionUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: FinancialTransactionCreateManyClinicInputEnvelope
    set?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    disconnect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    delete?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    update?: FinancialTransactionUpdateWithWhereUniqueWithoutClinicInput | FinancialTransactionUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: FinancialTransactionUpdateManyWithWhereWithoutClinicInput | FinancialTransactionUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: FinancialTransactionScalarWhereInput | FinancialTransactionScalarWhereInput[]
  }

  export type ReportImageCreateNestedManyWithoutReportInput = {
    create?: XOR<ReportImageCreateWithoutReportInput, ReportImageUncheckedCreateWithoutReportInput> | ReportImageCreateWithoutReportInput[] | ReportImageUncheckedCreateWithoutReportInput[]
    connectOrCreate?: ReportImageCreateOrConnectWithoutReportInput | ReportImageCreateOrConnectWithoutReportInput[]
    createMany?: ReportImageCreateManyReportInputEnvelope
    connect?: ReportImageWhereUniqueInput | ReportImageWhereUniqueInput[]
  }

  export type MeasurementCreateNestedManyWithoutReportInput = {
    create?: XOR<MeasurementCreateWithoutReportInput, MeasurementUncheckedCreateWithoutReportInput> | MeasurementCreateWithoutReportInput[] | MeasurementUncheckedCreateWithoutReportInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutReportInput | MeasurementCreateOrConnectWithoutReportInput[]
    createMany?: MeasurementCreateManyReportInputEnvelope
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
  }

  export type PaymentCreateNestedOneWithoutReportInput = {
    create?: XOR<PaymentCreateWithoutReportInput, PaymentUncheckedCreateWithoutReportInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutReportInput
    connect?: PaymentWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutReportsInput = {
    create?: XOR<PatientCreateWithoutReportsInput, PatientUncheckedCreateWithoutReportsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutReportsInput
    connect?: PatientWhereUniqueInput
  }

  export type ClinicCreateNestedOneWithoutReportsInput = {
    create?: XOR<ClinicCreateWithoutReportsInput, ClinicUncheckedCreateWithoutReportsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutReportsInput
    connect?: ClinicWhereUniqueInput
  }

  export type FinancialTransactionCreateNestedManyWithoutReportInput = {
    create?: XOR<FinancialTransactionCreateWithoutReportInput, FinancialTransactionUncheckedCreateWithoutReportInput> | FinancialTransactionCreateWithoutReportInput[] | FinancialTransactionUncheckedCreateWithoutReportInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutReportInput | FinancialTransactionCreateOrConnectWithoutReportInput[]
    createMany?: FinancialTransactionCreateManyReportInputEnvelope
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
  }

  export type ReportImageUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<ReportImageCreateWithoutReportInput, ReportImageUncheckedCreateWithoutReportInput> | ReportImageCreateWithoutReportInput[] | ReportImageUncheckedCreateWithoutReportInput[]
    connectOrCreate?: ReportImageCreateOrConnectWithoutReportInput | ReportImageCreateOrConnectWithoutReportInput[]
    createMany?: ReportImageCreateManyReportInputEnvelope
    connect?: ReportImageWhereUniqueInput | ReportImageWhereUniqueInput[]
  }

  export type MeasurementUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<MeasurementCreateWithoutReportInput, MeasurementUncheckedCreateWithoutReportInput> | MeasurementCreateWithoutReportInput[] | MeasurementUncheckedCreateWithoutReportInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutReportInput | MeasurementCreateOrConnectWithoutReportInput[]
    createMany?: MeasurementCreateManyReportInputEnvelope
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedOneWithoutReportInput = {
    create?: XOR<PaymentCreateWithoutReportInput, PaymentUncheckedCreateWithoutReportInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutReportInput
    connect?: PaymentWhereUniqueInput
  }

  export type FinancialTransactionUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<FinancialTransactionCreateWithoutReportInput, FinancialTransactionUncheckedCreateWithoutReportInput> | FinancialTransactionCreateWithoutReportInput[] | FinancialTransactionUncheckedCreateWithoutReportInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutReportInput | FinancialTransactionCreateOrConnectWithoutReportInput[]
    createMany?: FinancialTransactionCreateManyReportInputEnvelope
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
  }

  export type EnumExamTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExamType
  }

  export type NullableEnumUltrasoundCategoryFieldUpdateOperationsInput = {
    set?: $Enums.UltrasoundCategory | null
  }

  export type NullableEnumXRayCategoryFieldUpdateOperationsInput = {
    set?: $Enums.XRayCategory | null
  }

  export type EnumReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReportStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReportImageUpdateManyWithoutReportNestedInput = {
    create?: XOR<ReportImageCreateWithoutReportInput, ReportImageUncheckedCreateWithoutReportInput> | ReportImageCreateWithoutReportInput[] | ReportImageUncheckedCreateWithoutReportInput[]
    connectOrCreate?: ReportImageCreateOrConnectWithoutReportInput | ReportImageCreateOrConnectWithoutReportInput[]
    upsert?: ReportImageUpsertWithWhereUniqueWithoutReportInput | ReportImageUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: ReportImageCreateManyReportInputEnvelope
    set?: ReportImageWhereUniqueInput | ReportImageWhereUniqueInput[]
    disconnect?: ReportImageWhereUniqueInput | ReportImageWhereUniqueInput[]
    delete?: ReportImageWhereUniqueInput | ReportImageWhereUniqueInput[]
    connect?: ReportImageWhereUniqueInput | ReportImageWhereUniqueInput[]
    update?: ReportImageUpdateWithWhereUniqueWithoutReportInput | ReportImageUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: ReportImageUpdateManyWithWhereWithoutReportInput | ReportImageUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: ReportImageScalarWhereInput | ReportImageScalarWhereInput[]
  }

  export type MeasurementUpdateManyWithoutReportNestedInput = {
    create?: XOR<MeasurementCreateWithoutReportInput, MeasurementUncheckedCreateWithoutReportInput> | MeasurementCreateWithoutReportInput[] | MeasurementUncheckedCreateWithoutReportInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutReportInput | MeasurementCreateOrConnectWithoutReportInput[]
    upsert?: MeasurementUpsertWithWhereUniqueWithoutReportInput | MeasurementUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: MeasurementCreateManyReportInputEnvelope
    set?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    disconnect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    delete?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    update?: MeasurementUpdateWithWhereUniqueWithoutReportInput | MeasurementUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: MeasurementUpdateManyWithWhereWithoutReportInput | MeasurementUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
  }

  export type PaymentUpdateOneWithoutReportNestedInput = {
    create?: XOR<PaymentCreateWithoutReportInput, PaymentUncheckedCreateWithoutReportInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutReportInput
    upsert?: PaymentUpsertWithoutReportInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutReportInput, PaymentUpdateWithoutReportInput>, PaymentUncheckedUpdateWithoutReportInput>
  }

  export type PatientUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<PatientCreateWithoutReportsInput, PatientUncheckedCreateWithoutReportsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutReportsInput
    upsert?: PatientUpsertWithoutReportsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutReportsInput, PatientUpdateWithoutReportsInput>, PatientUncheckedUpdateWithoutReportsInput>
  }

  export type ClinicUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<ClinicCreateWithoutReportsInput, ClinicUncheckedCreateWithoutReportsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutReportsInput
    upsert?: ClinicUpsertWithoutReportsInput
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutReportsInput, ClinicUpdateWithoutReportsInput>, ClinicUncheckedUpdateWithoutReportsInput>
  }

  export type FinancialTransactionUpdateManyWithoutReportNestedInput = {
    create?: XOR<FinancialTransactionCreateWithoutReportInput, FinancialTransactionUncheckedCreateWithoutReportInput> | FinancialTransactionCreateWithoutReportInput[] | FinancialTransactionUncheckedCreateWithoutReportInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutReportInput | FinancialTransactionCreateOrConnectWithoutReportInput[]
    upsert?: FinancialTransactionUpsertWithWhereUniqueWithoutReportInput | FinancialTransactionUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: FinancialTransactionCreateManyReportInputEnvelope
    set?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    disconnect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    delete?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    update?: FinancialTransactionUpdateWithWhereUniqueWithoutReportInput | FinancialTransactionUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: FinancialTransactionUpdateManyWithWhereWithoutReportInput | FinancialTransactionUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: FinancialTransactionScalarWhereInput | FinancialTransactionScalarWhereInput[]
  }

  export type ReportImageUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<ReportImageCreateWithoutReportInput, ReportImageUncheckedCreateWithoutReportInput> | ReportImageCreateWithoutReportInput[] | ReportImageUncheckedCreateWithoutReportInput[]
    connectOrCreate?: ReportImageCreateOrConnectWithoutReportInput | ReportImageCreateOrConnectWithoutReportInput[]
    upsert?: ReportImageUpsertWithWhereUniqueWithoutReportInput | ReportImageUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: ReportImageCreateManyReportInputEnvelope
    set?: ReportImageWhereUniqueInput | ReportImageWhereUniqueInput[]
    disconnect?: ReportImageWhereUniqueInput | ReportImageWhereUniqueInput[]
    delete?: ReportImageWhereUniqueInput | ReportImageWhereUniqueInput[]
    connect?: ReportImageWhereUniqueInput | ReportImageWhereUniqueInput[]
    update?: ReportImageUpdateWithWhereUniqueWithoutReportInput | ReportImageUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: ReportImageUpdateManyWithWhereWithoutReportInput | ReportImageUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: ReportImageScalarWhereInput | ReportImageScalarWhereInput[]
  }

  export type MeasurementUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<MeasurementCreateWithoutReportInput, MeasurementUncheckedCreateWithoutReportInput> | MeasurementCreateWithoutReportInput[] | MeasurementUncheckedCreateWithoutReportInput[]
    connectOrCreate?: MeasurementCreateOrConnectWithoutReportInput | MeasurementCreateOrConnectWithoutReportInput[]
    upsert?: MeasurementUpsertWithWhereUniqueWithoutReportInput | MeasurementUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: MeasurementCreateManyReportInputEnvelope
    set?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    disconnect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    delete?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    connect?: MeasurementWhereUniqueInput | MeasurementWhereUniqueInput[]
    update?: MeasurementUpdateWithWhereUniqueWithoutReportInput | MeasurementUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: MeasurementUpdateManyWithWhereWithoutReportInput | MeasurementUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateOneWithoutReportNestedInput = {
    create?: XOR<PaymentCreateWithoutReportInput, PaymentUncheckedCreateWithoutReportInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutReportInput
    upsert?: PaymentUpsertWithoutReportInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutReportInput, PaymentUpdateWithoutReportInput>, PaymentUncheckedUpdateWithoutReportInput>
  }

  export type FinancialTransactionUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<FinancialTransactionCreateWithoutReportInput, FinancialTransactionUncheckedCreateWithoutReportInput> | FinancialTransactionCreateWithoutReportInput[] | FinancialTransactionUncheckedCreateWithoutReportInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutReportInput | FinancialTransactionCreateOrConnectWithoutReportInput[]
    upsert?: FinancialTransactionUpsertWithWhereUniqueWithoutReportInput | FinancialTransactionUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: FinancialTransactionCreateManyReportInputEnvelope
    set?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    disconnect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    delete?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    update?: FinancialTransactionUpdateWithWhereUniqueWithoutReportInput | FinancialTransactionUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: FinancialTransactionUpdateManyWithWhereWithoutReportInput | FinancialTransactionUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: FinancialTransactionScalarWhereInput | FinancialTransactionScalarWhereInput[]
  }

  export type ReportCreateNestedOneWithoutImagesInput = {
    create?: XOR<ReportCreateWithoutImagesInput, ReportUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ReportCreateOrConnectWithoutImagesInput
    connect?: ReportWhereUniqueInput
  }

  export type ReportUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ReportCreateWithoutImagesInput, ReportUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ReportCreateOrConnectWithoutImagesInput
    upsert?: ReportUpsertWithoutImagesInput
    connect?: ReportWhereUniqueInput
    update?: XOR<XOR<ReportUpdateToOneWithWhereWithoutImagesInput, ReportUpdateWithoutImagesInput>, ReportUncheckedUpdateWithoutImagesInput>
  }

  export type ReportCreateNestedOneWithoutMeasurementsInput = {
    create?: XOR<ReportCreateWithoutMeasurementsInput, ReportUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: ReportCreateOrConnectWithoutMeasurementsInput
    connect?: ReportWhereUniqueInput
  }

  export type ReportUpdateOneRequiredWithoutMeasurementsNestedInput = {
    create?: XOR<ReportCreateWithoutMeasurementsInput, ReportUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: ReportCreateOrConnectWithoutMeasurementsInput
    upsert?: ReportUpsertWithoutMeasurementsInput
    connect?: ReportWhereUniqueInput
    update?: XOR<XOR<ReportUpdateToOneWithWhereWithoutMeasurementsInput, ReportUpdateWithoutMeasurementsInput>, ReportUncheckedUpdateWithoutMeasurementsInput>
  }

  export type ReportCreateNestedOneWithoutPaymentInput = {
    create?: XOR<ReportCreateWithoutPaymentInput, ReportUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: ReportCreateOrConnectWithoutPaymentInput
    connect?: ReportWhereUniqueInput
  }

  export type ClinicCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ClinicCreateWithoutPaymentsInput, ClinicUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutPaymentsInput
    connect?: ClinicWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutPaymentInput = {
    create?: XOR<PatientCreateWithoutPaymentInput, PatientUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPaymentInput
    connect?: PatientWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentSourceFieldUpdateOperationsInput = {
    set?: $Enums.PaymentSource
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type ReportUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<ReportCreateWithoutPaymentInput, ReportUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: ReportCreateOrConnectWithoutPaymentInput
    upsert?: ReportUpsertWithoutPaymentInput
    connect?: ReportWhereUniqueInput
    update?: XOR<XOR<ReportUpdateToOneWithWhereWithoutPaymentInput, ReportUpdateWithoutPaymentInput>, ReportUncheckedUpdateWithoutPaymentInput>
  }

  export type ClinicUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<ClinicCreateWithoutPaymentsInput, ClinicUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutPaymentsInput
    upsert?: ClinicUpsertWithoutPaymentsInput
    disconnect?: ClinicWhereInput | boolean
    delete?: ClinicWhereInput | boolean
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutPaymentsInput, ClinicUpdateWithoutPaymentsInput>, ClinicUncheckedUpdateWithoutPaymentsInput>
  }

  export type PatientUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<PatientCreateWithoutPaymentInput, PatientUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPaymentInput
    upsert?: PatientUpsertWithoutPaymentInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutPaymentInput, PatientUpdateWithoutPaymentInput>, PatientUncheckedUpdateWithoutPaymentInput>
  }

  export type ReportCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ReportCreateWithoutTransactionsInput, ReportUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ReportCreateOrConnectWithoutTransactionsInput
    connect?: ReportWhereUniqueInput
  }

  export type ClinicCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ClinicCreateWithoutTransactionsInput, ClinicUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutTransactionsInput
    connect?: ClinicWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutFinancialTransactionsInput = {
    create?: XOR<PatientCreateWithoutFinancialTransactionsInput, PatientUncheckedCreateWithoutFinancialTransactionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutFinancialTransactionsInput
    connect?: PatientWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type ReportUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<ReportCreateWithoutTransactionsInput, ReportUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ReportCreateOrConnectWithoutTransactionsInput
    upsert?: ReportUpsertWithoutTransactionsInput
    disconnect?: ReportWhereInput | boolean
    delete?: ReportWhereInput | boolean
    connect?: ReportWhereUniqueInput
    update?: XOR<XOR<ReportUpdateToOneWithWhereWithoutTransactionsInput, ReportUpdateWithoutTransactionsInput>, ReportUncheckedUpdateWithoutTransactionsInput>
  }

  export type ClinicUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<ClinicCreateWithoutTransactionsInput, ClinicUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutTransactionsInput
    upsert?: ClinicUpsertWithoutTransactionsInput
    disconnect?: ClinicWhereInput | boolean
    delete?: ClinicWhereInput | boolean
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutTransactionsInput, ClinicUpdateWithoutTransactionsInput>, ClinicUncheckedUpdateWithoutTransactionsInput>
  }

  export type PatientUpdateOneWithoutFinancialTransactionsNestedInput = {
    create?: XOR<PatientCreateWithoutFinancialTransactionsInput, PatientUncheckedCreateWithoutFinancialTransactionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutFinancialTransactionsInput
    upsert?: PatientUpsertWithoutFinancialTransactionsInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutFinancialTransactionsInput, PatientUpdateWithoutFinancialTransactionsInput>, PatientUncheckedUpdateWithoutFinancialTransactionsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSexFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexFilter<$PrismaModel> | $Enums.Sex
  }

  export type NestedEnumAgeUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeUnit | EnumAgeUnitFieldRefInput<$PrismaModel>
    in?: $Enums.AgeUnit[] | ListEnumAgeUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeUnit[] | ListEnumAgeUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeUnitFilter<$PrismaModel> | $Enums.AgeUnit
  }

  export type NestedEnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | $Enums.Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedEnumAgeUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeUnit | EnumAgeUnitFieldRefInput<$PrismaModel>
    in?: $Enums.AgeUnit[] | ListEnumAgeUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeUnit[] | ListEnumAgeUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeUnitWithAggregatesFilter<$PrismaModel> | $Enums.AgeUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgeUnitFilter<$PrismaModel>
    _max?: NestedEnumAgeUnitFilter<$PrismaModel>
  }

  export type NestedEnumExamTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamType | EnumExamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExamType[] | ListEnumExamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamType[] | ListEnumExamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExamTypeFilter<$PrismaModel> | $Enums.ExamType
  }

  export type NestedEnumUltrasoundCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UltrasoundCategory | EnumUltrasoundCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.UltrasoundCategory[] | ListEnumUltrasoundCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UltrasoundCategory[] | ListEnumUltrasoundCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUltrasoundCategoryNullableFilter<$PrismaModel> | $Enums.UltrasoundCategory | null
  }

  export type NestedEnumXRayCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.XRayCategory | EnumXRayCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.XRayCategory[] | ListEnumXRayCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.XRayCategory[] | ListEnumXRayCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumXRayCategoryNullableFilter<$PrismaModel> | $Enums.XRayCategory | null
  }

  export type NestedEnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type NestedEnumExamTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamType | EnumExamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExamType[] | ListEnumExamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamType[] | ListEnumExamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExamTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExamType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExamTypeFilter<$PrismaModel>
    _max?: NestedEnumExamTypeFilter<$PrismaModel>
  }

  export type NestedEnumUltrasoundCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UltrasoundCategory | EnumUltrasoundCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.UltrasoundCategory[] | ListEnumUltrasoundCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UltrasoundCategory[] | ListEnumUltrasoundCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUltrasoundCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.UltrasoundCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUltrasoundCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumUltrasoundCategoryNullableFilter<$PrismaModel>
  }

  export type NestedEnumXRayCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.XRayCategory | EnumXRayCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.XRayCategory[] | ListEnumXRayCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.XRayCategory[] | ListEnumXRayCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumXRayCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.XRayCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumXRayCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumXRayCategoryNullableFilter<$PrismaModel>
  }

  export type NestedEnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
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

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentSource | EnumPaymentSourceFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentSource[] | ListEnumPaymentSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentSource[] | ListEnumPaymentSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentSourceFilter<$PrismaModel> | $Enums.PaymentSource
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentSource | EnumPaymentSourceFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentSource[] | ListEnumPaymentSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentSource[] | ListEnumPaymentSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentSourceWithAggregatesFilter<$PrismaModel> | $Enums.PaymentSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentSourceFilter<$PrismaModel>
    _max?: NestedEnumPaymentSourceFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    name: string
    cnpj?: string | null
    CRMV?: string | null
    phone?: string | null
    instagramHandle?: string | null
    instagramURL?: string | null
    twitterHandle?: string | null
    twitterURL?: string | null
    websiteHandle?: string | null
    websiteURL?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    profilePictureURL?: string | null
    logoPictureURL?: string | null
    signaturePictureURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    cnpj?: string | null
    CRMV?: string | null
    phone?: string | null
    instagramHandle?: string | null
    instagramURL?: string | null
    twitterHandle?: string | null
    twitterURL?: string | null
    websiteHandle?: string | null
    websiteURL?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    profilePictureURL?: string | null
    logoPictureURL?: string | null
    signaturePictureURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    CRMV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    instagramHandle?: NullableStringFieldUpdateOperationsInput | string | null
    instagramURL?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    twitterURL?: NullableStringFieldUpdateOperationsInput | string | null
    websiteHandle?: NullableStringFieldUpdateOperationsInput | string | null
    websiteURL?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    logoPictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    signaturePictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    CRMV?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    instagramHandle?: NullableStringFieldUpdateOperationsInput | string | null
    instagramURL?: NullableStringFieldUpdateOperationsInput | string | null
    twitterHandle?: NullableStringFieldUpdateOperationsInput | string | null
    twitterURL?: NullableStringFieldUpdateOperationsInput | string | null
    websiteHandle?: NullableStringFieldUpdateOperationsInput | string | null
    websiteURL?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    logoPictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    signaturePictureURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type ReportCreateWithoutPatientInput = {
    id?: string
    type: $Enums.ExamType
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt?: Date | string
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
    images?: ReportImageCreateNestedManyWithoutReportInput
    measurements?: MeasurementCreateNestedManyWithoutReportInput
    payment?: PaymentCreateNestedOneWithoutReportInput
    clinic: ClinicCreateNestedOneWithoutReportsInput
    transactions?: FinancialTransactionCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutPatientInput = {
    id?: string
    clinicId: string
    type: $Enums.ExamType
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt?: Date | string
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
    images?: ReportImageUncheckedCreateNestedManyWithoutReportInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutReportInput
    payment?: PaymentUncheckedCreateNestedOneWithoutReportInput
    transactions?: FinancialTransactionUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutPatientInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutPatientInput, ReportUncheckedCreateWithoutPatientInput>
  }

  export type ReportCreateManyPatientInputEnvelope = {
    data: ReportCreateManyPatientInput | ReportCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutPatientInput = {
    id?: string
    amount: number
    method: $Enums.PaymentMethod
    source: $Enums.PaymentSource
    date: Date | string
    status: $Enums.TransactionStatus
    report: ReportCreateNestedOneWithoutPaymentInput
    clinic?: ClinicCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutPatientInput = {
    id?: string
    reportId: string
    amount: number
    method: $Enums.PaymentMethod
    source: $Enums.PaymentSource
    date: Date | string
    status: $Enums.TransactionStatus
  }

  export type PaymentCreateOrConnectWithoutPatientInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPatientInput, PaymentUncheckedCreateWithoutPatientInput>
  }

  export type PaymentCreateManyPatientInputEnvelope = {
    data: PaymentCreateManyPatientInput | PaymentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type FinancialTransactionCreateWithoutPatientInput = {
    id?: string
    type: $Enums.TransactionType
    category: string
    description: string
    amount: number
    date: Date | string
    paymentMethod?: string | null
    status: $Enums.TransactionStatus
    report?: ReportCreateNestedOneWithoutTransactionsInput
    clinic?: ClinicCreateNestedOneWithoutTransactionsInput
  }

  export type FinancialTransactionUncheckedCreateWithoutPatientInput = {
    id?: string
    type: $Enums.TransactionType
    category: string
    description: string
    amount: number
    date: Date | string
    relatedReportId?: string | null
    relatedClinicId?: string | null
    paymentMethod?: string | null
    status: $Enums.TransactionStatus
  }

  export type FinancialTransactionCreateOrConnectWithoutPatientInput = {
    where: FinancialTransactionWhereUniqueInput
    create: XOR<FinancialTransactionCreateWithoutPatientInput, FinancialTransactionUncheckedCreateWithoutPatientInput>
  }

  export type FinancialTransactionCreateManyPatientInputEnvelope = {
    data: FinancialTransactionCreateManyPatientInput | FinancialTransactionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type ReportUpsertWithWhereUniqueWithoutPatientInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutPatientInput, ReportUncheckedUpdateWithoutPatientInput>
    create: XOR<ReportCreateWithoutPatientInput, ReportUncheckedCreateWithoutPatientInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutPatientInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutPatientInput, ReportUncheckedUpdateWithoutPatientInput>
  }

  export type ReportUpdateManyWithWhereWithoutPatientInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutPatientInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    patientId?: StringFilter<"Report"> | string
    clinicId?: StringFilter<"Report"> | string
    type?: EnumExamTypeFilter<"Report"> | $Enums.ExamType
    categoryUltrasound?: EnumUltrasoundCategoryNullableFilter<"Report"> | $Enums.UltrasoundCategory | null
    categoryXRay?: EnumXRayCategoryNullableFilter<"Report"> | $Enums.XRayCategory | null
    findings?: StringFilter<"Report"> | string
    conclusion?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    baseValue?: FloatFilter<"Report"> | number
    additionalValue?: FloatFilter<"Report"> | number
    code?: StringFilter<"Report"> | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutPatientInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutPatientInput, PaymentUncheckedUpdateWithoutPatientInput>
    create: XOR<PaymentCreateWithoutPatientInput, PaymentUncheckedCreateWithoutPatientInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutPatientInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutPatientInput, PaymentUncheckedUpdateWithoutPatientInput>
  }

  export type PaymentUpdateManyWithWhereWithoutPatientInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutPatientInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    reportId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    source?: EnumPaymentSourceFilter<"Payment"> | $Enums.PaymentSource
    sourceId?: StringFilter<"Payment"> | string
    date?: DateTimeFilter<"Payment"> | Date | string
    status?: EnumTransactionStatusFilter<"Payment"> | $Enums.TransactionStatus
  }

  export type FinancialTransactionUpsertWithWhereUniqueWithoutPatientInput = {
    where: FinancialTransactionWhereUniqueInput
    update: XOR<FinancialTransactionUpdateWithoutPatientInput, FinancialTransactionUncheckedUpdateWithoutPatientInput>
    create: XOR<FinancialTransactionCreateWithoutPatientInput, FinancialTransactionUncheckedCreateWithoutPatientInput>
  }

  export type FinancialTransactionUpdateWithWhereUniqueWithoutPatientInput = {
    where: FinancialTransactionWhereUniqueInput
    data: XOR<FinancialTransactionUpdateWithoutPatientInput, FinancialTransactionUncheckedUpdateWithoutPatientInput>
  }

  export type FinancialTransactionUpdateManyWithWhereWithoutPatientInput = {
    where: FinancialTransactionScalarWhereInput
    data: XOR<FinancialTransactionUpdateManyMutationInput, FinancialTransactionUncheckedUpdateManyWithoutPatientInput>
  }

  export type FinancialTransactionScalarWhereInput = {
    AND?: FinancialTransactionScalarWhereInput | FinancialTransactionScalarWhereInput[]
    OR?: FinancialTransactionScalarWhereInput[]
    NOT?: FinancialTransactionScalarWhereInput | FinancialTransactionScalarWhereInput[]
    id?: StringFilter<"FinancialTransaction"> | string
    type?: EnumTransactionTypeFilter<"FinancialTransaction"> | $Enums.TransactionType
    category?: StringFilter<"FinancialTransaction"> | string
    description?: StringFilter<"FinancialTransaction"> | string
    amount?: FloatFilter<"FinancialTransaction"> | number
    date?: DateTimeFilter<"FinancialTransaction"> | Date | string
    relatedReportId?: StringNullableFilter<"FinancialTransaction"> | string | null
    relatedClinicId?: StringNullableFilter<"FinancialTransaction"> | string | null
    relatedPatientId?: StringNullableFilter<"FinancialTransaction"> | string | null
    paymentMethod?: StringNullableFilter<"FinancialTransaction"> | string | null
    status?: EnumTransactionStatusFilter<"FinancialTransaction"> | $Enums.TransactionStatus
  }

  export type ReportCreateWithoutClinicInput = {
    id?: string
    type: $Enums.ExamType
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt?: Date | string
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
    images?: ReportImageCreateNestedManyWithoutReportInput
    measurements?: MeasurementCreateNestedManyWithoutReportInput
    payment?: PaymentCreateNestedOneWithoutReportInput
    patient: PatientCreateNestedOneWithoutReportsInput
    transactions?: FinancialTransactionCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutClinicInput = {
    id?: string
    patientId: string
    type: $Enums.ExamType
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt?: Date | string
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
    images?: ReportImageUncheckedCreateNestedManyWithoutReportInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutReportInput
    payment?: PaymentUncheckedCreateNestedOneWithoutReportInput
    transactions?: FinancialTransactionUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutClinicInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutClinicInput, ReportUncheckedCreateWithoutClinicInput>
  }

  export type ReportCreateManyClinicInputEnvelope = {
    data: ReportCreateManyClinicInput | ReportCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutClinicInput = {
    id?: string
    amount: number
    method: $Enums.PaymentMethod
    source: $Enums.PaymentSource
    date: Date | string
    status: $Enums.TransactionStatus
    report: ReportCreateNestedOneWithoutPaymentInput
    patient?: PatientCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutClinicInput = {
    id?: string
    reportId: string
    amount: number
    method: $Enums.PaymentMethod
    source: $Enums.PaymentSource
    date: Date | string
    status: $Enums.TransactionStatus
  }

  export type PaymentCreateOrConnectWithoutClinicInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutClinicInput, PaymentUncheckedCreateWithoutClinicInput>
  }

  export type PaymentCreateManyClinicInputEnvelope = {
    data: PaymentCreateManyClinicInput | PaymentCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type FinancialTransactionCreateWithoutClinicInput = {
    id?: string
    type: $Enums.TransactionType
    category: string
    description: string
    amount: number
    date: Date | string
    paymentMethod?: string | null
    status: $Enums.TransactionStatus
    report?: ReportCreateNestedOneWithoutTransactionsInput
    patient?: PatientCreateNestedOneWithoutFinancialTransactionsInput
  }

  export type FinancialTransactionUncheckedCreateWithoutClinicInput = {
    id?: string
    type: $Enums.TransactionType
    category: string
    description: string
    amount: number
    date: Date | string
    relatedReportId?: string | null
    relatedPatientId?: string | null
    paymentMethod?: string | null
    status: $Enums.TransactionStatus
  }

  export type FinancialTransactionCreateOrConnectWithoutClinicInput = {
    where: FinancialTransactionWhereUniqueInput
    create: XOR<FinancialTransactionCreateWithoutClinicInput, FinancialTransactionUncheckedCreateWithoutClinicInput>
  }

  export type FinancialTransactionCreateManyClinicInputEnvelope = {
    data: FinancialTransactionCreateManyClinicInput | FinancialTransactionCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type ReportUpsertWithWhereUniqueWithoutClinicInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutClinicInput, ReportUncheckedUpdateWithoutClinicInput>
    create: XOR<ReportCreateWithoutClinicInput, ReportUncheckedCreateWithoutClinicInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutClinicInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutClinicInput, ReportUncheckedUpdateWithoutClinicInput>
  }

  export type ReportUpdateManyWithWhereWithoutClinicInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutClinicInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutClinicInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutClinicInput, PaymentUncheckedUpdateWithoutClinicInput>
    create: XOR<PaymentCreateWithoutClinicInput, PaymentUncheckedCreateWithoutClinicInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutClinicInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutClinicInput, PaymentUncheckedUpdateWithoutClinicInput>
  }

  export type PaymentUpdateManyWithWhereWithoutClinicInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutClinicInput>
  }

  export type FinancialTransactionUpsertWithWhereUniqueWithoutClinicInput = {
    where: FinancialTransactionWhereUniqueInput
    update: XOR<FinancialTransactionUpdateWithoutClinicInput, FinancialTransactionUncheckedUpdateWithoutClinicInput>
    create: XOR<FinancialTransactionCreateWithoutClinicInput, FinancialTransactionUncheckedCreateWithoutClinicInput>
  }

  export type FinancialTransactionUpdateWithWhereUniqueWithoutClinicInput = {
    where: FinancialTransactionWhereUniqueInput
    data: XOR<FinancialTransactionUpdateWithoutClinicInput, FinancialTransactionUncheckedUpdateWithoutClinicInput>
  }

  export type FinancialTransactionUpdateManyWithWhereWithoutClinicInput = {
    where: FinancialTransactionScalarWhereInput
    data: XOR<FinancialTransactionUpdateManyMutationInput, FinancialTransactionUncheckedUpdateManyWithoutClinicInput>
  }

  export type ReportImageCreateWithoutReportInput = {
    id?: string
    url: string
    createdAt?: Date | string
  }

  export type ReportImageUncheckedCreateWithoutReportInput = {
    id?: string
    url: string
    createdAt?: Date | string
  }

  export type ReportImageCreateOrConnectWithoutReportInput = {
    where: ReportImageWhereUniqueInput
    create: XOR<ReportImageCreateWithoutReportInput, ReportImageUncheckedCreateWithoutReportInput>
  }

  export type ReportImageCreateManyReportInputEnvelope = {
    data: ReportImageCreateManyReportInput | ReportImageCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type MeasurementCreateWithoutReportInput = {
    id?: string
    organ: string
    value: string
  }

  export type MeasurementUncheckedCreateWithoutReportInput = {
    id?: string
    organ: string
    value: string
  }

  export type MeasurementCreateOrConnectWithoutReportInput = {
    where: MeasurementWhereUniqueInput
    create: XOR<MeasurementCreateWithoutReportInput, MeasurementUncheckedCreateWithoutReportInput>
  }

  export type MeasurementCreateManyReportInputEnvelope = {
    data: MeasurementCreateManyReportInput | MeasurementCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutReportInput = {
    id?: string
    amount: number
    method: $Enums.PaymentMethod
    source: $Enums.PaymentSource
    date: Date | string
    status: $Enums.TransactionStatus
    clinic?: ClinicCreateNestedOneWithoutPaymentsInput
    patient?: PatientCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutReportInput = {
    id?: string
    amount: number
    method: $Enums.PaymentMethod
    source: $Enums.PaymentSource
    sourceId: string
    date: Date | string
    status: $Enums.TransactionStatus
  }

  export type PaymentCreateOrConnectWithoutReportInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutReportInput, PaymentUncheckedCreateWithoutReportInput>
  }

  export type PatientCreateWithoutReportsInput = {
    id?: string
    name: string
    species: string
    breed: string
    sex: $Enums.Sex
    age: number
    ageUnit: $Enums.AgeUnit
    ownerName: string
    ownerPhone: string
    createdAt?: Date | string
    Payment?: PaymentCreateNestedManyWithoutPatientInput
    financialTransactions?: FinancialTransactionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutReportsInput = {
    id?: string
    name: string
    species: string
    breed: string
    sex: $Enums.Sex
    age: number
    ageUnit: $Enums.AgeUnit
    ownerName: string
    ownerPhone: string
    createdAt?: Date | string
    Payment?: PaymentUncheckedCreateNestedManyWithoutPatientInput
    financialTransactions?: FinancialTransactionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutReportsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutReportsInput, PatientUncheckedCreateWithoutReportsInput>
  }

  export type ClinicCreateWithoutReportsInput = {
    id?: string
    name: string
    cnpj: string
    address: string
    city: string
    state: string
    createdAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutClinicInput
    transactions?: FinancialTransactionCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateWithoutReportsInput = {
    id?: string
    name: string
    cnpj: string
    address: string
    city: string
    state: string
    createdAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutClinicInput
    transactions?: FinancialTransactionUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicCreateOrConnectWithoutReportsInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutReportsInput, ClinicUncheckedCreateWithoutReportsInput>
  }

  export type FinancialTransactionCreateWithoutReportInput = {
    id?: string
    type: $Enums.TransactionType
    category: string
    description: string
    amount: number
    date: Date | string
    paymentMethod?: string | null
    status: $Enums.TransactionStatus
    clinic?: ClinicCreateNestedOneWithoutTransactionsInput
    patient?: PatientCreateNestedOneWithoutFinancialTransactionsInput
  }

  export type FinancialTransactionUncheckedCreateWithoutReportInput = {
    id?: string
    type: $Enums.TransactionType
    category: string
    description: string
    amount: number
    date: Date | string
    relatedClinicId?: string | null
    relatedPatientId?: string | null
    paymentMethod?: string | null
    status: $Enums.TransactionStatus
  }

  export type FinancialTransactionCreateOrConnectWithoutReportInput = {
    where: FinancialTransactionWhereUniqueInput
    create: XOR<FinancialTransactionCreateWithoutReportInput, FinancialTransactionUncheckedCreateWithoutReportInput>
  }

  export type FinancialTransactionCreateManyReportInputEnvelope = {
    data: FinancialTransactionCreateManyReportInput | FinancialTransactionCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type ReportImageUpsertWithWhereUniqueWithoutReportInput = {
    where: ReportImageWhereUniqueInput
    update: XOR<ReportImageUpdateWithoutReportInput, ReportImageUncheckedUpdateWithoutReportInput>
    create: XOR<ReportImageCreateWithoutReportInput, ReportImageUncheckedCreateWithoutReportInput>
  }

  export type ReportImageUpdateWithWhereUniqueWithoutReportInput = {
    where: ReportImageWhereUniqueInput
    data: XOR<ReportImageUpdateWithoutReportInput, ReportImageUncheckedUpdateWithoutReportInput>
  }

  export type ReportImageUpdateManyWithWhereWithoutReportInput = {
    where: ReportImageScalarWhereInput
    data: XOR<ReportImageUpdateManyMutationInput, ReportImageUncheckedUpdateManyWithoutReportInput>
  }

  export type ReportImageScalarWhereInput = {
    AND?: ReportImageScalarWhereInput | ReportImageScalarWhereInput[]
    OR?: ReportImageScalarWhereInput[]
    NOT?: ReportImageScalarWhereInput | ReportImageScalarWhereInput[]
    id?: StringFilter<"ReportImage"> | string
    reportId?: StringFilter<"ReportImage"> | string
    url?: StringFilter<"ReportImage"> | string
    createdAt?: DateTimeFilter<"ReportImage"> | Date | string
  }

  export type MeasurementUpsertWithWhereUniqueWithoutReportInput = {
    where: MeasurementWhereUniqueInput
    update: XOR<MeasurementUpdateWithoutReportInput, MeasurementUncheckedUpdateWithoutReportInput>
    create: XOR<MeasurementCreateWithoutReportInput, MeasurementUncheckedCreateWithoutReportInput>
  }

  export type MeasurementUpdateWithWhereUniqueWithoutReportInput = {
    where: MeasurementWhereUniqueInput
    data: XOR<MeasurementUpdateWithoutReportInput, MeasurementUncheckedUpdateWithoutReportInput>
  }

  export type MeasurementUpdateManyWithWhereWithoutReportInput = {
    where: MeasurementScalarWhereInput
    data: XOR<MeasurementUpdateManyMutationInput, MeasurementUncheckedUpdateManyWithoutReportInput>
  }

  export type MeasurementScalarWhereInput = {
    AND?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
    OR?: MeasurementScalarWhereInput[]
    NOT?: MeasurementScalarWhereInput | MeasurementScalarWhereInput[]
    id?: StringFilter<"Measurement"> | string
    organ?: StringFilter<"Measurement"> | string
    value?: StringFilter<"Measurement"> | string
    reportId?: StringFilter<"Measurement"> | string
  }

  export type PaymentUpsertWithoutReportInput = {
    update: XOR<PaymentUpdateWithoutReportInput, PaymentUncheckedUpdateWithoutReportInput>
    create: XOR<PaymentCreateWithoutReportInput, PaymentUncheckedCreateWithoutReportInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutReportInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutReportInput, PaymentUncheckedUpdateWithoutReportInput>
  }

  export type PaymentUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    source?: EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    clinic?: ClinicUpdateOneWithoutPaymentsNestedInput
    patient?: PatientUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    source?: EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource
    sourceId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type PatientUpsertWithoutReportsInput = {
    update: XOR<PatientUpdateWithoutReportsInput, PatientUncheckedUpdateWithoutReportsInput>
    create: XOR<PatientCreateWithoutReportsInput, PatientUncheckedCreateWithoutReportsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutReportsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutReportsInput, PatientUncheckedUpdateWithoutReportsInput>
  }

  export type PatientUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    age?: IntFieldUpdateOperationsInput | number
    ageUnit?: EnumAgeUnitFieldUpdateOperationsInput | $Enums.AgeUnit
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentUpdateManyWithoutPatientNestedInput
    financialTransactions?: FinancialTransactionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    age?: IntFieldUpdateOperationsInput | number
    ageUnit?: EnumAgeUnitFieldUpdateOperationsInput | $Enums.AgeUnit
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentUncheckedUpdateManyWithoutPatientNestedInput
    financialTransactions?: FinancialTransactionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type ClinicUpsertWithoutReportsInput = {
    update: XOR<ClinicUpdateWithoutReportsInput, ClinicUncheckedUpdateWithoutReportsInput>
    create: XOR<ClinicCreateWithoutReportsInput, ClinicUncheckedCreateWithoutReportsInput>
    where?: ClinicWhereInput
  }

  export type ClinicUpdateToOneWithWhereWithoutReportsInput = {
    where?: ClinicWhereInput
    data: XOR<ClinicUpdateWithoutReportsInput, ClinicUncheckedUpdateWithoutReportsInput>
  }

  export type ClinicUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutClinicNestedInput
    transactions?: FinancialTransactionUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutClinicNestedInput
    transactions?: FinancialTransactionUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type FinancialTransactionUpsertWithWhereUniqueWithoutReportInput = {
    where: FinancialTransactionWhereUniqueInput
    update: XOR<FinancialTransactionUpdateWithoutReportInput, FinancialTransactionUncheckedUpdateWithoutReportInput>
    create: XOR<FinancialTransactionCreateWithoutReportInput, FinancialTransactionUncheckedCreateWithoutReportInput>
  }

  export type FinancialTransactionUpdateWithWhereUniqueWithoutReportInput = {
    where: FinancialTransactionWhereUniqueInput
    data: XOR<FinancialTransactionUpdateWithoutReportInput, FinancialTransactionUncheckedUpdateWithoutReportInput>
  }

  export type FinancialTransactionUpdateManyWithWhereWithoutReportInput = {
    where: FinancialTransactionScalarWhereInput
    data: XOR<FinancialTransactionUpdateManyMutationInput, FinancialTransactionUncheckedUpdateManyWithoutReportInput>
  }

  export type ReportCreateWithoutImagesInput = {
    id?: string
    type: $Enums.ExamType
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt?: Date | string
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
    measurements?: MeasurementCreateNestedManyWithoutReportInput
    payment?: PaymentCreateNestedOneWithoutReportInput
    patient: PatientCreateNestedOneWithoutReportsInput
    clinic: ClinicCreateNestedOneWithoutReportsInput
    transactions?: FinancialTransactionCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutImagesInput = {
    id?: string
    patientId: string
    clinicId: string
    type: $Enums.ExamType
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt?: Date | string
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
    measurements?: MeasurementUncheckedCreateNestedManyWithoutReportInput
    payment?: PaymentUncheckedCreateNestedOneWithoutReportInput
    transactions?: FinancialTransactionUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutImagesInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutImagesInput, ReportUncheckedCreateWithoutImagesInput>
  }

  export type ReportUpsertWithoutImagesInput = {
    update: XOR<ReportUpdateWithoutImagesInput, ReportUncheckedUpdateWithoutImagesInput>
    create: XOR<ReportCreateWithoutImagesInput, ReportUncheckedCreateWithoutImagesInput>
    where?: ReportWhereInput
  }

  export type ReportUpdateToOneWithWhereWithoutImagesInput = {
    where?: ReportWhereInput
    data: XOR<ReportUpdateWithoutImagesInput, ReportUncheckedUpdateWithoutImagesInput>
  }

  export type ReportUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    measurements?: MeasurementUpdateManyWithoutReportNestedInput
    payment?: PaymentUpdateOneWithoutReportNestedInput
    patient?: PatientUpdateOneRequiredWithoutReportsNestedInput
    clinic?: ClinicUpdateOneRequiredWithoutReportsNestedInput
    transactions?: FinancialTransactionUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    measurements?: MeasurementUncheckedUpdateManyWithoutReportNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutReportNestedInput
    transactions?: FinancialTransactionUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportCreateWithoutMeasurementsInput = {
    id?: string
    type: $Enums.ExamType
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt?: Date | string
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
    images?: ReportImageCreateNestedManyWithoutReportInput
    payment?: PaymentCreateNestedOneWithoutReportInput
    patient: PatientCreateNestedOneWithoutReportsInput
    clinic: ClinicCreateNestedOneWithoutReportsInput
    transactions?: FinancialTransactionCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutMeasurementsInput = {
    id?: string
    patientId: string
    clinicId: string
    type: $Enums.ExamType
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt?: Date | string
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
    images?: ReportImageUncheckedCreateNestedManyWithoutReportInput
    payment?: PaymentUncheckedCreateNestedOneWithoutReportInput
    transactions?: FinancialTransactionUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutMeasurementsInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutMeasurementsInput, ReportUncheckedCreateWithoutMeasurementsInput>
  }

  export type ReportUpsertWithoutMeasurementsInput = {
    update: XOR<ReportUpdateWithoutMeasurementsInput, ReportUncheckedUpdateWithoutMeasurementsInput>
    create: XOR<ReportCreateWithoutMeasurementsInput, ReportUncheckedCreateWithoutMeasurementsInput>
    where?: ReportWhereInput
  }

  export type ReportUpdateToOneWithWhereWithoutMeasurementsInput = {
    where?: ReportWhereInput
    data: XOR<ReportUpdateWithoutMeasurementsInput, ReportUncheckedUpdateWithoutMeasurementsInput>
  }

  export type ReportUpdateWithoutMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    images?: ReportImageUpdateManyWithoutReportNestedInput
    payment?: PaymentUpdateOneWithoutReportNestedInput
    patient?: PatientUpdateOneRequiredWithoutReportsNestedInput
    clinic?: ClinicUpdateOneRequiredWithoutReportsNestedInput
    transactions?: FinancialTransactionUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    images?: ReportImageUncheckedUpdateManyWithoutReportNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutReportNestedInput
    transactions?: FinancialTransactionUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportCreateWithoutPaymentInput = {
    id?: string
    type: $Enums.ExamType
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt?: Date | string
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
    images?: ReportImageCreateNestedManyWithoutReportInput
    measurements?: MeasurementCreateNestedManyWithoutReportInput
    patient: PatientCreateNestedOneWithoutReportsInput
    clinic: ClinicCreateNestedOneWithoutReportsInput
    transactions?: FinancialTransactionCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutPaymentInput = {
    id?: string
    patientId: string
    clinicId: string
    type: $Enums.ExamType
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt?: Date | string
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
    images?: ReportImageUncheckedCreateNestedManyWithoutReportInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutReportInput
    transactions?: FinancialTransactionUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutPaymentInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutPaymentInput, ReportUncheckedCreateWithoutPaymentInput>
  }

  export type ClinicCreateWithoutPaymentsInput = {
    id?: string
    name: string
    cnpj: string
    address: string
    city: string
    state: string
    createdAt?: Date | string
    reports?: ReportCreateNestedManyWithoutClinicInput
    transactions?: FinancialTransactionCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    cnpj: string
    address: string
    city: string
    state: string
    createdAt?: Date | string
    reports?: ReportUncheckedCreateNestedManyWithoutClinicInput
    transactions?: FinancialTransactionUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicCreateOrConnectWithoutPaymentsInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutPaymentsInput, ClinicUncheckedCreateWithoutPaymentsInput>
  }

  export type PatientCreateWithoutPaymentInput = {
    id?: string
    name: string
    species: string
    breed: string
    sex: $Enums.Sex
    age: number
    ageUnit: $Enums.AgeUnit
    ownerName: string
    ownerPhone: string
    createdAt?: Date | string
    reports?: ReportCreateNestedManyWithoutPatientInput
    financialTransactions?: FinancialTransactionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutPaymentInput = {
    id?: string
    name: string
    species: string
    breed: string
    sex: $Enums.Sex
    age: number
    ageUnit: $Enums.AgeUnit
    ownerName: string
    ownerPhone: string
    createdAt?: Date | string
    reports?: ReportUncheckedCreateNestedManyWithoutPatientInput
    financialTransactions?: FinancialTransactionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutPaymentInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPaymentInput, PatientUncheckedCreateWithoutPaymentInput>
  }

  export type ReportUpsertWithoutPaymentInput = {
    update: XOR<ReportUpdateWithoutPaymentInput, ReportUncheckedUpdateWithoutPaymentInput>
    create: XOR<ReportCreateWithoutPaymentInput, ReportUncheckedCreateWithoutPaymentInput>
    where?: ReportWhereInput
  }

  export type ReportUpdateToOneWithWhereWithoutPaymentInput = {
    where?: ReportWhereInput
    data: XOR<ReportUpdateWithoutPaymentInput, ReportUncheckedUpdateWithoutPaymentInput>
  }

  export type ReportUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    images?: ReportImageUpdateManyWithoutReportNestedInput
    measurements?: MeasurementUpdateManyWithoutReportNestedInput
    patient?: PatientUpdateOneRequiredWithoutReportsNestedInput
    clinic?: ClinicUpdateOneRequiredWithoutReportsNestedInput
    transactions?: FinancialTransactionUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    images?: ReportImageUncheckedUpdateManyWithoutReportNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutReportNestedInput
    transactions?: FinancialTransactionUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ClinicUpsertWithoutPaymentsInput = {
    update: XOR<ClinicUpdateWithoutPaymentsInput, ClinicUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ClinicCreateWithoutPaymentsInput, ClinicUncheckedCreateWithoutPaymentsInput>
    where?: ClinicWhereInput
  }

  export type ClinicUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ClinicWhereInput
    data: XOR<ClinicUpdateWithoutPaymentsInput, ClinicUncheckedUpdateWithoutPaymentsInput>
  }

  export type ClinicUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUpdateManyWithoutClinicNestedInput
    transactions?: FinancialTransactionUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUncheckedUpdateManyWithoutClinicNestedInput
    transactions?: FinancialTransactionUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type PatientUpsertWithoutPaymentInput = {
    update: XOR<PatientUpdateWithoutPaymentInput, PatientUncheckedUpdateWithoutPaymentInput>
    create: XOR<PatientCreateWithoutPaymentInput, PatientUncheckedCreateWithoutPaymentInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutPaymentInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutPaymentInput, PatientUncheckedUpdateWithoutPaymentInput>
  }

  export type PatientUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    age?: IntFieldUpdateOperationsInput | number
    ageUnit?: EnumAgeUnitFieldUpdateOperationsInput | $Enums.AgeUnit
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUpdateManyWithoutPatientNestedInput
    financialTransactions?: FinancialTransactionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    age?: IntFieldUpdateOperationsInput | number
    ageUnit?: EnumAgeUnitFieldUpdateOperationsInput | $Enums.AgeUnit
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUncheckedUpdateManyWithoutPatientNestedInput
    financialTransactions?: FinancialTransactionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type ReportCreateWithoutTransactionsInput = {
    id?: string
    type: $Enums.ExamType
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt?: Date | string
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
    images?: ReportImageCreateNestedManyWithoutReportInput
    measurements?: MeasurementCreateNestedManyWithoutReportInput
    payment?: PaymentCreateNestedOneWithoutReportInput
    patient: PatientCreateNestedOneWithoutReportsInput
    clinic: ClinicCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateWithoutTransactionsInput = {
    id?: string
    patientId: string
    clinicId: string
    type: $Enums.ExamType
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt?: Date | string
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
    images?: ReportImageUncheckedCreateNestedManyWithoutReportInput
    measurements?: MeasurementUncheckedCreateNestedManyWithoutReportInput
    payment?: PaymentUncheckedCreateNestedOneWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutTransactionsInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutTransactionsInput, ReportUncheckedCreateWithoutTransactionsInput>
  }

  export type ClinicCreateWithoutTransactionsInput = {
    id?: string
    name: string
    cnpj: string
    address: string
    city: string
    state: string
    createdAt?: Date | string
    reports?: ReportCreateNestedManyWithoutClinicInput
    payments?: PaymentCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    cnpj: string
    address: string
    city: string
    state: string
    createdAt?: Date | string
    reports?: ReportUncheckedCreateNestedManyWithoutClinicInput
    payments?: PaymentUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicCreateOrConnectWithoutTransactionsInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutTransactionsInput, ClinicUncheckedCreateWithoutTransactionsInput>
  }

  export type PatientCreateWithoutFinancialTransactionsInput = {
    id?: string
    name: string
    species: string
    breed: string
    sex: $Enums.Sex
    age: number
    ageUnit: $Enums.AgeUnit
    ownerName: string
    ownerPhone: string
    createdAt?: Date | string
    reports?: ReportCreateNestedManyWithoutPatientInput
    Payment?: PaymentCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutFinancialTransactionsInput = {
    id?: string
    name: string
    species: string
    breed: string
    sex: $Enums.Sex
    age: number
    ageUnit: $Enums.AgeUnit
    ownerName: string
    ownerPhone: string
    createdAt?: Date | string
    reports?: ReportUncheckedCreateNestedManyWithoutPatientInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutFinancialTransactionsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutFinancialTransactionsInput, PatientUncheckedCreateWithoutFinancialTransactionsInput>
  }

  export type ReportUpsertWithoutTransactionsInput = {
    update: XOR<ReportUpdateWithoutTransactionsInput, ReportUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ReportCreateWithoutTransactionsInput, ReportUncheckedCreateWithoutTransactionsInput>
    where?: ReportWhereInput
  }

  export type ReportUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ReportWhereInput
    data: XOR<ReportUpdateWithoutTransactionsInput, ReportUncheckedUpdateWithoutTransactionsInput>
  }

  export type ReportUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    images?: ReportImageUpdateManyWithoutReportNestedInput
    measurements?: MeasurementUpdateManyWithoutReportNestedInput
    payment?: PaymentUpdateOneWithoutReportNestedInput
    patient?: PatientUpdateOneRequiredWithoutReportsNestedInput
    clinic?: ClinicUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    images?: ReportImageUncheckedUpdateManyWithoutReportNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutReportNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutReportNestedInput
  }

  export type ClinicUpsertWithoutTransactionsInput = {
    update: XOR<ClinicUpdateWithoutTransactionsInput, ClinicUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ClinicCreateWithoutTransactionsInput, ClinicUncheckedCreateWithoutTransactionsInput>
    where?: ClinicWhereInput
  }

  export type ClinicUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ClinicWhereInput
    data: XOR<ClinicUpdateWithoutTransactionsInput, ClinicUncheckedUpdateWithoutTransactionsInput>
  }

  export type ClinicUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUpdateManyWithoutClinicNestedInput
    payments?: PaymentUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUncheckedUpdateManyWithoutClinicNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type PatientUpsertWithoutFinancialTransactionsInput = {
    update: XOR<PatientUpdateWithoutFinancialTransactionsInput, PatientUncheckedUpdateWithoutFinancialTransactionsInput>
    create: XOR<PatientCreateWithoutFinancialTransactionsInput, PatientUncheckedCreateWithoutFinancialTransactionsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutFinancialTransactionsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutFinancialTransactionsInput, PatientUncheckedUpdateWithoutFinancialTransactionsInput>
  }

  export type PatientUpdateWithoutFinancialTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    age?: IntFieldUpdateOperationsInput | number
    ageUnit?: EnumAgeUnitFieldUpdateOperationsInput | $Enums.AgeUnit
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUpdateManyWithoutPatientNestedInput
    Payment?: PaymentUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutFinancialTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    age?: IntFieldUpdateOperationsInput | number
    ageUnit?: EnumAgeUnitFieldUpdateOperationsInput | $Enums.AgeUnit
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUncheckedUpdateManyWithoutPatientNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type ReportCreateManyPatientInput = {
    id?: string
    clinicId: string
    type: $Enums.ExamType
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt?: Date | string
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
  }

  export type PaymentCreateManyPatientInput = {
    id?: string
    reportId: string
    amount: number
    method: $Enums.PaymentMethod
    source: $Enums.PaymentSource
    date: Date | string
    status: $Enums.TransactionStatus
  }

  export type FinancialTransactionCreateManyPatientInput = {
    id?: string
    type: $Enums.TransactionType
    category: string
    description: string
    amount: number
    date: Date | string
    relatedReportId?: string | null
    relatedClinicId?: string | null
    paymentMethod?: string | null
    status: $Enums.TransactionStatus
  }

  export type ReportUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    images?: ReportImageUpdateManyWithoutReportNestedInput
    measurements?: MeasurementUpdateManyWithoutReportNestedInput
    payment?: PaymentUpdateOneWithoutReportNestedInput
    clinic?: ClinicUpdateOneRequiredWithoutReportsNestedInput
    transactions?: FinancialTransactionUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    images?: ReportImageUncheckedUpdateManyWithoutReportNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutReportNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutReportNestedInput
    transactions?: FinancialTransactionUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    source?: EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    report?: ReportUpdateOneRequiredWithoutPaymentNestedInput
    clinic?: ClinicUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    source?: EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type PaymentUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    source?: EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type FinancialTransactionUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    report?: ReportUpdateOneWithoutTransactionsNestedInput
    clinic?: ClinicUpdateOneWithoutTransactionsNestedInput
  }

  export type FinancialTransactionUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedReportId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedClinicId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type FinancialTransactionUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedReportId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedClinicId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type ReportCreateManyClinicInput = {
    id?: string
    patientId: string
    type: $Enums.ExamType
    categoryUltrasound?: $Enums.UltrasoundCategory | null
    categoryXRay?: $Enums.XRayCategory | null
    findings: string
    conclusion: string
    createdAt?: Date | string
    status: $Enums.ReportStatus
    baseValue: number
    additionalValue: number
    code: string
  }

  export type PaymentCreateManyClinicInput = {
    id?: string
    reportId: string
    amount: number
    method: $Enums.PaymentMethod
    source: $Enums.PaymentSource
    date: Date | string
    status: $Enums.TransactionStatus
  }

  export type FinancialTransactionCreateManyClinicInput = {
    id?: string
    type: $Enums.TransactionType
    category: string
    description: string
    amount: number
    date: Date | string
    relatedReportId?: string | null
    relatedPatientId?: string | null
    paymentMethod?: string | null
    status: $Enums.TransactionStatus
  }

  export type ReportUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    images?: ReportImageUpdateManyWithoutReportNestedInput
    measurements?: MeasurementUpdateManyWithoutReportNestedInput
    payment?: PaymentUpdateOneWithoutReportNestedInput
    patient?: PatientUpdateOneRequiredWithoutReportsNestedInput
    transactions?: FinancialTransactionUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    images?: ReportImageUncheckedUpdateManyWithoutReportNestedInput
    measurements?: MeasurementUncheckedUpdateManyWithoutReportNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutReportNestedInput
    transactions?: FinancialTransactionUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    type?: EnumExamTypeFieldUpdateOperationsInput | $Enums.ExamType
    categoryUltrasound?: NullableEnumUltrasoundCategoryFieldUpdateOperationsInput | $Enums.UltrasoundCategory | null
    categoryXRay?: NullableEnumXRayCategoryFieldUpdateOperationsInput | $Enums.XRayCategory | null
    findings?: StringFieldUpdateOperationsInput | string
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    baseValue?: FloatFieldUpdateOperationsInput | number
    additionalValue?: FloatFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    source?: EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    report?: ReportUpdateOneRequiredWithoutPaymentNestedInput
    patient?: PatientUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    source?: EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type PaymentUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    source?: EnumPaymentSourceFieldUpdateOperationsInput | $Enums.PaymentSource
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type FinancialTransactionUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    report?: ReportUpdateOneWithoutTransactionsNestedInput
    patient?: PatientUpdateOneWithoutFinancialTransactionsNestedInput
  }

  export type FinancialTransactionUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedReportId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedPatientId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type FinancialTransactionUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedReportId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedPatientId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type ReportImageCreateManyReportInput = {
    id?: string
    url: string
    createdAt?: Date | string
  }

  export type MeasurementCreateManyReportInput = {
    id?: string
    organ: string
    value: string
  }

  export type FinancialTransactionCreateManyReportInput = {
    id?: string
    type: $Enums.TransactionType
    category: string
    description: string
    amount: number
    date: Date | string
    relatedClinicId?: string | null
    relatedPatientId?: string | null
    paymentMethod?: string | null
    status: $Enums.TransactionStatus
  }

  export type ReportImageUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportImageUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportImageUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeasurementUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    organ?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type MeasurementUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    organ?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type MeasurementUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    organ?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type FinancialTransactionUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    clinic?: ClinicUpdateOneWithoutTransactionsNestedInput
    patient?: PatientUpdateOneWithoutFinancialTransactionsNestedInput
  }

  export type FinancialTransactionUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedClinicId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedPatientId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type FinancialTransactionUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedClinicId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedPatientId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
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