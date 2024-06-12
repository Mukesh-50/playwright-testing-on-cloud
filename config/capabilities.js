module.exports = [
    {
      'browserName': 'MicrosoftEdge',
      'browserVersion': '122.0',
      'LT:Options': 
      {
        'platform': 'Windows 10',
        'build': 'Playwright Test With Lambdatest',
        'name': 'Playwright Test With Lambdatest on Windows 10 - Edge',
        'user': process.env.LT_USERNAME,
        'accessKey': process.env.LT_ACCESS_KEY,
        'network': true,
        'video': true,
        'console': true
      }
    },
    {
        "browserName": "Chrome",
        "browserVersion": "125.0",
        "LT:Options": {
            "video": true,
            "platform": "Windows 10",
            "console": true,
            'build': 'Playwright Test With Lambdatest',
            'name': 'Playwright Test With Lambdatest on Windows 10 - Chrome',
            'user': process.env.LT_USERNAME,
            'accessKey': process.env.LT_ACCESS_KEY,
        }
    },
    {
        "browserName": "pw-firefox",
        "browserVersion": "latest",
        "LT:Options": {
            "video": true,
            "platform": "Windows 10",
            "console": true,
            'build': 'Playwright Test With Lambdatest',
            'name': 'Playwright Test With Lambdatest on Windows 10 - Firefox',
            'user': process.env.LT_USERNAME,
            'accessKey': process.env.LT_ACCESS_KEY,
        }
    }

  ];
  