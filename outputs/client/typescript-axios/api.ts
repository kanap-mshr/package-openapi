/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Tutorial
 * OpenAPI Tutorial by halhorn
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * サーバーの状態のレスポンス
 * @export
 * @interface GetHealthResponse
 */
export interface GetHealthResponse {
    /**
     * 
     * @type {string}
     * @memberof GetHealthResponse
     */
    status: GetHealthResponseStatusEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum GetHealthResponseStatusEnum {
    Ok = 'ok'
}


/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * サーバーの状態を返します。
         * @summary サーバーの状態を返します
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        openapitutorialControllerHealthCall: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/health`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * サーバーの状態を返します。
         * @summary サーバーの状態を返します
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async openapitutorialControllerHealthCall(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetHealthResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.openapitutorialControllerHealthCall(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * サーバーの状態を返します。
         * @summary サーバーの状態を返します
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        openapitutorialControllerHealthCall(options?: any): AxiosPromise<GetHealthResponse> {
            return localVarFp.openapitutorialControllerHealthCall(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * サーバーの状態を返します。
     * @summary サーバーの状態を返します
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public openapitutorialControllerHealthCall(options?: any) {
        return DefaultApiFp(this.configuration).openapitutorialControllerHealthCall(options).then((request) => request(this.axios, this.basePath));
    }
}


