
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.RegionsScalarFieldEnum = {
  id: 'id',
  nameUz: 'nameUz',
  nameRu: 'nameRu',
  nameEn: 'nameEn',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UsersScalarFieldEnum = {
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

exports.Prisma.SessionsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  ipAddress: 'ipAddress',
  deviceInfo: 'deviceInfo',
  createdAt: 'createdAt'
};

exports.Prisma.ContactsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  surName: 'surName',
  phone: 'phone',
  address: 'address',
  message: 'message',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DataAboutCompanyScalarFieldEnum = {
  id: 'id',
  INN: 'INN',
  MFO: 'MFO',
  R_or_C: 'R_or_C',
  bankCode: 'bankCode',
  Oked: 'Oked',
  address: 'address',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ShowCasesScalarFieldEnum = {
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

exports.Prisma.FAQScalarFieldEnum = {
  id: 'id',
  question: 'question',
  answer: 'answer',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AboutOurPageScalarFieldEnum = {
  id: 'id',
  email: 'email',
  phone: 'phone',
  links: 'links',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PartnersScalarFieldEnum = {
  id: 'id',
  nameUz: 'nameUz',
  nameRu: 'nameRu',
  nameEn: 'nameEn',
  images: 'images',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CommentsScalarFieldEnum = {
  id: 'id',
  message: 'message',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StarsScalarFieldEnum = {
  id: 'id',
  star: 'star',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LevelsScalarFieldEnum = {
  id: 'id',
  nameUz: 'nameUz',
  nameRu: 'nameRu',
  nameEn: 'nameEn',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CapacityScalarFieldEnum = {
  id: 'id',
  nameUz: 'nameUz',
  nameRu: 'nameRu',
  nameEn: 'nameEn',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SizesScalarFieldEnum = {
  id: 'id',
  nameUz: 'nameUz',
  nameRu: 'nameRu',
  nameEn: 'nameEn',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BrandsScalarFieldEnum = {
  id: 'id',
  nameUz: 'nameUz',
  nameRu: 'nameRu',
  nameEn: 'nameEn',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MastersScalarFieldEnum = {
  id: 'id',
  fullName: 'fullName',
  phone: 'phone',
  status: 'status',
  birthYear: 'birthYear',
  avatar: 'avatar',
  passportImage: 'passportImage',
  about: 'about'
};

exports.Prisma.ProfessionsScalarFieldEnum = {
  id: 'id',
  nameUz: 'nameUz',
  nameRu: 'nameRu',
  nameEn: 'nameEn',
  avatar: 'avatar',
  status: 'status'
};

exports.Prisma.MasterProfessionsScalarFieldEnum = {
  id: 'id',
  professionId: 'professionId',
  minWorkingHours: 'minWorkingHours',
  levelId: 'levelId',
  priceHourly: 'priceHourly',
  priceDaily: 'priceDaily',
  experience: 'experience',
  masterId: 'masterId'
};

exports.Prisma.ProfessionLevelsScalarFieldEnum = {
  id: 'id',
  professionId: 'professionId',
  levelId: 'levelId',
  minWorkingHours: 'minWorkingHours',
  priceHourly: 'priceHourly',
  priceDaily: 'priceDaily'
};

exports.Prisma.ToolsScalarFieldEnum = {
  id: 'id',
  code: 'code',
  nameUz: 'nameUz',
  nameRu: 'nameRu',
  nameEn: 'nameEn',
  descriptionUz: 'descriptionUz',
  descriptionRu: 'descriptionRu',
  descriptionEn: 'descriptionEn',
  price: 'price',
  quantity: 'quantity',
  brandId: 'brandId',
  capacityId: 'capacityId',
  sizeId: 'sizeId',
  image: 'image',
  isAvailable: 'isAvailable',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProfessionToolsScalarFieldEnum = {
  id: 'id',
  professionId: 'professionId',
  toolId: 'toolId'
};

exports.Prisma.BacketScalarFieldEnum = {
  id: 'id',
  ownerId: 'ownerId',
  professionId: 'professionId',
  toolId: 'toolId',
  count: 'count',
  timeUnit: 'timeUnit',
  measure: 'measure',
  workingTime: 'workingTime',
  totalPrice: 'totalPrice',
  levelId: 'levelId'
};

exports.Prisma.OrdersScalarFieldEnum = {
  id: 'id',
  address: 'address',
  latitude: 'latitude',
  longitude: 'longitude',
  date: 'date',
  totalPrice: 'totalPrice',
  paymentType: 'paymentType',
  withDelivery: 'withDelivery',
  status: 'status',
  deliveryCommentId: 'deliveryCommentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderItemsScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  professionId: 'professionId',
  toolId: 'toolId',
  levelId: 'levelId',
  timeUnit: 'timeUnit',
  workingTime: 'workingTime',
  price: 'price',
  count: 'count'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserRole = exports.$Enums.UserRole = {
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
  VIEWER_ADMIN: 'VIEWER_ADMIN',
  USER_FIZ: 'USER_FIZ',
  USER_YUR: 'USER_YUR'
};

exports.UserStatus = exports.$Enums.UserStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

exports.timeEnum = exports.$Enums.timeEnum = {
  DAY: 'DAY',
  HOUR: 'HOUR'
};

exports.PaymentType = exports.$Enums.PaymentType = {
  CARD: 'CARD',
  CASH: 'CASH'
};

exports.OrderStatus = exports.$Enums.OrderStatus = {
  PENDING: 'PENDING',
  ACTIVATED: 'ACTIVATED',
  REJECTED: 'REJECTED',
  DELIVERED: 'DELIVERED'
};

exports.OrderTimeUnit = exports.$Enums.OrderTimeUnit = {
  DAY: 'DAY',
  HOUR: 'HOUR'
};

exports.Prisma.ModelName = {
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
  Brands: 'Brands',
  Masters: 'Masters',
  Professions: 'Professions',
  MasterProfessions: 'MasterProfessions',
  ProfessionLevels: 'ProfessionLevels',
  Tools: 'Tools',
  ProfessionTools: 'ProfessionTools',
  Backet: 'Backet',
  Orders: 'Orders',
  OrderItems: 'OrderItems'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
