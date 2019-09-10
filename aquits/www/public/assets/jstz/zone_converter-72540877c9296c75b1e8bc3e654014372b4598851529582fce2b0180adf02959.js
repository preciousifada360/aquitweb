var mapZones={};mapZones["International Date Line West"]="Pacific/Midway",mapZones["Midway Island"]="Pacific/Midway",mapZones["American Samoa"]="Pacific/Pago_Pago",mapZones.Hawaii="Pacific/Honolulu",mapZones.Alaska="America/Juneau",mapZones["Pacific Time (US & Canada)"]="America/Los_Angeles",mapZones.Tijuana="America/Tijuana",mapZones["Mountain Time (US & Canada)"]="America/Denver",mapZones.Arizona="America/Phoenix",mapZones.Chihuahua="America/Chihuahua",mapZones.Mazatlan="America/Mazatlan",mapZones["Central Time (US & Canada)"]="America/Chicago",mapZones.Saskatchewan="America/Regina",mapZones.Guadalajara="America/Mexico_City",mapZones["Mexico City"]="America/Mexico_City",mapZones.Monterrey="America/Monterrey",mapZones["Central America"]="America/Guatemala",mapZones["Eastern Time (US & Canada)"]="America/New_York",mapZones["Indiana (East)"]="America/Indiana/Indianapolis",mapZones.Bogota="America/Bogota",mapZones.Lima="America/Lima",mapZones.Quito="America/Lima",mapZones["Atlantic Time (Canada)"]="America/Halifax",mapZones.Caracas="America/Caracas",mapZones["La Paz"]="America/La_Paz",mapZones.Santiago="America/Santiago",mapZones.Newfoundland="America/St_Johns",mapZones.Brasilia="America/Sao_Paulo",mapZones["Buenos Aires"]="America/Argentina/Buenos_Aires",mapZones.Georgetown="America/Guyana",mapZones.Greenland="America/Godthab",mapZones["Mid-Atlantic"]="Atlantic/South_Georgia",mapZones.Azores="Atlantic/Azores",mapZones["Cape Verde Is."]="Atlantic/Cape_Verde",mapZones.Dublin="Europe/Dublin",mapZones.Edinburgh="Europe/London",mapZones.Lisbon="Europe/Lisbon",mapZones.London="Europe/London",mapZones.Casablanca="Africa/Casablanca",mapZones.Monrovia="Africa/Monrovia",mapZones.UTC="Etc/UTC",mapZones.Belgrade="Europe/Belgrade",mapZones.Bratislava="Europe/Bratislava",mapZones.Budapest="Europe/Budapest",mapZones.Ljubljana="Europe/Ljubljana",mapZones.Prague="Europe/Prague",mapZones.Sarajevo="Europe/Sarajevo",mapZones.Skopje="Europe/Skopje",mapZones.Warsaw="Europe/Warsaw",mapZones.Zagreb="Europe/Zagreb",mapZones.Brussels="Europe/Brussels",mapZones.Copenhagen="Europe/Copenhagen",mapZones.Madrid="Europe/Madrid",mapZones.Paris="Europe/Paris",mapZones.Amsterdam="Europe/Amsterdam",mapZones.Berlin="Europe/Berlin",mapZones.Bern="Europe/Berlin",mapZones.Rome="Europe/Rome",mapZones.Stockholm="Europe/Stockholm",mapZones.Vienna="Europe/Vienna",mapZones["West Central Africa"]="Africa/Algiers",mapZones.Bucharest="Europe/Bucharest",mapZones.Cairo="Africa/Cairo",mapZones.Helsinki="Europe/Helsinki",mapZones.Kyiv="Europe/Kiev",mapZones.Riga="Europe/Riga",mapZones.Sofia="Europe/Sofia",mapZones.Tallinn="Europe/Tallinn",mapZones.Vilnius="Europe/Vilnius",mapZones.Athens="Europe/Athens",mapZones.Istanbul="Europe/Istanbul",mapZones.Minsk="Europe/Minsk",mapZones.Jerusalem="Asia/Jerusalem",mapZones.Harare="Africa/Harare",mapZones.Pretoria="Africa/Johannesburg",mapZones.Moscow="Europe/Moscow",mapZones["St. Petersburg"]="Europe/Moscow",mapZones.Volgograd="Europe/Moscow",mapZones.Kuwait="Asia/Kuwait",mapZones.Riyadh="Asia/Riyadh",mapZones.Nairobi="Africa/Nairobi",mapZones.Baghdad="Asia/Baghdad",mapZones.Tehran="Asia/Tehran",mapZones["Abu Dhabi"]="Asia/Muscat",mapZones.Muscat="Asia/Muscat",mapZones.Baku="Asia/Baku",mapZones.Tbilisi="Asia/Tbilisi",mapZones.Yerevan="Asia/Yerevan",mapZones.Kabul="Asia/Kabul",mapZones.Ekaterinburg="Asia/Yekaterinburg",mapZones.Islamabad="Asia/Karachi",mapZones.Karachi="Asia/Karachi",mapZones.Tashkent="Asia/Tashkent",mapZones.Chennai="Asia/Kolkata",mapZones.Kolkata="Asia/Kolkata",mapZones.Mumbai="Asia/Kolkata",mapZones["New Delhi"]="Asia/Kolkata",mapZones.Kathmandu="Asia/Kathmandu",mapZones.Astana="Asia/Dhaka",mapZones.Dhaka="Asia/Dhaka",mapZones["Sri Jayawardenepura"]="Asia/Colombo",mapZones.Almaty="Asia/Almaty",mapZones.Novosibirsk="Asia/Novosibirsk",mapZones.Rangoon="Asia/Rangoon",mapZones.Bangkok="Asia/Bangkok",mapZones.Hanoi="Asia/Bangkok",mapZones.Jakarta="Asia/Jakarta",mapZones.Krasnoyarsk="Asia/Krasnoyarsk",mapZones.Beijing="Asia/Shanghai",mapZones.Chongqing="Asia/Chongqing",mapZones["Hong Kong"]="Asia/Hong_Kong",mapZones.Urumqi="Asia/Urumqi",mapZones["Kuala Lumpur"]="Asia/Kuala_Lumpur",mapZones.Singapore="Asia/Singapore",mapZones.Taipei="Asia/Taipei",mapZones.Perth="Australia/Perth",mapZones.Irkutsk="Asia/Irkutsk",mapZones["Ulaan Bataar"]="Asia/Ulaanbaatar",mapZones.Seoul="Asia/Seoul",mapZones.Osaka="Asia/Tokyo",mapZones.Sapporo="Asia/Tokyo",mapZones.Tokyo="Asia/Tokyo",mapZones.Yakutsk="Asia/Yakutsk",mapZones.Darwin="Australia/Darwin",mapZones.Adelaide="Australia/Adelaide",mapZones.Canberra="Australia/Melbourne",mapZones.Melbourne="Australia/Melbourne",mapZones.Sydney="Australia/Sydney",mapZones.Brisbane="Australia/Brisbane",mapZones.Hobart="Australia/Hobart",mapZones.Vladivostok="Asia/Vladivostok",mapZones.Guam="Pacific/Guam",mapZones["Port Moresby"]="Pacific/Port_Moresby",mapZones.Magadan="Asia/Magadan",mapZones["Solomon Is."]="Pacific/Guadalcanal",mapZones["New Caledonia"]="Pacific/Noumea",mapZones.Fiji="Pacific/Fiji",mapZones.Kamchatka="Asia/Kamchatka",mapZones["Marshall Is."]="Pacific/Majuro",mapZones.Auckland="Pacific/Auckland",mapZones.Wellington="Pacific/Auckland",mapZones["Nuku'alofa"]="Pacific/Tongatapu",mapZones["Tokelau Is."]="Pacific/Fakaofo",mapZones.Samoa="Pacific/Apia";var convertJsToRuby=function(a){for(var e in mapZones)if(mapZones[e]==a)return e;return"not found"};