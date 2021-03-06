﻿import { JsonObject } from "../utils/types";

define([], function () {
    return {
        findServers: async function (timeoutMs): Promise<JsonObject> {
            const response = await fetch(`electronserverdiscovery://findservers?timeout=${timeoutMs}`, {
                method: "POST",
            });
            if (!response.ok) {
                throw response;
            }
            // Expected server properties
            // Name, Id, Address, EndpointAddress (optional)
            return response.json();
        },
    };
});
