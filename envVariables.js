/**
 * name : envVariables.js.
 * author : Aman Karki.
 * created-date : 20-July-2020.
 * Description : Required Environment variables .
 */

let table = require("cli-table");

let tableData = new table();

let enviromentVariables = {
  "APPLICATION_PORT" : {
    "message" : "Please specify the value for e.g. 4201",
    "optional" : false
  },
  "APPLICATION_ENV" : {
    "message" : "Please specify the value for e.g. local/development/qa/production",
    "optional" : false
  },
  "APPLICATION_BASE_URL" : {
    "message" : "Required Application base url",
    "optional" : false
  },
  "AUTHORIZATION" : {
    "message" : "Required Server authorization code",
    "optional" : false
  },
  "APPLICATION_BASE_HOST" : {
    "message" : "Required Base host",
    "optional" : false
  },
  "MONGODB_URL" : {
    "message" : "Required mongodb url",
    "optional" : false
  },
  "MONGODB_PORT" : {
    "message" : "Required mongodb port",
    "optional" : false
  },
  "CASSANDRA_HOST" : {
    "message" : "Required cassandra host",
    "optional" : false
  },
  "CASSANDRA_PORT" : {
    "message" : "Required cassandra port",
    "optional" : false
  },
  "CASSANDRA_DB" : {
    "message" : "Required cassandra Database",
    "optional" : false
  },
  "SUNBIRD_BASE_URL" : {
    "message" : "Required sunbird base URL",
    "optional" : false
  },
  "MONGODB_DATABASE_NAME" : {
    "message" : "Required database",
    "optional" : false
  },
  "ELASTICSEARCH_HOST_URL" : {
    "message" : "Required host",
    "optional" : false
  },
  "ELASTICSEARCH_DICTIONARY_INDEX" : {
    "message" : "Required dictionary index",
    "optional" : false
  },
  "ELASTICSEARCH_DICTIONARY_INDEX_TYPE" : {
    "message" : "Required dictionary index type",
    "optional" : false
  },
  "ELASTICSEARCH_BODH_CONTENT_INDEX" : {
    "message" : "Required bodh content index",
    "optional" : false
  },
  "ELASTICSEARCH_BODH_CONTENT_INDEX_TYPE" : {
    "message" : "Required bodh content type",
    "optional" : false
  },
  "INTERNAL_ACCESS_TOKEN" : {
    "message" : "Required internal access token",
    "optional" : false
  },
  "SUNBIRD_KEYCLOAK_AUTH_ENDPOINT" : {
    "message" : "Required sunbird keycloak auth endpoint",
    "optional" : false
  },
  "SUNBIRD_KEYCLOAK_REALM" : {
    "message" : "Required sunbird keycloak realm",
    "optional" : false
  },
  "SUNBIRD_KEYCLOAK_CLIENT_ID" : {
    "message" : "Required sunbird keycloak client id",
    "optional" : false
  },
  "SUNBIRD_KEYCLOAK_PUBLIC" : {
    "message" : "Required sunbird keycloak public",
    "optional" : false
  },
  "SUNBIRD_CACHE_STORE" : {
    "message" : "Required sunbird cache store",
    "optional" : false
  },
  "SUNBIRD_CACHE_TTL" : {
    "message" : "Required sunbird cache ttl",
    "optional" : false
  },
  "MIGRATION_COLLECTION" : {
    "message" : "Required migrations collection name",
    "optional" : false
  },
  "MIGRATION_DIR" : {
    "message" : "Required migrations directory name",
    "optional" : false
  },
  "SLACK_COMMUNICATIONS_ON_OFF" : {
    "message" : "Enable/Disable slack communications",
    "optional" : false,
    "possibleValues" : [
      "ON",
      "OFF"
    ]
  },
  "SLACK_EXCEPTION_LOG_URL" : {
    "message" : "Enable/Disable slack exception log url",
    "optional" : false
  },
  "SLACK_TOKEN" : {
    "message" : "Required slack token",
    "optional" : false
  },
  "URL_PREFIX" : {
    "message" : "Required",
    "optional" : false
  },
  "ENABLE_CONSOLE_LOGGING" : {
    "message" : "Please specify the value for e.g. ON/OFF",
    "optional" : false
  },
  "ENABLE_FILE_LOGGING" : {
    "message" : "Please specify the value for e.g. ON/OFF",
    "optional" : false
  },
}

let success = true;

module.exports = function() {
  Object.keys(enviromentVariables).forEach(eachEnvironmentVariable=>{
  
    let tableObj = {
      [eachEnvironmentVariable] : ""
    };
  
    if( !(process.env[eachEnvironmentVariable]) && !(enviromentVariables[eachEnvironmentVariable].optional)) {
      success = false;

      if(enviromentVariables[eachEnvironmentVariable] && enviromentVariables[eachEnvironmentVariable].message !== "") {
        tableObj[eachEnvironmentVariable] = 
        enviromentVariables[eachEnvironmentVariable].message;
      } else {
        tableObj[eachEnvironmentVariable] = "required";
      }
    } else {

      tableObj[eachEnvironmentVariable] = "success";

      if( 
        enviromentVariables[eachEnvironmentVariable].possibleValues &&
        !enviromentVariables[eachEnvironmentVariable].possibleValues.includes(process.env[eachEnvironmentVariable])
      ) {
        tableObj[eachEnvironmentVariable] += ` Valid values - ${enviromentVariables[eachEnvironmentVariable].possibleValues.join(", ")}`;
      } else {
        
        if(enviromentVariables[eachEnvironmentVariable].optional) {
          tableObj[eachEnvironmentVariable] = enviromentVariables[eachEnvironmentVariable].message;
        }

      }
      
    }

    tableData.push(tableObj);
  })

  LOGGER.info(tableData.toString());

  return {
    success : success
  }
}


