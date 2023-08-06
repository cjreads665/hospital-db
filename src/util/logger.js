import logger from 'pino';
//we can use logger wihtout importing to a separate file.
//we could directly import it to a file and use it without such config

const log = logger({
    base: {pid: false},
    transport:{
        target: 'pino-pretty',
        options:{
            colorized: true
        }
    },
    timestamp: ()=>`,"time": "${new Date().toLocaleString()}"`
})

export default log;



/**
 * In the pino logger, the transport option allows you to specify different targets or destinations for your log output. Each target is a separate module that you can use to format or send your logs in a particular way. Here are some common transport targets that you can use:

pino-pretty: This transport target makes the logs pretty and colorful when they show up on the console. It's useful for making the logs easier to read during development.

pino-logflare: This target sends your logs to the Logflare logging service, which allows you to store and analyze your logs in the cloud.

pino-elasticsearch: This target sends your logs to an Elasticsearch instance, which is a popular search and analytics engine used for storing and querying large amounts of data.

pino-file: This target writes your logs to a file on the filesystem. It's useful for storing logs for later analysis or archival purposes.

pino-http: This target sends your logs to an HTTP endpoint, which could be another server or a logging service that can receive logs over HTTP.

pino-syslog: This target sends your logs to the system log on Unix-based systems, like Linux or macOS.

Keep in mind that each transport target may have its own specific options and configuration parameters, so you need to refer to the documentation of the specific target you want to use to see all available options.

You can find more information about different pino transport targets and their options in the pino documentation or by searching for the specific target you're interested in.
 */