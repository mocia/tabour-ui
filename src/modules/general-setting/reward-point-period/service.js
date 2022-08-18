import { inject, Lazy } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import { RestService } from "../../../utils/rest-service";
import { Container } from "aurelia-dependency-injection";
import { Config } from "aurelia-api";

export class Service extends RestService {
  constructor(http, aggregator, config, endpoint) {
    super(http, aggregator, config, "generalSetting");
  }

  getRewardPointExipred() {
    var header;
    var endpoint = "GetGeneralSettingById/1";
    var request = {
      method: "GET",
      headers: new Headers(
        Object.assign(
          {
            "Content-type": "application/json",
            // 'Access-Control-Allow-Origin': '*',
            // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRhdmlkbm9iZWxzaHRAZ21haWwuY29tIiwiZW1haWwiOiJkYXZpZG5vYmVsc2h0QGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiODEzNDA5OTkyNDUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9vdGhlcnBob25lIjoiMCIsIm5iZiI6MTYwMzI1NjgzOCwiZXhwIjoxMjk2MzczMzYzOCwiaWF0IjoxNjAzMjU2ODM4LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDMyMi8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDMyMi8ifQ.bEIuo5njWt3vIqBQGCQzLyEaMmUCaRtpUI2BBEy2zCo'
          },
          this.header,
          header
        )
      ),
    };

    var promise = this.endpoint.find(endpoint);
    this.publish(promise);
    return promise.then((result) => {
      this.publish(promise);
      return Promise.resolve(result);
    });
  }

  update(data) {
    var endpoint = "UpdateGeneralSetting";
    return super.put(endpoint, data);
  }
}
