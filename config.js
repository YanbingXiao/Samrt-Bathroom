/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert"
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "bottom_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				weatherEndpoint: "",
				lat:47.60621,
				lon:-122.33207,
				type: "current",
				locationID: 5809844,
				apiKey:"d3485420da2b99a0caa4b58e1048e916"
			}
		},
		
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-StopwatchTimer",
			//position: "middle_center",
			config: {
				animation: true,
				sound: true,
				soundFile: 'buzz.wav',
				useNativeSound: true,
				useAlertStyle: true,
				//notification: ["START_TIMER", "PAUSE_STOPWATCHTIMER"]			
			}
				
		},
		{
			module: "MMM-Cursor",
			config: {
				}
		},
		{
			module: "MMM-TouchButton",
			position: "middle_center",
			config: {
				buttons: [
					{
					name: "Runpython",
					icon: "fa fa-bluetooth",
					title: "Turn On/Off Toothbrush",
					command: "python",
					args: "/home/group6/MagicMirror/modules/MMM-PythonPrint/button.py"
					}
				]
			}

		},
		{
 			module:"MMM-PythonPrint",
     			position:"top center",
 			disabled:false,
 			config: {
 				// name of the python process to execute (could be python3)
 				pythonName: 'python',
		 		// command file in module folder
		 		// if false, YOU will provide the full path to the python program
		 		localfolder: false,
		 		command: '/home/group6/MagicMirror/modules/MMM-PythonPrint/printit.py',
		 		repetative: true,
		 		cycletime: 1000,

		 		// print debugging messages from the node_helper
		 		debug: true,
		 		transform:(data)=>{return data.replace(/\n/g,"<br>")}
 				}
 		}
	]
/*
-user presses button
-run python script that turns on toothbrush (test: print "hello world" to mirror)
	-
-*/
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
