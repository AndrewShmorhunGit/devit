export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export enum HttpHeader {
  CONTENT_TYPE = "content-type",
  AUTHORIZATION = "authorization",
  X_AMZ_TARGET = "x-amz-target",
}

export enum ApiAuthTarget {
  SIGN_IN = "AWSCognitoIdentityProviderService.InitiateAuth",
  SIGN_UP = "AWSCognitoIdentityProviderService.SignUp",
}

export enum ApiContentType {
  APPLICATION_JSON = "application/json",
  FORM_DATA = "multipart/form-data",
  X_AMZ_JSON = "application/x-amz-json-1.1",
}

export enum ProvidedTag {
  USER_DATA = "userData",
}

export enum SOCKET_MESSAGE_TYPE {
  ERROR = "error",
  SUCCESS = "success",
  CONNECTED = "connection",
  DISCONNECTED = "disconnect",
}
