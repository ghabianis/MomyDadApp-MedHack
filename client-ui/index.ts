/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AppConfigCreateInput {
  deletedAt?: object;
  value?: string;
  key?: string;
}

export interface AppConfig {
  id: string;
  /** @format date-time */
  createdAt: string;
  updatedAt?: object;
  deletedAt?: object;
  value?: string;
  key?: string;
}

export interface ForbiddenException {
  statusCode: number;
  message: string;
}

export interface StringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: "Default" | "Insensitive";
  not?: string;
}

export interface StringNullableFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: "Default" | "Insensitive";
  not?: string;
}

export interface AppConfigWhereInput {
  id?: StringFilter;
  value?: StringNullableFilter;
  key?: StringNullableFilter;
}

export interface AppConfigOrderByInput {
  id?: "Asc" | "Desc";
  createdAt?: "Asc" | "Desc";
  updatedAt?: "Asc" | "Desc";
  deletedAt?: "Asc" | "Desc";
  value?: "Asc" | "Desc";
  key?: "Asc" | "Desc";
}

export interface GetListAppConfigDto {
  paginatedResult: AppConfig[];
  totalCount: number;
}

export interface FileDto {
  file: string;
}

export interface NotFoundException {
  statusCode: number;
  message: string;
}

export interface AppConfigUpdateInput {
  deletedAt?: object;
  value?: string;
  key?: string;
}

export interface UserCredentials {
  email: string;
  password: string;
  role: string;
  firstName: string;
  lastName: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface EmailResetPasswordCredential {
  email: string;
}

export interface ResetPasswordCredential {
  access_token: string;
  password: string;
}

export interface GenerateLinkOptions {
  redirectTo?: string;
  password?: string;
  data?: object;
}

export interface InviteUserByEmailCredential {
  email: string;
  options?: GenerateLinkOptions;
}

export interface ResetEmailCredential {
  userId: string;
  email: string;
  password: string;
}

export interface UserCreateInput {
  deletedAt?: object;
  firstName?: string;
  lastName?: string;
  username: string;
  isValid?: boolean;
  roles: string[];
}

export interface User {
  id: string;
  /** @format date-time */
  createdAt: string;
  updatedAt?: object;
  deletedAt?: object;
  firstName?: string;
  lastName?: string;
  username: string;
  isValid?: boolean;
  roles: string[];
}

export interface UserWhereInput {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
}

export interface UserOrderByInput {
  id?: "Asc" | "Desc";
  createdAt?: "Asc" | "Desc";
  updatedAt?: "Asc" | "Desc";
  deletedAt?: "Asc" | "Desc";
  firstName?: "Asc" | "Desc";
  lastName?: "Asc" | "Desc";
  username?: "Asc" | "Desc";
  isValid?: "Asc" | "Desc";
  roles?: "Asc" | "Desc";
}

export interface GetListUserDto {
  paginatedResult: User[];
  totalCount: number;
}

export interface UserUpdateInput {
  deletedAt?: object;
  firstName?: string;
  lastName?: string;
  username?: string;
  isValid?: boolean;
  roles?: string[];
}

export type UpdatePasswordDTO = object;

export type CreateTodoDto = object;

export type UpdateTodoDto = object;

export type CreateAppointmentDto = object;

export type UpdateAppointmentDto = object;

export type CreateQuestionDto = object;

export type UpdateQuestionDto = object;

export type CreateNutritionDto = object;

export type UpdateNutritionDto = object;

export type CreateExerciceDto = object;

export type UpdateExerciceDto = object;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;

  key?: string;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
  handleError?: void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "/nest";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);
  private handleError?: (() => void | undefined) | undefined;

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  public setBaseApiParams = (data: RequestParams) => {
    this.baseApiParams = this.mergeRequestParams(data);
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any, requestParam: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any, requestParam) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          requestParam?.key || key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;
    const resp = await this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
          ...(requestParams.headers || {}),
        },
        signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
        body: typeof body === "undefined" || body === null ? null : payloadFormatter(body, requestParams),
      },
    );
    if (cancelToken) {
      this.abortControllers.delete(cancelToken);
    }
    let data: T;
    let error: E;
    try {
      data = await resp[responseFormat || "json"]();
      if (!resp.ok) {
        if (data?.error?.statusCode === 401) this.handleError?.();
        throw { ...resp, error: data };
      } else return { ...resp, data, error };
    } catch (error) {
      if (error?.error?.statusCode) throw error;
      console.log(error);
    }
  };
}

/**
 * @title My app
 * @version 2u8t8se0
 * @baseUrl /nest
 * @contact
 *
 *
 *
 * ## Congratulations! Your application is ready.
 *
 *     Please note that all endpoints are secured with JWT Bearer authentication.Use the authentification service of supabase to authenticate.
 *     (https://supabase.com/docs/gotrue/server/about#put-user)
 *     Learn more in [our docs](https://docs.amplication.com)
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerCreate
     * @request POST:/api/app-configs
     * @secure
     */
    appConfigControllerCreate: (data: AppConfigCreateInput, params: RequestParams = {}) =>
      this.request<AppConfig, ForbiddenException>({
        path: `/api/app-configs`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerFindMany
     * @request GET:/api/app-configs
     * @secure
     */
    appConfigControllerFindMany: (
      query?: {
        where?: AppConfigWhereInput;
        orderBy?: AppConfigOrderByInput;
        skip?: number;
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetListAppConfigDto, void>({
        path: `/api/app-configs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerCreateMany
     * @request POST:/api/app-configs/createMany
     * @secure
     */
    appConfigControllerCreateMany: (data: string[], params: RequestParams = {}) =>
      this.request<AppConfig, ForbiddenException>({
        path: `/api/app-configs/createMany`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerFindDataForExcel
     * @request GET:/api/app-configs/fileExcel
     * @secure
     */
    appConfigControllerFindDataForExcel: (params: RequestParams = {}) =>
      this.request<FileDto, ForbiddenException>({
        path: `/api/app-configs/fileExcel`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerFindOne
     * @request GET:/api/app-configs/{id}
     * @secure
     */
    appConfigControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<AppConfig, ForbiddenException | NotFoundException>({
        path: `/api/app-configs/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerUpdate
     * @request PATCH:/api/app-configs/{id}
     * @secure
     */
    appConfigControllerUpdate: (id: string, data: AppConfigUpdateInput, params: RequestParams = {}) =>
      this.request<AppConfig, ForbiddenException | NotFoundException>({
        path: `/api/app-configs/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerDelete
     * @request DELETE:/api/app-configs/{id}
     * @secure
     */
    appConfigControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<AppConfig, ForbiddenException | NotFoundException>({
        path: `/api/app-configs/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerSignUp
     * @request POST:/api/sign_up
     */
    authControllerSignUp: (data: UserCredentials, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/sign_up`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerSignIn
     * @request POST:/api/sign_in
     */
    authControllerSignIn: (data: Credentials, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/sign_in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerRoot
     * @request GET:/api/template_email_recovery
     */
    authControllerRoot: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/template_email_recovery`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerSendEmailResetPassword
     * @request POST:/api/send_email_reset_password
     */
    authControllerSendEmailResetPassword: (data: EmailResetPasswordCredential, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/send_email_reset_password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerResetPassword
     * @request POST:/api/reset_password
     */
    authControllerResetPassword: (data: ResetPasswordCredential, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/reset_password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerInviteUserByEmail
     * @request POST:/api/invite_user_by_email
     */
    authControllerInviteUserByEmail: (data: InviteUserByEmailCredential, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/invite_user_by_email`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerChangeEmail
     * @request POST:/api/change_email
     */
    authControllerChangeEmail: (data: ResetEmailCredential, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/change_email`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerCreate
     * @request POST:/api/users
     * @secure
     */
    userControllerCreate: (data: UserCreateInput, params: RequestParams = {}) =>
      this.request<User, ForbiddenException>({
        path: `/api/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerFindMany
     * @request GET:/api/users
     * @secure
     */
    userControllerFindMany: (
      query?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: number;
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetListUserDto, void>({
        path: `/api/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerCreateMany
     * @request POST:/api/users/createMany
     * @secure
     */
    userControllerCreateMany: (data: string[], params: RequestParams = {}) =>
      this.request<User, ForbiddenException>({
        path: `/api/users/createMany`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerFindDataForExcel
     * @request GET:/api/users/fileExcel
     * @secure
     */
    userControllerFindDataForExcel: (params: RequestParams = {}, query: object) =>
      this.request<FileDto, void>({
        path: `/api/users/fileExcel`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerFindOne
     * @request GET:/api/users/{id}
     * @secure
     */
    userControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<User, ForbiddenException | NotFoundException>({
        path: `/api/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerUpdate
     * @request PATCH:/api/users/{id}
     * @secure
     */
    userControllerUpdate: (id: string, data: UserUpdateInput, params: RequestParams = {}) =>
      this.request<User, ForbiddenException | NotFoundException>({
        path: `/api/users/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerDelete
     * @request DELETE:/api/users/{id}
     * @secure
     */
    userControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<User, ForbiddenException | NotFoundException>({
        path: `/api/users/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerUpdatePassword
     * @request PATCH:/api/users/{id}/resetPassword
     * @secure
     */
    userControllerUpdatePassword: (id: string, data: UpdatePasswordDTO, params: RequestParams = {}) =>
      this.request<User, ForbiddenException | NotFoundException>({
        path: `/api/users/${id}/resetPassword`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags _health
     * @name HealthControllerHealthLive
     * @request GET:/api/_health/live
     */
    healthControllerHealthLive: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/_health/live`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags _health
     * @name HealthControllerHealthReady
     * @request GET:/api/_health/ready
     */
    healthControllerHealthReady: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/_health/ready`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags todo
     * @name TodoControllerCreate
     * @request POST:/api/todo
     */
    todoControllerCreate: (data: CreateTodoDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/todo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags todo
     * @name TodoControllerFindAll
     * @request GET:/api/todo
     */
    todoControllerFindAll: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/todo`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags todo
     * @name TodoControllerFindOne
     * @request GET:/api/todo/{id}
     */
    todoControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/todo/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags todo
     * @name TodoControllerUpdate
     * @request PATCH:/api/todo/{id}
     */
    todoControllerUpdate: (id: string, data: UpdateTodoDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/todo/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags todo
     * @name TodoControllerRemove
     * @request DELETE:/api/todo/{id}
     */
    todoControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/todo/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags appointments
     * @name AppointmentsControllerCreate
     * @request POST:/api/appointments
     */
    appointmentsControllerCreate: (data: CreateAppointmentDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/appointments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags appointments
     * @name AppointmentsControllerFindAllAppointments
     * @request GET:/api/appointments
     */
    appointmentsControllerFindAllAppointments: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/appointments`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags appointments
     * @name AppointmentsControllerFindOne
     * @request GET:/api/appointments/{id}
     */
    appointmentsControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/appointments/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags appointments
     * @name AppointmentsControllerUpdate
     * @request PATCH:/api/appointments/{id}
     */
    appointmentsControllerUpdate: (id: string, data: UpdateAppointmentDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/appointments/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags appointments
     * @name AppointmentsControllerRemove
     * @request DELETE:/api/appointments/{id}
     */
    appointmentsControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/appointments/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags questions
     * @name QuestionsControllerCreate
     * @request POST:/api/questions
     */
    questionsControllerCreate: (data: CreateQuestionDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/questions`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags questions
     * @name QuestionsControllerFindAll
     * @request GET:/api/questions
     */
    questionsControllerFindAll: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/questions`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags questions
     * @name QuestionsControllerFindOne
     * @request GET:/api/questions/{id}
     */
    questionsControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/questions/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags questions
     * @name QuestionsControllerUpdate
     * @request PATCH:/api/questions/{id}
     */
    questionsControllerUpdate: (id: string, data: UpdateQuestionDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/questions/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags questions
     * @name QuestionsControllerRemove
     * @request DELETE:/api/questions/{id}
     */
    questionsControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/questions/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nutrition
     * @name NutritionControllerCreate
     * @request POST:/api/nutrition
     */
    nutritionControllerCreate: (data: CreateNutritionDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/nutrition`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags nutrition
     * @name NutritionControllerFindAll
     * @request GET:/api/nutrition
     */
    nutritionControllerFindAll: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/nutrition`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nutrition
     * @name NutritionControllerFindOne
     * @request GET:/api/nutrition/{id}
     */
    nutritionControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/nutrition/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags nutrition
     * @name NutritionControllerUpdate
     * @request PATCH:/api/nutrition/{id}
     */
    nutritionControllerUpdate: (id: string, data: UpdateNutritionDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/nutrition/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags nutrition
     * @name NutritionControllerRemove
     * @request DELETE:/api/nutrition/{id}
     */
    nutritionControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/nutrition/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags exercices
     * @name ExercicesControllerCreate
     * @request POST:/api/exercices
     */
    exercicesControllerCreate: (data: CreateExerciceDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/exercices`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags exercices
     * @name ExercicesControllerFindAll
     * @request GET:/api/exercices
     */
    exercicesControllerFindAll: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/exercices`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags exercices
     * @name ExercicesControllerFindOne
     * @request GET:/api/exercices/{id}
     */
    exercicesControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/exercices/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags exercices
     * @name ExercicesControllerUpdate
     * @request PATCH:/api/exercices/{id}
     */
    exercicesControllerUpdate: (id: string, data: UpdateExerciceDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/exercices/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags exercices
     * @name ExercicesControllerRemove
     * @request DELETE:/api/exercices/{id}
     */
    exercicesControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/exercices/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
}
