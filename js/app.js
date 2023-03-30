
window.__INITIAL_STATE__ = {
	"isCurrentPageDisabled": false,
	"errors": [],
	"locale": "ru",
	"forwardedHost": "Trader.com",
	"host": "Trader.com",
	"authorization": {
		"user": {
			"clientId": null,
			"email": null,
			"saveShowingUserName": false,
			"clientName": null,
			"clientNameOriginal": null,
			"mobilePhone": null,
			"ipbForumUserId": null,
			"ipbForumUserNick": null,
			"isAuthorized": false,
			"login": null,
			"countryRegId": null
		},
		"isUserDataFetching": true,
		"timeZoneOffset": -180,
		"successUrl": "",
		"isFromRegistration": false,
		"currentStep": "login",
		"account": "",
		"password": "",
		"passwordConfirm": "",
		"captcha": null,
		"geeTestCaptchaConfig": null,
		"geeTestCaptcha": null,
		"confirmCode": null,
		"confirmCodeForm": {},
		"confirmCodeError": null,
		"isShowCaptcha": false,
		"isCodeRequired": false,
		"redirectType": null
	},
	"banners": {},
	"callback": {
		"routeName": "callback",
		"formName": "callback",
		"isPopupOpened": false,
		"isFormSended": false,
		"widgetButtonsList": {},
		"isWidgetDisplayed": false
	},
	"confirmationCode": {
		"reset_password": {
			"second_step": {}
		},
		"login": {
			"second_step": {},
			"new_password_second_step": {}
		},
		"registration": {
			"third_step": {}
		}
	},
	"helper": {
		"myHost": "https:\u002F\u002Fmy.Trader.com"
	},
	"investLocalStorage": {
		"isLoaded": false,
		"storage": {
			"version": 1,
			"pamm": {},
			"portfolio": {},
			"favorites": [],
			"savedFilters": [],
			"constructorCurrency": "USD",
			"constructorShared": false,
			"constructorPamms": {},
			"bannersPartner": null,
			"chartView": "linear",
			"chartAxis": "linear",
			"ratingsLayout": "grid",
			"ratingsIsFullScreen": false,
			"ratingsIsFiltersPanelOpen": false,
			"ratingOpenFilters": [],
			"accountsPerPage": 25
		},
		"bulletins": null,
		"isCorrectBulletinHash": true
	},
	"forms": {
		"school_courses": {
			"remind_course": {
				"fields": {
					"name": {
						"isShow": true,
						"label": "",
						"value": "",
						"textError": "",
						"status": "default",
						"isValid": false,
						"isEmpty": true,
						"isValidate": false
					},
					"email": {
						"isShow": true,
						"label": "",
						"value": "",
						"textError": "",
						"status": "default",
						"isValid": false,
						"isEmpty": true,
						"isValidate": false
					},
					"phone": {
						"isShow": true,
						"label": "",
						"value": "",
						"textError": "",
						"status": "default",
						"isValid": false,
						"isEmpty": true,
						"isValidate": false
					},
					"imgcaptcha": {
						"isShow": false,
						"isUpdateCaptcha": false,
						"label": "",
						"tooltip": "",
						"value": "",
						"textError": "",
						"status": "default",
						"isValid": false,
						"isEmpty": true,
						"isValidate": false
					},
					"isClientAgreed": {
						"value": false,
						"textError": "",
						"status": "default",
						"isValid": false,
						"isValidate": false
					}
				},
				"isLoadingButtonOfForm": false,
				"objectOfErrorResponse": {},
				"isTriggeredValidateOfFields": false
			}
		},
		"school_broadcast_id": {
			"remind_course": {
				"fields": {
					"name": {
						"isShow": true,
						"label": "",
						"value": "",
						"textError": "",
						"status": "default",
						"isValid": false,
						"isEmpty": true,
						"isValidate": false
					},
					"email": {
						"isShow": true,
						"label": "",
						"value": "",
						"textError": "",
						"status": "default",
						"isValid": false,
						"isEmpty": true,
						"isValidate": false
					},
					"phone": {
						"isShow": true,
						"label": "",
						"value": "",
						"textError": "",
						"status": "default",
						"isValid": false,
						"isEmpty": true,
						"isValidate": false
					},
					"captcha": {
						"isShow": false,
						"isUpdateCaptcha": false,
						"label": "",
						"tooltip": "",
						"value": "",
						"textError": "",
						"status": "default",
						"isValid": false,
						"isEmpty": true,
						"isValidate": false
					},
					"isClientAgreed": {
						"value": false,
						"textError": "",
						"status": "default",
						"isValid": false,
						"isValidate": false
					}
				},
				"isLoadingButtonOfForm": false,
				"objectOfErrorResponse": {},
				"isTriggeredValidateOfFields": false
			}
		},
		"callback": {
			"callback": {
				"fields": {
					"name": {
						"isShow": true,
						"label": "",
						"tooltip": "",
						"value": "",
						"textError": "",
						"status": "default",
						"isValid": false,
						"isEmpty": true,
						"isValidate": false
					},
					"phone": {
						"label": "",
						"tooltip": "",
						"value": "",
						"textError": "",
						"status": "default",
						"isValid": false,
						"isValidate": false,
						"isLoadingField": null,
						"promisePending": null
					},
					"captcha": {
						"isShow": false,
						"isUpdateCaptcha": false,
						"label": "",
						"tooltip": "",
						"value": "",
						"textError": "",
						"status": "default",
						"isValid": false,
						"isEmpty": true,
						"isValidate": false
					}
				},
				"objectOfErrorResponse": {},
				"isLoadingButtonOfForm": false,
				"isTriggeredValidateOfFields": false
			}
		}
	},
	"menu": {
		"items": [{
			"caption": "trading",
			"route": "trading",
			"children": [
				[{
					"caption": "trading_trading_terms",
					"route": "trading_trading_terms"
				}, {
					"caption": "trading_deposit_withdrawal",
					"route": "trading_deposit_withdrawal",
					"children": [{
						"caption": "trading_deposit_withdrawal_method",
						"route": "trading_deposit_withdrawal_method"
					}]
				}, {
					"caption": "trading_trading_signals",
					"route": "trading_trading_signals",
					"meta": {
						"hideFromMenu": true
					}
				}],
				[{
					"caption": "platforms_Trader_mobile",
					"route": "platforms_Trader_mobile"
				}, {
					"caption": "platforms_metatrader4",
					"route": "platforms_metatrader4"
				}, {
					"caption": "platforms_metatrader5",
					"route": "platforms_metatrader5"
				}, {
					"caption": "trading_trading_signals",
					"route": "trading_trading_signals",
					"meta": {
						"hideFromMenu": true
					}
				}]
			]
		}, {
			"caption": "investments",
			"route": "investor",
			"children": [
				[{
					"caption": "investments_pamm_ratings",
					"route": "investor_pamm_ratings",
					"children": [{
						"caption": "investments_pamm_item",
						"route": "investor_pamm_item",
						"children": [{
							"caption": "investments_pamm_banners",
							"route": "investor_pamm_banners"
						}]
					}, {
						"caption": "investments_pamm_archive",
						"route": "investor_pamm_archive"
					}, {
						"caption": "investments_portfolio_archive",
						"route": "investor_portfolio_archive"
					}, {
						"caption": "investor_pamm_badges",
						"route": "investor_pamm_badges"
					}]
				}, {
					"caption": "investor_pamm_about",
					"route": "investor_pamm_about",
					"children": [{
						"caption": "investor_pamm_how_does_it_work",
						"route": "investor_pamm_how_does_it_work"
					}]
				}, {
					"caption": "investor_investment_terms",
					"route": "investor_investment_terms"
				}, {
					"caption": "investments_portfolio_ratings",
					"route": "investor_portfolio_ratings",
					"children": [{
						"caption": "investments_portfolio_item",
						"route": "investor_portfolio_item"
					}],
					"meta": {
						"hideFromMenu": true
					}
				}, {
					"caption": "investments_manager_ratings",
					"route": "investor_manager_ratings",
					"children": [{
						"caption": "investments_manager_item",
						"route": "investor_manager_item"
					}],
					"meta": {
						"hideFromMenu": true
					}
				}, {
					"caption": "investments_pamm_ratings",
					"route": "investor_investor_ratings",
					"meta": {
						"hideFromMenu": true
					}
				}, {
					"caption": "investor_partnership",
					"route": "investor_partnership",
					"meta": {
						"hideFromMenu": true
					}
				}],
				[{
					"caption": "investments_portfolio_constructor",
					"route": "investor_portfolio_constructor"
				}, {
					"caption": "platforms_investor_app",
					"route": "platforms_investor_app"
				}]
			]
		}, {
			"caption": "promo_bonus_Trader_cashback",
			"route": "promo_bonus_Trader_cashback"
		}, {
			"caption": "promo_bonus",
			"route": "promo_bonus",
			"children": [
				[{
					"caption": "promo_bonus_promo",
					"route": "promo_bonus_promo",
					"children": [{
						"caption": "promo_bonus_promo_item",
						"route": "promo_bonus_promo_item"
					}]
				}],
				[{
					"caption": "promo_bonus_refer_a_friend",
					"route": "promo_bonus_refer_a_friend",
					"meta": {
						"hideFromMenuOn": ["ru", "ua"]
					}
				}]
			]
		}, {
			"caption": "analytics",
			"route": "analytics",
			"children": [
				[{
					"caption": "analytics_reviews",
					"route": "analytics_reviews",
					"children": [{
						"caption": "analytics_reviews_category",
						"route": "analytics_reviews_category",
						"children": [{
							"caption": "analytics_reviews_item",
							"route": "analytics_reviews_item"
						}]
					}, {
						"caption": "analytics_reviews_tag",
						"route": "analytics_reviews_tag",
						"meta": {
							"hideFromMenu": true
						}
					}]
				}, {
					"caption": "analytics_analysts",
					"route": "analytics_analysts",
					"meta": {
						"hideFromMenu": true
					},
					"children": [{
						"caption": "analytics_analysts_author",
						"route": "analytics_analysts_author"
					}]
				}, {
					"caption": "analytics_calendar_fxstreet",
					"route": "analytics_calendar_fxstreet"
				}, {
					"caption": "analytics_calendar_fxstreet",
					"route": "analytics_calendar_fxstreet_eventId",
					"meta": {
						"hideFromMenu": true
					}
				}, {
					"caption": "analytics_market_analysis_tools",
					"route": "analytics_market_analysis_tools",
					"children": [{
						"caption": "analytics_market_analysis_tools_interest_rates",
						"route": "analytics_market_analysis_tools_interest_rates"
					}, {
						"caption": "analytics_market_analysis_tools_holidays",
						"route": "analytics_market_analysis_tools_holidays"
					}, {
						"caption": "analytics_market_analysis_tools_autochartist",
						"route": "analytics_market_analysis_tools_autochartist"
					}]
				}, {
					"caption": "platforms_Trader_mobile",
					"route": "platforms_Trader_mobile",
					"meta": {
						"showInMenuOn": ["ru"]
					}
				}],
				[{
					"caption": "markets_cbr",
					"route": "markets_cbr",
					"meta": {
						"showInMenuOn": ["ru"]
					},
					"children": [{
						"caption": "markets_cbr_currency",
						"route": "markets_cbr_currency"
					}]
				}, {
					"caption": "markets_forex",
					"route": "markets_forex",
					"meta": {
						"showInMenuOn": ["ru"]
					}
				}, {
					"caption": "converter",
					"route": "converter",
					"meta": {
						"showInMenuOn": ["ru", "ua", "en"]
					}
				}, {
					"caption": "platforms_Trader_mobile",
					"route": "platforms_Trader_mobile",
					"meta": {
						"hideFromMenuOn": ["ru"]
					}
				}, {
					"caption": "markets_crypto",
					"route": "markets_crypto",
					"meta": {
						"showInMenuOn": ["ru"]
					},
					"children": [{
						"caption": "markets_crypto_item",
						"route": "markets_crypto_item",
						"meta": {
							"hideFromMenu": true
						}
					}]
				}, {
					"caption": "markets_crypto",
					"route": "markets_crypto_currency",
					"meta": {
						"hideFromMenu": true
					},
					"children": [{
						"caption": "markets_crypto_item",
						"route": "markets_crypto_item_currency",
						"meta": {
							"hideFromMenu": true
						}
					}]
				}, {
					"caption": "analytics_fxstreet",
					"route": "analytics_fxstreet",
					"meta": {
						"hideFromMenu": true
					}
				}, {
					"caption": "analytics_prime_news",
					"route": "analytics_prime_news",
					"meta": {
						"hideFromMenu": true
					}
				}, {
					"caption": "markets_forex",
					"route": "markets_forex",
					"meta": {
						"hideFromMenu": true
					},
					"children": [{
						"caption": "markets_forex_item",
						"route": "markets_forex_item",
						"meta": {
							"hideFromMenu": true
						}
					}, {
						"caption": "markets_forex_charts",
						"route": "markets_forex_charts",
						"meta": {
							"hideFromMenu": true
						}
					}, {
						"caption": "markets_forex_quotes",
						"route": "markets_forex_quotes",
						"meta": {
							"hideFromMenu": true
						}
					}]
				}, {
					"caption": "markets_crypto_bitcoin",
					"route": "markets_crypto_bitcoin",
					"meta": {
						"hideFromMenu": true
					}
				}, {
					"caption": "markets_crypto_bitcoin_exchange_rate_today_date",
					"route": "markets_crypto_bitcoin_exchange_rate_today_date",
					"meta": {
						"hideFromMenu": true
					}
				}]
			]
		}, {
			"caption": "school",
			"route": "school",
			"meta": {
				"showInMenuOn": ["ru", "ua"],
				"hideFromMenuOn": ["en"]
			},
			"children": [
				[{
					"caption": "school_courses",
					"route": "school_courses",
					"children": [{
						"caption": "school_courses_item",
						"route": "school_courses_item"
					}]
				}, {
					"caption": "school_broadcast_id",
					"route": "school_broadcast_id",
					"meta": {
						"hideFromMenu": true
					}
				}, {
					"caption": "beginner",
					"route": "beginner"
				}],
				[{
					"caption": "beginner_articles",
					"route": "beginner_articles"
				}, {
					"caption": "beginner_demo_account",
					"route": "beginner_demo_account"
				}, {
					"caption": "beginner_glossary",
					"route": "beginner_glossary",
					"children": [
						[{
							"caption": "beginner_glossary_item",
							"route": "beginner_glossary_item"
						}]
					]
				}]
			]
		}, {
			"caption": "beginner",
			"route": "beginner",
			"meta": {
				"hideFromMenuOn": ["ru", "ua"]
			},
			"children": [
				[{
					"caption": "beginner_articles",
					"route": "beginner_articles",
					"children": [{
						"caption": "beginner_articles_category",
						"route": "beginner_articles_category",
						"children": [{
							"caption": "beginner_articles_item",
							"route": "beginner_articles_item"
						}]
					}]
				}, {
					"caption": "beginner_glossary",
					"route": "beginner_glossary",
					"children": [
						[{
							"caption": "beginner_glossary_item",
							"route": "beginner_glossary_item"
						}]
					]
				}],
				[{
					"caption": "beginner_demo_account",
					"route": "beginner_demo_account"
				}]
			]
		}, {
			"caption": "company",
			"route": "company",
			"children": [
				[{
					"caption": "company_news",
					"route": "company_news",
					"children": [{
						"caption": "company_news_item",
						"route": "company_news_item"
					}]
				}, {
					"caption": "company_performance_statistics",
					"route": "company_performance_statistics"
				}, {
					"caption": "company_partners",
					"route": "company_partners",
					"meta": {
						"showInMenuOn": ["ru", "ua"]
					},
					"children": [{
						"caption": "company_partners_item",
						"route": "company_partners_item"
					}]
				}, {
					"caption": "company_contacts",
					"route": "company_contacts"
				}, {
					"caption": "company_history",
					"route": "company_history",
					"meta": {
						"hideFromMenu": true
					}
				}, {
					"caption": "company_regulatory_documents",
					"route": "company_regulatory_documents",
					"meta": {
						"hideFromMenu": true
					}
				}, {
					"caption": "company_regulatory_documents_archive",
					"route": "company_regulatory_documents_archive",
					"meta": {
						"hideFromMenu": true
					}
				}, {
					"caption": "company_financial_commission",
					"route": "company_financial_commission",
					"meta": {
						"hideFromMenu": true
					}
				}],
				[{
					"caption": "company_partnership",
					"route": "company_partnership",
					"children": [{
						"caption": "company_partnership_revenue_share",
						"route": "company_partnership_revenue_share"
					}, {
						"caption": "company_partnership_cpa",
						"route": "company_partnership_cpa",
						"meta": {
							"hideFromMenu": true
						}
					}]
				}, {
					"caption": "company_sponsorship",
					"route": "company_sponsorship"
				}, {
					"caption": "company_social_responsibility",
					"route": "company_social_responsibility"
				}]
			]
		}, {
			"caption": "platforms",
			"route": "platforms",
			"meta": {
				"hideFromMenu": true
			},
			"children": [
				[{
					"caption": "platforms_metatrader4",
					"route": "platforms_metatrader4"
				}, {
					"caption": "platforms_metatrader4_mac",
					"route": "platforms_metatrader4_mac"
				}, {
					"caption": "platforms_metatrader4_ios",
					"route": "platforms_metatrader4_ios"
				}, {
					"caption": "platforms_metatrader4_android",
					"route": "platforms_metatrader4_android"
				}, {
					"caption": "platforms_metatrader4_online",
					"route": "platforms_metatrader4_online"
				}],
				[{
					"caption": "platforms_metatrader5",
					"route": "platforms_metatrader5"
				}, {
					"caption": "platforms_metatrader5_mac",
					"route": "platforms_metatrader5_mac"
				}, {
					"caption": "platforms_metatrader5_ios",
					"route": "platforms_metatrader5_ios"
				}, {
					"caption": "platforms_metatrader5_android",
					"route": "platforms_metatrader5_android"
				}, {
					"caption": "platforms_metatrader5_online",
					"route": "platforms_metatrader5_online"
				}],
				[{
					"caption": "platforms_investor_app",
					"route": "platforms_investor_app"
				}],
				[{
					"caption": "platforms_trading_app",
					"route": "platforms_trading_app"
				}],
				[{
					"caption": "platforms_fix_contracts_trader",
					"route": "platforms_fix_contracts_trader"
				}]
			]
		}, {
			"caption": "faq",
			"route": "faq",
			"meta": {
				"hideFromMenu": true
			},
			"children": [
				[{
					"caption": "faq_category",
					"route": "faq_category",
					"children": [{
						"caption": "faq_category_item",
						"route": "faq_category_item"
					}]
				}]
			]
		}],
		"currentRouteRoot": "school"
	},
	"tabs": {
		"items": {}
	},
	"seo": {
		"pages": {
			"\u002Fru\u002Fschool\u002F": {
				"value": "\u003Cul\u003E\r\n\t\u003Cli\u003E\r\n\t\u003Cp\u003E\u003Cstrong\u003EСамостоятельное обучение Форекс\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\t\u003Cp\u003EНа сайтах брокеров и в Интернете вы можете найти много \u003Ca href=\"\u002Fru\u002Fbeginner\u002Fbooks\u002F\"\u003Eлитературы, посвященной рынку Forex\u003C\u002Fa\u003E. Это и учебные пособия, и справочники, и авторские методики торговли, и пособия по использованию торговой платформы метатрейдер. Но не стоит забывать, что самостоятельное обучение потребует от вас известной доли усидчивости и, скорее всего, отнимет довольно много времени.\u003C\u002Fp\u003E\r\n\t\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\t\u003Cp\u003E\u003Cstrong\u003EОчное обучение Forex\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\t\u003Cp\u003EМногие брокерские компании предлагают очное обучение трейдеров. Вы можете посетить как экспресс-курсы обучения Форекс для новичков и вводные семинары, которые зачастую проводятся совершенно бесплатно, так и уроки углубленного обучения, предназначенные для более опытных трейдеров, желающих совершенствовать свою работу на Forex.\u003C\u002Fp\u003E\r\n\t\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E\r\n\t\u003Cp\u003E\u003Cstrong\u003EForex обучение онлайн\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\t\u003Cp\u003EДля людей, которые не могут или не хотят тратить время на посещение очных занятий, отличным решением станет возможность пройти обучение&nbsp;Форекс онлайн.\u003C\u002Fp\u003E\r\n\t\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EНа сегодняшний день онлайн-обучение завоевывает все большую популярность благодаря своей доступности и удобству. Чтобы посетить семинар, необходимо два условия: компьютер и Интернет с хорошим качеством связи.\u003C\u002Fp\u003E\r\n",
				"summary": "\u003Ch2\u003EС чего начать обучение на Форекс?\u003C\u002Fh2\u003E\r\n\u003Cp\u003EРабота на рынке Forex, как и любая другая, требует определенных знаний и навыков: перед тем, как начать торговлю на реальных счетах, трейдеру необходимо пройти обучение торговле на рынке Форекс для начинающих, посетив специальные курсы.\u003C\u002Fp\u003E",
				"title": null,
				"metaTitle": "Обучение Форекс для начинающих - Как начать торговать на Forex",
				"metaDescription": null,
				"metaKeywords": null,
				"lastCrumb": null,
				"isCollapsible": null
			}
		}
	},
	"registration": {
		"firstName": "",
		"firstNameOriginal": "",
		"lastName": "",
		"lastNameOriginal": "",
		"email": "",
		"mobilePhone": "",
		"isClientAgreed": false,
		"assignedTo": false,
		"country": {},
		"prefillCountryId": "",
		"city": {},
		"citizenship": {},
		"countriesList": [],
		"citiesList": [],
		"captcha": null,
		"geeTestCaptcha": null,
		"confirmCode": null,
		"partnerId": null,
		"cpaPartnerId": null,
		"trackingCampaign": null,
		"isNewsletterAllowed": null,
		"partnerChangesHistory": null,
		"partnerReg": null,
		"confirmCodeForm": {},
		"confirmCodeError": null,
		"currentStep": "first_step",
		"banners": [],
		"successUrl": ""
	},
	"route": {
		"name": "school",
		"path": "\u002Fru\u002Fschool\u002F",
		"hash": "",
		"query": {},
		"params": {
			"lang": "ru"
		},
		"fullPath": "\u002Fru\u002Fschool\u002F",
		"meta": {
			"rtled": ["ar", "fa"],
			"enabledOn": ["ru", "ua", "en"],
			"redirectOnDisabledTo": "main"
		},
		"from": {
			"name": null,
			"path": "\u002F",
			"hash": "",
			"query": {},
			"params": {},
			"fullPath": "\u002F",
			"meta": {}
		}
	},
	"courses": {
		"hits": {},
		"courses": {},
		"coursesItem": {},
		"pagination": {},
		"schedule": {
			"totalCount": "57",
			"perPage": "4",
			"pages": 15,
			"page": "1",
			"pagination": {
				"page": "1",
				"pageSize": "4",
				"totalPages": 15,
				"totalCount": "57"
			},
			"timetable": {
				"2023-03-09": [{
					"studyPlanId": 84407,
					"studyPlanDayId": 136967,
					"course": {
						"id": 1321,
						"name": "Практический трейдинг",
						"urlAlias": "practical-trading",
						"isNew": false,
						"isHit": false,
						"preview": "preview.jpg",
						"thumbnail": "tumb.jpg",
						"ftpDir": "1321",
						"shortDescription": "О формирующихся рыночных движениях по основным валютным парам. Будет проведен анализ важных фундаментальных факторов, определены актуальные тренды и потенциальные точки входа и выхода из рынка. Также будут совершены сделки по торговому плану и проанализированы уже совершенные сделки.",
						"category": {
							"id": 2,
							"name": "Анализ рынков"
						},
						"country": {
							"name": "Российская Федерация",
							"id": "RU"
						},
						"tags": [],
						"courseImages": []
					},
					"teacher": {
						"name": "Азиз",
						"surname": "Абдусаломов",
						"alias": "aziz_abdusalomov"
					},
					"type": {
						"online": true,
						"offline": false
					},
					"time": {
						"start": "2023-03-09 08:00:00",
						"end": "2023-03-09 08:55:00",
						"startUtc": 1678338000,
						"endUtc": 1678341300
					},
					"lesson": {
						"indexNumber": 1,
						"totalNumber": 1
					},
					"branch": {
						"id": 274,
						"name": "Ташкент",
						"urlAlias": "tashkent"
					},
					"cost": {
						"amount": 0,
						"currency": "USD"
					},
					"deposit": {
						"amount": 0,
						"currency": "USD"
					},
					"registrationIsActive": true,
					"isRecorded": false,
					"needAuthorization": false
				}, {
					"studyPlanId": 84463,
					"studyPlanDayId": 137047,
					"course": {
						"id": 86,
						"name": "Базовый курс",
						"urlAlias": "basic_course_pt_1_moscow",
						"isNew": false,
						"isHit": false,
						"preview": "preview.jpg",
						"thumbnail": "tumb.jpg",
						"ftpDir": "86",
						"shortDescription": "Цель курса — изучить основы торговли на валютном рынке Форекс. На курсе вы получите базовые знания, которые позволят начать работать на валютном рынке самостоятельно.",
						"category": {
							"id": 1,
							"name": "Начинающему трейдеру"
						},
						"country": {
							"name": "Российская Федерация",
							"id": "RU"
						},
						"tags": [],
						"courseImages": []
					},
					"teacher": {
						"name": "Азиз",
						"surname": "Абдусаломов",
						"alias": "aziz_abdusalomov"
					},
					"type": {
						"online": true,
						"offline": false
					},
					"time": {
						"start": "2023-03-09 09:00:00",
						"end": "2023-03-09 10:00:00",
						"startUtc": 1678341600,
						"endUtc": 1678345200
					},
					"lesson": {
						"indexNumber": 1,
						"totalNumber": 5
					},
					"branch": {
						"id": 274,
						"name": "Ташкент",
						"urlAlias": "tashkent"
					},
					"cost": {
						"amount": 0,
						"currency": "USD"
					},
					"deposit": {
						"amount": 0,
						"currency": "USD"
					},
					"registrationIsActive": true,
					"isRecorded": false,
					"needAuthorization": false
				}, {
					"studyPlanId": 84430,
					"studyPlanDayId": 136990,
					"course": {
						"id": 1321,
						"name": "Практический трейдинг",
						"urlAlias": "practical-trading",
						"isNew": false,
						"isHit": false,
						"preview": "preview.jpg",
						"thumbnail": "tumb.jpg",
						"ftpDir": "1321",
						"shortDescription": "О формирующихся рыночных движениях по основным валютным парам. Будет проведен анализ важных фундаментальных факторов, определены актуальные тренды и потенциальные точки входа и выхода из рынка. Также будут совершены сделки по торговому плану и проанализированы уже совершенные сделки.",
						"category": {
							"id": 2,
							"name": "Анализ рынков"
						},
						"country": {
							"name": "Российская Федерация",
							"id": "RU"
						},
						"tags": [],
						"courseImages": []
					},
					"teacher": {
						"name": "Азиз",
						"surname": "Абдусаломов",
						"alias": "aziz_abdusalomov"
					},
					"type": {
						"online": true,
						"offline": false
					},
					"time": {
						"start": "2023-03-09 12:30:00",
						"end": "2023-03-09 13:00:00",
						"startUtc": 1678354200,
						"endUtc": 1678356000
					},
					"lesson": {
						"indexNumber": 1,
						"totalNumber": 1
					},
					"branch": {
						"id": 274,
						"name": "Ташкент",
						"urlAlias": "tashkent"
					},
					"cost": {
						"amount": 0,
						"currency": "USD"
					},
					"deposit": {
						"amount": 0,
						"currency": "USD"
					},
					"registrationIsActive": true,
					"isRecorded": false,
					"needAuthorization": false
				}, {
					"studyPlanId": 84317,
					"studyPlanDayId": 136857,
					"course": {
						"id": 1289,
						"name": "Знакомство с торговой стратегией Hunter для новичков и более опытных трейдеров",
						"urlAlias": "hunter-trading-strategy",
						"isNew": false,
						"isHit": false,
						"preview": "preview.jpg",
						"thumbnail": "tumb.jpg",
						"ftpDir": "1289",
						"shortDescription": "Особенности торговли по стратегии Hunter, как наиболее эффективно находить точки входа с минимальным Stop Loss, а также способы разгона депозита и определения ключевых уровней.",
						"category": {
							"id": 1,
							"name": "Начинающему трейдеру"
						},
						"country": {
							"name": "Российская Федерация",
							"id": "RU"
						},
						"tags": [],
						"courseImages": []
					},
					"teacher": {
						"name": "Азиз",
						"surname": "Абдусаломов",
						"alias": "aziz_abdusalomov"
					},
					"type": {
						"online": true,
						"offline": false
					},
					"time": {
						"start": "2023-03-09 14:00:00",
						"end": "2023-03-09 15:30:00",
						"startUtc": 1678359600,
						"endUtc": 1678365000
					},
					"lesson": {
						"indexNumber": 1,
						"totalNumber": 1
					},
					"branch": {
						"id": 274,
						"name": "Ташкент",
						"urlAlias": "tashkent"
					},
					"cost": {
						"amount": 0,
						"currency": "USD"
					},
					"deposit": {
						"amount": 0,
						"currency": "USD"
					},
					"registrationIsActive": true,
					"isRecorded": false,
					"needAuthorization": false
				}]
			},
			"timetableFlat": [{
				"studyPlanId": 84407,
				"studyPlanDayId": 136967,
				"course": {
					"id": 1321,
					"name": "Практический трейдинг",
					"urlAlias": "practical-trading",
					"isNew": false,
					"isHit": false,
					"preview": "preview.jpg",
					"thumbnail": "tumb.jpg",
					"ftpDir": "1321",
					"shortDescription": "О формирующихся рыночных движениях по основным валютным парам. Будет проведен анализ важных фундаментальных факторов, определены актуальные тренды и потенциальные точки входа и выхода из рынка. Также будут совершены сделки по торговому плану и проанализированы уже совершенные сделки.",
					"category": {
						"id": 2,
						"name": "Анализ рынков"
					},
					"country": {
						"name": "Российская Федерация",
						"id": "RU"
					},
					"tags": [],
					"courseImages": []
				},
				"teacher": {
					"name": "Азиз",
					"surname": "Абдусаломов",
					"alias": "aziz_abdusalomov"
				},
				"type": {
					"online": true,
					"offline": false
				},
				"time": {
					"start": "2023-03-09 08:00:00",
					"end": "2023-03-09 08:55:00",
					"startUtc": 1678338000,
					"endUtc": 1678341300
				},
				"lesson": {
					"indexNumber": 1,
					"totalNumber": 1
				},
				"branch": {
					"id": 274,
					"name": "Ташкент",
					"urlAlias": "tashkent"
				},
				"cost": {
					"amount": 0,
					"currency": "USD"
				},
				"deposit": {
					"amount": 0,
					"currency": "USD"
				},
				"registrationIsActive": true,
				"isRecorded": false,
				"needAuthorization": false
			}, {
				"studyPlanId": 84463,
				"studyPlanDayId": 137047,
				"course": {
					"id": 86,
					"name": "Базовый курс",
					"urlAlias": "basic_course_pt_1_moscow",
					"isNew": false,
					"isHit": false,
					"preview": "preview.jpg",
					"thumbnail": "tumb.jpg",
					"ftpDir": "86",
					"shortDescription": "Цель курса — изучить основы торговли на валютном рынке Форекс. На курсе вы получите базовые знания, которые позволят начать работать на валютном рынке самостоятельно.",
					"category": {
						"id": 1,
						"name": "Начинающему трейдеру"
					},
					"country": {
						"name": "Российская Федерация",
						"id": "RU"
					},
					"tags": [],
					"courseImages": []
				},
				"teacher": {
					"name": "Азиз",
					"surname": "Абдусаломов",
					"alias": "aziz_abdusalomov"
				},
				"type": {
					"online": true,
					"offline": false
				},
				"time": {
					"start": "2023-03-09 09:00:00",
					"end": "2023-03-09 10:00:00",
					"startUtc": 1678341600,
					"endUtc": 1678345200
				},
				"lesson": {
					"indexNumber": 1,
					"totalNumber": 5
				},
				"branch": {
					"id": 274,
					"name": "Ташкент",
					"urlAlias": "tashkent"
				},
				"cost": {
					"amount": 0,
					"currency": "USD"
				},
				"deposit": {
					"amount": 0,
					"currency": "USD"
				},
				"registrationIsActive": true,
				"isRecorded": false,
				"needAuthorization": false
			}, {
				"studyPlanId": 84430,
				"studyPlanDayId": 136990,
				"course": {
					"id": 1321,
					"name": "Практический трейдинг",
					"urlAlias": "practical-trading",
					"isNew": false,
					"isHit": false,
					"preview": "preview.jpg",
					"thumbnail": "tumb.jpg",
					"ftpDir": "1321",
					"shortDescription": "О формирующихся рыночных движениях по основным валютным парам. Будет проведен анализ важных фундаментальных факторов, определены актуальные тренды и потенциальные точки входа и выхода из рынка. Также будут совершены сделки по торговому плану и проанализированы уже совершенные сделки.",
					"category": {
						"id": 2,
						"name": "Анализ рынков"
					},
					"country": {
						"name": "Российская Федерация",
						"id": "RU"
					},
					"tags": [],
					"courseImages": []
				},
				"teacher": {
					"name": "Азиз",
					"surname": "Абдусаломов",
					"alias": "aziz_abdusalomov"
				},
				"type": {
					"online": true,
					"offline": false
				},
				"time": {
					"start": "2023-03-09 12:30:00",
					"end": "2023-03-09 13:00:00",
					"startUtc": 1678354200,
					"endUtc": 1678356000
				},
				"lesson": {
					"indexNumber": 1,
					"totalNumber": 1
				},
				"branch": {
					"id": 274,
					"name": "Ташкент",
					"urlAlias": "tashkent"
				},
				"cost": {
					"amount": 0,
					"currency": "USD"
				},
				"deposit": {
					"amount": 0,
					"currency": "USD"
				},
				"registrationIsActive": true,
				"isRecorded": false,
				"needAuthorization": false
			}, {
				"studyPlanId": 84317,
				"studyPlanDayId": 136857,
				"course": {
					"id": 1289,
					"name": "Знакомство с торговой стратегией Hunter для новичков и более опытных трейдеров",
					"urlAlias": "hunter-trading-strategy",
					"isNew": false,
					"isHit": false,
					"preview": "preview.jpg",
					"thumbnail": "tumb.jpg",
					"ftpDir": "1289",
					"shortDescription": "Особенности торговли по стратегии Hunter, как наиболее эффективно находить точки входа с минимальным Stop Loss, а также способы разгона депозита и определения ключевых уровней.",
					"category": {
						"id": 1,
						"name": "Начинающему трейдеру"
					},
					"country": {
						"name": "Российская Федерация",
						"id": "RU"
					},
					"tags": [],
					"courseImages": []
				},
				"teacher": {
					"name": "Азиз",
					"surname": "Абдусаломов",
					"alias": "aziz_abdusalomov"
				},
				"type": {
					"online": true,
					"offline": false
				},
				"time": {
					"start": "2023-03-09 14:00:00",
					"end": "2023-03-09 15:30:00",
					"startUtc": 1678359600,
					"endUtc": 1678365000
				},
				"lesson": {
					"indexNumber": 1,
					"totalNumber": 1
				},
				"branch": {
					"id": 274,
					"name": "Ташкент",
					"urlAlias": "tashkent"
				},
				"cost": {
					"amount": 0,
					"currency": "USD"
				},
				"deposit": {
					"amount": 0,
					"currency": "USD"
				},
				"registrationIsActive": true,
				"isRecorded": false,
				"needAuthorization": false
			}],
			"branches": {
				"274": {
					"id": 274,
					"name": "Ташкент",
					"urlAlias": "tashkent"
				}
			},
			"categories": {
				"1": {
					"name": "Начинающему трейдеру",
					"id": 1
				},
				"2": {
					"name": "Анализ рынков",
					"id": 2
				}
			},
			"countries": {
				"RU": {
					"name": "Российская Федерация",
					"id": "RU"
				}
			}
		},
		"schedulePagination": {
			"page": "1",
			"pageSize": "4",
			"totalPages": 15,
			"totalCount": "57"
		},
		"categories": {},
		"teachers": {}
	},
	"articles": {
		"article": {},
		"articles": {
			"undefined": [{
				"title": "Интервью с ПАММ-управляющим Sunnich: «Я всегда стремился к автоматизации торговли»",
				"body": {
					"value": "\u003Cp\u003EПредставляем вашему вниманию интервью с ПАММ-управляющим Sunnich. Уже на протяжении нескольких лет он является одним из главных действующих лиц популярного сервиса Трейдер, стабильно занимая место в ТОП-10 рейтинга со своим основным счетом \u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F388087\u002F\"\u003ESunnich Fr\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EЧто побудило вас заинтересоваться трейдингом?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНачал инвестировать на финансовых рынках в далеком 2000 году. Инвестировал в ПИФы компании «Тройка-диалог». Потом была торговля на МосБирже акциями. Времени на это не хватало. Основная работа не позволяла выделять необходимое время. Но тогда мне стало ясно, чем я буду заниматься на «пенсии». В дальнейшем, когда возник вопрос размещения свободных средств, зарабатываемых в бизнесе, куда их вкладывать вопрос не стоял. Стоял вопрос как.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКак вы думаете, трейдинг — это занятие для всех?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТрейдинг \u003Cstrong\u003E— \u003C\u002Fstrong\u003Eэто множество инструментов и стратегий. Я убежден, что каждый может достичь успеха в этом деле. Сложнее справиться с эмоциями при достижении целей. Многие останавливаются за шаг до успеха.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EЕсть ли категория людей, которым вы бы не советовали торговать на валютном рынке?&nbsp; \u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТаких категорий нет. Если кто-то не хочет торговать самостоятельно, то может всегда инвестировать свободные денежные средства, например, через ПАММ-сервис Трейдер.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКакой самый дельный совет, связанный с деньгами, вы слышали?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«Деньги к деньгам». Зачастую люди недооценивают необходимость сбережений.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«Деньги должны работать». Искренне не понимаю людей, хранящих все сбережения «под подушкой».\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКак много времени вы уделяете трейдингу? Вы относитесь к этому как к работе или, скорее, как к хобби?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЭто моя работа. Которая занимает плюс-минус стандартные 8 часов 5 дней в неделю. К счастью, это также хобби. Как говорил Конфуций, найдите работу, в которую влюбитесь, и вам больше не придется трудиться ни одного дня в жизни.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EПродолжите фразу: «Я торгую на \u003C\u002Fstrong\u003E\u003Cstrong\u003EForex, потому что…»\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Col\u003E\r\n\t\u003Cli\u003EМне нравится процесс.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EМне нравится результат.\u003C\u002Fli\u003E\r\n\u003C\u002Fol\u003E\r\n\r\n\u003Cp\u003EДумаю, что именно к сочетанию этих двух факторов должен стремиться любой человек, если он хочет получать удовольствие от жизни.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EМожете ли порекомендовать книги или статьи, которые вас мотивируют?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИз классики, если кто не прочитал, обязательно рекомендую следующие:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003E«Богатый папа, бедный папа» Роберта Кийосаки.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E«Думай и богатей» Наполеона Хилла.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EТакже часто читаю статьи по психологии трейдинга и интервью успешных терйдеров и успешных людей.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EПредставьте, что вам нужно дать мудрый совет трейдерам будущего. Что бы вы им сказали?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДиверсифицируйте риски, инструменты, стратегии.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСоблюдайте мани-менеджмент.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОграничивайте потери \u003Cstrong\u003E—\u003C\u002Fstrong\u003E ставьте (отложенный ордер) Stop Loss. Иначе твой Stop Loss \u003Cstrong\u003E—\u003C\u002Fstrong\u003E это весь депозит.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EЧто на ваш взгляд нужно знать о трейдинге, чтобы торговать эффективно?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДля меня это три кита:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EМани-менеджмент \u003Cstrong\u003E—\u003C\u002Fstrong\u003E это основа трейдинга.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EПсихология \u003Cstrong\u003E—\u003C\u002Fstrong\u003E не каждому удается с ней справиться.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EСтратегия \u003Cstrong\u003E—\u003C\u002Fstrong\u003E нужно найти ту или те стратегии, которые подходят именно тебе.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EЧто бы заработать на рынке деньги нужно сначала научиться их не терять. Стратегий хороших и не очень бесконечно много. При этом любая стратегия может привести к потерям.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКакой анализ важнее для управления вашим ПАММ-ом: технический или фундаментальный?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДля управления большинства счетами использую только технический анализ. При этом за фундаментом слежу регулярно.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EМногие говорят, что \u003C\u002Fstrong\u003E\u003Cstrong\u003EForex\u003C\u002Fstrong\u003E\u003Cstrong\u003E похож на лотерею. Как вам кажется, насколько такое мнение соответствует действительности?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЧасто слышу этот вопрос. Еще чаще с казино сравнивают.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЧто есть выигрыш в лотерее? Это вероятность выигрыша на один билет или ставку, умноженная на средний выигрыш. Обычно по государственным законам призовой фонд должен составлять 50% от сборов. При этом вероятность выигрыша каждого билета стремится к нулю. Таким образом, чтобы «отбить» вложения, необходимо купить бесконечно много лотерей.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЧто есть «выигрыш» в трейдинге? Это вероятность прибыли на одну сделку, умноженная на среднюю прибыль, минус вероятность убытка, умноженная на средний убыток. Вероятность «выигрышей» в трейдинге, особенно в автоторговле может достигать 90%. Плюс можно увеличить эту вероятность за счет диверсификации. Для среднесрочных и ручных стратегий обычно этот показатель ниже, при этом размер потенциальной прибыли в несколько раз превышает убыток.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТаким образом, на результат трейдинга мы можем влиять, а на результат лотереи не можем. Хотя есть у меня знакомые, которые используют трейдинг как игру. Вводят небольшие деньги, торгуют наугад. Для них это лотерея. Итого \u003Cstrong\u003E—\u003C\u002Fstrong\u003E если подходить к терйдингу, как к лотерее или казино, то это будет лотерея.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПри этом в целом с этим утверждением я не согласен. Купили бы вы лотерею, в которой вероятность потери 100 рублей составляет 20%, а вероятность выигрыша 50 рублей 80%? Я бы купил не задумываясь.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EИспользуете ли вы автоматизацию торговли или роботов?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E99.9% объема торгов \u003Cstrong\u003E— \u003C\u002Fstrong\u003Eэто автоматическая торговля. У автоматической торговли есть ряд преимуществ:\u003C\u002Fp\u003E\r\n\r\n\u003Col\u003E\r\n\t\u003Cli\u003EОтсутствие эмоций.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EМасштабируемость.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EВозможность проверки стратегии на истории.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EВозможность торговать на младших таймфреймах.\u003C\u002Fli\u003E\r\n\u003C\u002Fol\u003E\r\n\r\n\u003Cp\u003EК автоторговле я изначально стремился прийти. Хотя путь был непрост и недешев.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EМеняли ли вы подход к рискам (загрузке) своего ПАММ-счета?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПодход к рискам со временем меняется. Если рассматривать счет Sunnich Fr2, то подход к рискам там сильно менялся. Пока рынок позволял и инвесторов было относительно мало, это был суперрискованный счет. В дальнейшем риски понижались и повышались несколько раз, в зависимости от текущей ситуации. При росте депозита в целом риски немного снижаются.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНа разных счетах использую разный мани-менеджмент. Есть счета, на которых риски немного увеличиваются при просадках (позволяет быстрее выйти из них, если стратегия правильная). Есть счета, на которых риски снижаются на просадках (позволяет не «свалиться» в яму в случае изменения рыночной ситуации или ошибках в стратегиях).\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИ еще про мани-менеджмент. Все мои средства разделены между счетами:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eразгонные \u003Cstrong\u003E—\u003C\u002Fstrong\u003E быстро заработать, если повезет,\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eумеренный риск \u003Cstrong\u003E—\u003C\u002Fstrong\u003E обеспечивают основной доход;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eсчета-копилки \u003Cstrong\u003E—\u003C\u002Fstrong\u003E там, где я «храню» средства «резервного фонда» и накопления.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EМожете рассказать (если есть) историю «счастливого спасения»? Например, когда тренд, казалось бы, пошел против вас, но в итоге все закончилось хорошо. Или подобную историю из жизни?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПрямо спасения не помню. Ситуации, когда немного не хватает до Стоп-лоса или до Тейк-профита, случаются регулярно.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЯ пришел к такому выводу. Если вы чем-то рискуете на рынке, то вы это рано либо поздно потеряете. Если вы торгуете мартином (Мартингейл, высоко рисковая торговая система) без стопов, то вы потеряете депозит. «Счастливое» начало в использовании таких стратегий приводит к еще большим потерям. Я такое проходил. Поэтому, если даже и были эти «счастливые спасения», то они могли превратиться в «несчастливые», что и стерло их из памяти. И наоборот, какой-то из таких случаев стал последней точкой в торговле без стопов и «счастливым спасением». Результаты резко стали расти.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСегодня любой «несчастливый» случай не убьет мои капиталы. Мани-менеджмент \u003Cstrong\u003E—\u003C\u002Fstrong\u003E всему голова! Пример из жизни на ум тоже несильно приходит. Но могу сказать, что основное счастливое спасение \u003Cstrong\u003E—\u003C\u002Fstrong\u003E это мое окружение. Моя жена, мои друзья, мои дети, мои партнеры. Например, один из друзей помог, фактически заставил, выкупить филиал, в котором я руководил у своего работодателя. Я могу считать это счастливым спасением от наемного труда.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«Счастливым спасением» можно считать то, что я относительно случайно попал в физико-математическую школу. Сам я родом из провинциального городка, но когда был на региональной олимпиаде, новые друзья позвали за компанию на собеседование. Это «счастливое спасение».\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТакже построенная в свое время карьера. После университета относительно случайно устроился в небольшой филиал большой компании. Когда увольнялся, был директором этого филиала со штатом около 200 человек. И дальнейшие работодатели очень многому меня научили. В общем, вся жизнь \u003Cstrong\u003E— \u003C\u002Fstrong\u003Eчереда «счастливых спасений». Вообще, возможности к нам приходят регулярно. Только кто-то готов и хочет их брать, а кто-то их даже не видит. Уверен, что я многое пропустил.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКак бы вы описали ваш идеальный выходной?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПоездка в лес или в горы с семьей. Очень люблю дальние поездки. Последние выходные провел с друзьями на рыбалке почти за 500 км от дома. При этом сам не рыбак.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EИспользуете ли вы альпы для снижения спреда на вашем ПАММ-счете?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДа.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКогда вы решили заняться торговлей на валютном рынке? Помните, с чем был связан этот интерес?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПередо мной стоял вопрос краткосрочного и долгосрочного размещения свободных средств, заработанных в бизнесе. Планировал вернуться на рынок акций, но подвернулись одни «товарищи», которые предложили часть денег разместить на Forex (это был 2012 год).\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКонечно же, они их благополучно потеряли, т. к. советник использовали типа Мартингейла без стоп-лосов. Потом у меня была травма, которая вынудила меня много времени провести дома. Вот тогда я усилено и начал знакомиться с рынком Forex.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EК определенному моменту я начал зарабатывать достаточно на рынке, плюс, кризисные явления в экономике привели меня к мысли прекратить деятельность в реальном секторе и уйти в финансовый сектор. Удалось очень выгодно продать текущий бизнес и спокойно заняться тем, что нравится больше.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПри этом я всегда стремился к автоматизации торговли. И всегда планировал привлечение инвестиций. Спасибо Трейдер \u003Cstrong\u003E—\u003C\u002Fstrong\u003E дает возможность заниматься в первую очередь торговлей.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EЕсли бы вы завтра начинали свой бизнес, что бы это было?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВот именно этим бы и занялся. Для диверсификации это рентный бизнес.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКакую часть вашего времени приходится уделять торговле на ПАММ-счетах?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЕсли рассматривать отдельно каждый ПАММ счет, то времени они занимают немного. Плюс я работаю не один, с партнерами. В целом работа состоит из нескольких блоков.\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EНастройка и поддержание счетов.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EКонтроль работоспособности.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EПоиск новых продуктов (покупка и разработка).\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EТестирование и оптимизация.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EСбор и анализ статистических данных и принятие решений об изменениях.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EНа реальных счетах для сбора данных используется несколько сотен настроек различных советников. Анализ этих данных и занимает основное время.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЭтапы управления ПАММ-счетами следующие:\u003C\u002Fp\u003E\r\n\r\n\u003Col\u003E\r\n\t\u003Cli\u003Eвыбор стратегии (стратегий);\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eнастройка советников и мани-менеджмента;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eмониторинг отклонений;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eпериодический анализ;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eизменения на основании результатов пп. 3-4.\u003C\u002Fli\u003E\r\n\u003C\u002Fol\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EЕсть ли у вас постоянная работа, помимо торговли на ПАММ-счетах?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПомимо трейдинга и различных проектов в этой области другой работы нет.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EРасскажите подробнее о линейке своих ПАММ-счетов.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ торговле я использую достаточно много роботов с различными стратегиями. При этом можно выделить основные:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003E«Ночники». Ночные и вечерние стратегии.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E«Импульсники».\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E«КонтрТренд».\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EПрочие стратегии.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EОснову торговли сегодня составляют «Ночники». К сожалению, в последнее время идет большая раскорреляция между тестами и фактической торговлей у данных стратегий на ПАММ-счетах, в настоящее время снижены риски по большинству счетов. Если ситуацию не удастся исправить, то частично данные стратегии будут ликвидированы.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«Импульсники» также переживают не лучшие времена. Обновили исторические просадки. Я не считаю в данном случае, что стратегия «умерла», но риски по ней в целом также буду сокращать и добавлять другие стратегии \u003Cstrong\u003E—\u003C\u002Fstrong\u003E составлен портфель из дневных стратегий.\u003C\u002Fp\u003E\r\n\u003Cimg alt=\"Impulse-strategy\" data-align=\"center\" data-entity-type=\"file\" data-entity-uuid=\"cfc57da7-acf7-4e90-b6a3-ef64a74697f3\" height=\"358\" src=\"\u002Fstorage\u002Finline-images\u002FSunnich1.jpg\" width=\"1071\" \u002F\u003E\r\n\u003Cp\u003E«КонтрТренд». Стратегия относительно новая. Впервые была использована на счете \u003Ca href=\"https:\u002F\u002FTrader.com\u002Fru\u002Finvest\u002Fpamm\u002F472639\u002F\"\u003ESunnich GreenWave\u003C\u002Fa\u003E. Стратегия содержит сетку. При этом Stop Loss используется обязательно. Состоит из нескольких независимых сеток. Стратегия использует преимущества сеточных стратегий, при этом не допускает полной потери депозита, т. к. использует Stop Loss. Тест самой неудачной из них выглядит так (фиксированный лот):&nbsp;&nbsp;\u003C\u002Fp\u003E\r\n\u003Cimg alt=\"contr-trend-strategy\" data-align=\"center\" data-entity-type=\"file\" data-entity-uuid=\"a5c57b5c-ad9d-4041-89de-5b110089d07b\" height=\"263\" src=\"\u002Fstorage\u002Finline-images\u002FSunnich2.jpg\" width=\"1043\" \u002F\u003E\r\n\u003Cp\u003EВ целом набор стратегий на текущий момент (09.2020) можно представить в таком виде.\u003C\u002Fp\u003E\r\n\r\n\u003Ctable\u003E\r\n\t\u003Ctbody\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Cstrong\u003E&nbsp;\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Cstrong\u003EНочники\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Cstrong\u003EИмпульс\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Cstrong\u003EКонтрТренд\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Cstrong\u003EПрочие\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F388087\u002F\"\u003ESunnich Fr2\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 1\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F470271\u002F\"\u003ESunnich GoodNight\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 4\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F467754\u002F\"\u003ESunnich GoodNight RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 4\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F415507\u002F\"\u003ESunnich GR2-2\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F389368\u002F\"\u003ESunnich GR4\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 3\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F443259\u002F\"\u003ESunnich GR4 RUR\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 3\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F472639\u002F\"\u003ESunnich GreenWave\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F455803\u002F\"\u003ESunnich ImpulseDay\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F465861\u002F\"\u003ESunnich ImpulseDayRu\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F472998\u002F\"\u003ESunnich LevelUp.\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F350356\u002F\"\u003ESunnich M eur gbp RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 1\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F345728\u002F\"\u003ESunnich M RUR\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F369651\u002F\"\u003ESunnich M2 v2\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F452955\u002F\"\u003ESunnich NightFury\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 5\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F423966\u002F\"\u003ESunnich NightFury RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 5\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F445889\u002F\"\u003ESunnich NLight USD\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 2\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F458280\u002F\"\u003ESunnich NLight-r RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 2\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F400962\u002F\"\u003ESunnich NR v.2-1\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 2\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F464663\u002F\"\u003ESunnich NR v.7\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F418531\u002F\"\u003ESunnich NR v.8-1\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 2\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F473299\u002F\"\u003ESunnich Prime2.\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 1\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"https:\u002F\u002FTrader.com\u002Fru\u002Finvest\u002Fpamm\u002F470937\u002F\"\u003ESunnich RedLine.\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n\r\n\u003Cp\u003EВ описании к ПАММ-счету клиент может посмотреть общий уровень риска по моим счетам.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОтдельно остановлюсь на некоторых счетах:\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F388087\u002F\"\u003ESunnich Fr2\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИспользуется две стратегии (до августа 2020 г. использовалась только одна). Уровень риска \u003Cstrong\u003E—\u003C\u002Fstrong\u003E NormalRisk, ближе к LowRisk. Подходит для долгосрочных инвестиций. Ожидаемая доходность: 70-150% в год.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«Ночники». Набор 1. Самый широкий набор из независимых сетов, который отличается высокой устойчивостью и запасом «прочности». В настоящее время риск на сделку составляет 0.5%, всего 30 сетов. Риск может быть изменен в зависимости от исполнения ордеров и рыночной ситуации, как в меньшую, так и в большую сторону.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«КонтрТренд». Стратегия отличается повышенной стабильностью. Риск на сетку составляет примерно 5%. Количество стопов за год по тестам 1-4. Ближайший аналог с более высоким риском в рублевом варианте: \u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F350356\u002F\"\u003ESunnich M eur gbp RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F472639\u002F\"\u003ESunnich GreenWave\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«КонтрТренд». Агрессивный вариант. Риск высокий. По мере роста депозита риск будет снижаться. Использование данного типа стратегий в целом будет расширяться на моих счетах.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F473299\u002F\"\u003ESunnich Prime2.\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСамый широкий набор стратегий. Также на данном счете осуществляется ручная торговля. Среднесрочные и долгосрочные сделки. Счет можно назвать экспериментальным, т. к. он может содержать все недостатки ручных стратегий.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВсе текущие ПАММы считаю достойными для инвестиций. На текущий момент список моих фаворитов выглядит следующим образом:\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F388087\u002F\"\u003ESunnich Fr2\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F472639\u002F\"\u003ESunnich GreenWave\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F464663\u002F\"\u003ESunnich NR v.7\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F350356\u002F\"\u003ESunnich M eur gbp RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F452955\u002F\"\u003ESunnich NightFury\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F470271\u002F\"\u003ESunnich GoodNight\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ относительно недалеком будущем в планах открыть счет-копилку в виде ПАММ-счета. Сейчас идет подбор параметров. Счет с низкими просадками, относительно гладкой кривой и относительно невысокой доходностью 30-50% в год.\u003C\u002Fp\u003E\r\n",
					"summary": "Представляем вашему вниманию интервью с ПАММ-управляющим Sunnich. Уже на протяжении нескольких лет он является одним из главных действующих лиц популярного сервиса Трейдер, стабильно занимая место в ТОП-10 рейтинга со своим основным счетом Sunnich Fr. "
				},
				"alias": "sunnich-interview",
				"author": {
					"name": "Трейдер"
				},
				"category": {
					"alias": "investments"
				},
				"video": null,
				"publicationDate": {
					"formatted": "2020-09-18T08:09:23",
					"timestamp": 1600416563
				}
			}, {
				"title": "Анализ японских свечей. Свечной анализ графиков",
				"body": {
					"value": "\u003Cp\u003EНаиболее удобным вариантом графика любого актива на Forex являются японские свечи. Информативность и наглядность представленных ими данных о состоянии рынка уже давно заслужили популярность у всех трейдеров. Именно анализ японских свечей дает возможность составления прогнозов дальнейшего ценового движения.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЭтот инструмент технического анализа помогает трейдеру увидеть и понять настроение и психологию рынка.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EЧто собой представляют японские свечи\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EПравильно читать графики активов, корректно определять уровни поддержки и сопротивления любому трейдеру помогает технический анализ свечей. Они сочетают в себе вид ценовой линии c разновидностью интервального графика. На графике прекрасно отображены колебания котировок всех активов за определенный временной промежуток.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДля более полного понимания инструмента следует подробнее рассмотреть его составляющие:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eтело, представляющее собой прямоугольник;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eтень — линию, отходящую от тела.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EЭти два компонента внешне напоминают свечу. Каждый из них отображает изменение цены за определенный временной интервал. Свечной анализ графиков отлично помогает в составлении рыночных прогнозов. Причем в данном случае прекрасно обходятся и без компьютерных индикаторов. Можно также предвидеть и реакцию участников торгов на определенные события.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 1\" data-entity-type=\"file\" data-entity-uuid=\"c638d1f7-9527-4b63-98a8-b7045d355c35\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%201_11.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСущественным преимуществом такого графика является то, что свеча представляет собой эквивалент нескольких показателей: время открытия и закрытия, информацию о преобладании на рынке продавцов или покупателей. Каждый свечной элемент соответствует таймфрейму, на котором он отображен. На временном интервале М1 одна свеча отображает ценовое изменение за одну минуту, на 5М — за 5 минут, на 15М — за 15 минут и т.д.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПомимо этого свечные элементы отображают на экране торгового терминала различные графические фигуры, использующиеся трейдерами для открытия (закрытия) ордеров на покупку или продажу. Поэтому график из японских свечей значительно упрощает комплексное исследование любого рынка. Вовремя определяя тот или иной паттерн, трейдер имеет возможность подготовить торговый план и, действуя согласно его пунктам, входить в сделки, получая прибыль.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EИнформация от японских свечей на графике\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EКак читать японские свечи на графике? Данный вопрос неизменно задают начинающие трейдеры.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИнформация, представляемая свечами на всех временных промежутках, аналогична:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eкотировка открытия за период времени (Open);\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eкотировка закрытия за этот же период времени (Close);\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eценовой минимум за период (Low);\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eмаксимум цены за период (High).\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 2\" data-entity-type=\"file\" data-entity-uuid=\"0ad06671-acc6-48f9-bd19-3e3ce92088c3\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%202_11.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИз рисунка видно, что котировки открытия и закрытия являются обрамлением свечного элемента. Его принято называть телом. Тонкие нити, идущие от тела вверх и вниз, являются тенью, которую иногда называют фитилем.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПринято различать бычий (возрастающий) и медвежий (понижающийся) варианты свечи. В первом случае ее формирование происходит снизу вверх. В качестве нижней границы здесь выступает цена открытия, а цена закрытия является границей верхней. Обычно на графике терминала МТ4 такие свечки бесцветны или окрашены в зеленый цвет. Медвежья свеча — полная противоположность бычьей. Формируется сверху вниз, окрашена красным или черным цветом. Цена открытия — ее верхняя граница, цена закрытия — нижняя.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ отдельных случаях тело японской свечи отсутствует. Происходит это, когда цена открытия равна цене закрытия. Иногда в свечном элементе наблюдается отсутствие фитилей. Здесь все параметры: котировки открытия, котировки закрытия, минимум и максимум равны между собой.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EЧтение японских свечей\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЯпонские свечи, как их правильно читать? Исследование таких графиков сводится к выявлению графических паттернов в виде комбинаций свечных элементов. Подобных моделей, представленных несколькими элементами, довольно много и каждая из них носит определенное название: «молот», «повешенный», «падающая звезда», «доджи», «надгробие», «харами» и другие.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 3\" data-entity-type=\"file\" data-entity-uuid=\"6eb7456d-207b-4ab0-bce5-234db26ad3bd\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%203_8.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЛюбой их этих паттернов сигнализирует о моментах входа в рынок. Существуют модели продолжения тренда и модели разворота тенденции. Последние представляют собой подавляющее большинство.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПри анализе японских свечей в трейдинге следует учитывать важные особенности:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eвсе исследования лучше проводить на дневном таймфрейме. На меньших временных интервалах надежность сигналов, поступающих от свечных моделей, снижается. Чем меньше таймфрейм — тем надежность ниже;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eпрогнозирование долгосрочных трендов проводится на месячных и недельных временных интервалах;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eпосле появляющихся моделей разворота тенденция изменяется не всегда. Иногда происходит коррекция тренда или флэт. Поэтому модель разворота скорее прогнозирует изменение текущей ситуации на рынке.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EОбъясняется это балансом продавцов и покупателей. Чем больше открытых в одном направлении ордеров, тем выше вероятность разворота. Маркетмейкеры внимательно следят за рынком и при определенном количестве участников торгов «обрушивают» цену, заставляя ее развернуться, произвести коррекцию или уйти во флэт.\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EПаттерны, имеющие ценовые разрывы, являются более надежными.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EЛюбая комбинация свечей должна подтверждаться. Например, если на рынке сформировалась бычья модель, то последующая свеча должна показать рыночное устремление.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Ch2\u003EОтображение психологии рынка в свечах\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EКак анализировать японские свечи? Ответ на этот вопрос помогает понять психологию рынка, иными словами&nbsp;— намерения большинства продавцов и покупателей. Даже новички, приложив определенные усилия, смогут научиться анализировать свечные элементы для прогнозирования дальнейшего трендового движения.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОдним из наиболее важных параметров свечи является размер ее тела. Его длина свидетельствует о давлении на рынок быков или медведей. Если тело большого размера (относительно соседних свечек) имеет белый (зеленый) цвет, значит, преобладают бычьи настроения, и покупатели одержали верх над продавцами. Уверенную победу продавцов отображает большое темное (красное) тело. Незначительный его размер говорит о приблизительном равенстве сил продавцов и покупателей. Значит, вполне вероятен откат (коррекция) главенствующей тенденции, либо дальнейшее флэтовое движение. В таких случаях тренд на время «застывает» перед следующим рывком вверх или вниз.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 4\" data-entity-type=\"file\" data-entity-uuid=\"e77213cc-f510-4759-bafe-49d8bbed44bd\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%204_8.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКогда бычья свеча, сформировавшаяся после длительного нисходящего тренда, появляется на экране торгового терминала, есть все основания предполагать, что зарождается восходящая тенденция. А закрытие бычьей свечи выше линии сопротивления свидетельствует о том, что рынок укрепился на новом ценовом рубеже. Но такое утверждение будет иметь место только по завершении формирования свечного элемента. Для более детального просмотра этого процесса следует переключиться на меньший таймфрейм.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EХвост (фитиль, часто именуемый пин-баром), отходящий от тела отражает настроения участников торгов, а точнее — его перемену в процессе формирования самой свечки. Пин-бар довольно часто является предвестником смены господствующей тенденции или ее продолжением после соответствующего ценового отката. Длинные фитили, как правило, образуются вблизи сильного протестированного, но не пробитого уровня.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 5\" data-entity-type=\"file\" data-entity-uuid=\"83225a48-2636-47e6-bb8d-a484065d31b7\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%205_6.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКогда борьба продавцов и покупателей достигает своего максимума, на экране появляются «доджи» с длинными пин-барами. Это свидетельствует о нерешительности участников рынка — на фоне активной торговли нет результата.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EНастроение свечи\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EТакое понятие было предложено Лансом Бегсом, известным трейдером на Forex и специалистом алгоритма «Прайс экшн».\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНастроение зависит от положения цены закрытия относительно предыдущего свечного элемента. Принято различать несколько видов настроения:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eбычье. Цена закрытия выше последнего максимума;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eмедвежье. Закрытие периода ниже предыдущего минимума;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eнейтральное. Последнее свечное закрытие в диапазоне предыдущей свечи.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EВ свою очередь каждый из видов может быть высоким, низким и средним. Это интенсивность настроения. Она определяется в зависимости от того места диапазона свечи, где она была закрыта.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 6\" data-entity-type=\"file\" data-entity-uuid=\"679885de-ce96-4162-b1bb-0a02cd733d0c\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%206_4.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EИсследование свечного графика\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЯпонские свечи, технический анализ которых — вне всякой конкуренции другим графическим исследованиям рынка, могут дать трейдеру множество полезной информации о грядущих рыночных переменах.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПервостепенное значение имеют свечные тела, второстепенное — их тени. Фитили считаются рыночным шумом, хотя в любом трейдинге следует учитывать и его.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПодобные исследования графиков учитывают определенные фундаментальные принципы:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eдлинные тела, имеющие короткие фитили, являются фундаментом строительства новой тенденции. Это ярко выраженное превосходство покупателей над продавцами или, наоборот, продавцов над покупателями. Как правило, самые длинные свечные тела располагаются в начале тренда и в его завершении. Если ордер был открыт по тренду, то появление длиннотелых элементов — сигнал на закрытие сделки;\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 7\" data-entity-type=\"file\" data-entity-uuid=\"3bb61d62-36ba-47e1-be94-9d76429a4b49\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%207_4.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eсвечи с короткими телами и длинными фитилями часто формируются при развороте тенденции. Лучшим сигналом этого является элемент, у которого одна тень чрезвычайно превышает в длину другую тень и тело. Так отображается борьба быков и медведей, в процессе которой сначала побеждали одни, а в итоге первенство досталось другим;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eтела и фитили малых размеров появляются при появлении боковых трендов. В этот момент можно открывать ордера с небольшими стоп-лоссами (Stop Loss).\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Ch2\u003EВыводы\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EПрименение японских свечей характеризуется как положительными аспектами, так и определенными сложностями. Достоверность этих элементов, в отличие от компьютерных индикаторов, дает возможность исследовать саму цену, а не математические расчеты. Свечи универсальны. Они применимы для графиков активов всех рынков — валютного, сырьевого, фондового и др.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОднако у начинающих трейдеров наблюдается некоторая сложность в их освоении. Следует приложить определенные усилия и потратить время, чтобы досконально разобраться в свечном анализе. Но результаты труда, однозначно, не пропадут зря и помогут заработать неплохие средства.\u003C\u002Fp\u003E\r\n",
					"summary": "Наиболее удобным вариантом графика любого актива на Forex являются японские свечи. Информативность и наглядность представленных ими данных о состоянии рынка уже давно заслужили популярность у всех трейдеров. Именно анализ японских свечей дает возможность составления прогнозов дальнейшего ценового движения.\r\n\r\nЭтот инструмент технического анализа помогает трейдеру увидеть и понять настроение и психологию рынка."
				},
				"alias": "analysis-japanese-candlesticks",
				"author": {
					"name": "Вадим Кальчук, клиент Трейдер"
				},
				"category": {
					"alias": "other"
				},
				"video": null,
				"publicationDate": {
					"formatted": "2019-02-01T13:07:05",
					"timestamp": 1549026425
				}
			}, {
				"title": "Скальпинговые стратегии для бинарных опционов",
				"body": {
					"value": "\u003Cp\u003EБуквально пару десятилетий назад торговля на финансовых рынках не подкреплялась такой мощной компьютерной базой, как сейчас. Сделки совершались трейдерами по телефонному звонку своему брокеру. С развитием новых технологий стало доступным наблюдение графиков торгуемых активов в онлайн-режиме. У многих трейдеров появилась прекрасная возможность совершать краткосрочные сделки.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИменно бинарный скальпинг позволил трейдерам проводить торговые операции, время исполнения которых (или время экспирации) находится в диапазоне от 30 секунд до 5 минут.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EСуть и преимущества скальпинговой стратегии для бинарных опционов\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EНачинающие трейдеры часто интересуются, как можно спрогнозировать дальнейшее ценовое движение (вверх или вниз) следующие несколько минут. Оказывается, это вполне реально. Прибыль можно получать из мельчайших ценовых колебаний. На протяжении всего торгового дня любой актив обычно совершает 2 или 3 значительные движения в ту или иную сторону. Однако существует множество пульсаций цены вверх и вниз, позволяющих получить скальперам приличный заработок.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЗная это, некоторые не совсем порядочные брокерские компании всячески препятствуют своим клиентам в проведении таких краткосрочных сделок. Но скальпинг-опционы вполне доступны у серьезных и проверенных временем брокеров.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДля новичков такой краткосрочный трейдинг весьма полезен приобретением определенных навыков:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eпоявляется опыт быстро и умело принимать решения в экстремальных ситуациях, часто встречающихся на финансовых рынках;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eдовольно оперативно изучается торговая платформа и ее возможности;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eза небольшой промежуток времени начинающие трейдеры получают свой первый профит.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EЭто весьма важно, поскольку скальпинг на бинарных опционах может дать до 80% прибыли. И ее можно получить, торгуя с минимальным временем экспирации.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТакая торговля будет приносить прибыль при использовании определенного баланса компьютерных индикаторов. Применяя этот набор, важно соблюдать четкий логический алгоритм действий.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВот основные условия успешного применения метода скальпинга для бинарных опционов:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eосновные валютные пары и золото должны быть инструментами такой торговли, поскольку они являются высоковолатильными (это очень важно);\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eтаймфрейм трейдинга должен быть равен одной минуте или пяти;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eторговать следует в Европейскую или Американскую сессии;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eнужно применять риск-менеджмент;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eследует серьезно отнестись к подбору брокера, являющегося посредником между трейдером и рынком;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eвыбор времени экспирации зависит от текущей ситуации на рынке.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EСледует добавить, что существуют различные способы бинарного скальпинга: с применением индикаторов или без их использования.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EИндикаторы для скальпинга бинарными опционами\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EХотя многие трейдеры и считают краткосрочный трейдинг опционами весьма рискованным видом торговли, использование в нем проверенных индикаторов снижает риск во много раз.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНаиболее надежными помощниками из общего списка инструментов можно назвать следующие:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eпара экспоненциальных скользящих средних с периодами 5 и 10;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eиндекс относительной силы (RSI), настройки используются по умолчанию;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E«Стохастик» (\u003Cstrong\u003EStochastic\u003C\u002Fstrong\u003E\u003Cstrong\u003E \u003C\u002Fstrong\u003E\u003Cstrong\u003EOscillator\u003C\u002Fstrong\u003E\u003Cstrong\u003E) со значениями настроек 14, 3, 3.\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EПеречисленный набор индикаторов довольно распространен и приемлем со скальпинговой стратегией для любой торговой платформы, включая программное обеспечение бинарных брокеров.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНаиболее значимую роль играет пара вышеуказанных экспоненциальных «мувингов». Их пересечение отображает перемену краткосрочных тенденций. Именно этот момент является основным фактором для входа в сделку. RSI выполняет роль фильтра, отображающего результаты на экране торгового терминала относительно важного уровня 50. «Стохастик» — дополнительный инструмент, призванный быть подтверждением основного сигнала.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EСигналы индикаторов на открытие сделки\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EВ торговле бинарными опционами существует возможность покупки Call опциона (рост цены в оговоренные сроки) и Put опциона (снижение цены в оговоренные сроки).\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Скальпинг\" data-entity-type=\"file\" data-entity-uuid=\"74d2ea67-0ab5-4da4-bcbf-96586157f566\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%201_10.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСигнал «вверх», или покупка Call опциона, появляется при выполнении ряда условий:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eскользящая красного цвета пересекла зеленую скользящую снизу вверх;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eиндекс относительной силы располагается над уровнем 50;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eбыстрая линия «Стохастика» пересекла медленную (пунктирную) снизу вверх.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EПеред покупкой Call опциона обязательно нужно учесть рыночную обстановку. При низкой волатильности время экспирации следует увеличить.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Скальпинг\" data-entity-type=\"file\" data-entity-uuid=\"d81a1d6b-522b-4e2e-ba67-58db9873d63f\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%202_10.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСигнал «вниз», или покупка Put опциона, образуется также при наличии определенных факторов:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eкрасный «мувинг» пересек зеленый сверху вниз;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003ERSI располагается ниже уровня 50;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eбыстрая линия стохастического осциллятора пересекает медленную сверху вниз.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EПри входе в сделку немаловажно учитывать волатильность торгуемого актива.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИспользуя вышеуказанные сигналы индикаторов, следует помнить, что такая торговая стратегия опционов, как скальпинг, подходит не всем. Покупая опцион Put или Call, при недостаточном анализе рыночной ситуации, и проявляя несдержанность вместо хладнокровия, трейдер превращает разумную торговлю в азартную игру. Шансы получить профит при этом намного снижаются.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EСкальпинг без индикаторов\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EРеализуя скальпинг-стратегии для бинарных опционов, можно обойтись и без использования индикаторов. При этом применяются сделки по тренду.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДля результативной торговли таким методом необходимо наличие трех факторов:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eвесьма «подвижная» валютная пара, у которой тенденция резко возрастает или снижается;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eчеткий механизм, определяющий эту тенденцию;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eточный вход в рынок.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EДля достижения высокой точности входа следует совершать краткосрочные сделки по тренду с минимальным временем экспирации. Причем стартовать нужно на откате цены актива.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Скальпинг\" data-entity-type=\"file\" data-entity-uuid=\"b37c06fe-89ee-42d3-906c-baec097be5b2\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.3_1.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНа рисунке изображен восходящий тренд на минутном временном интервале. Его движение отображено стрелками, которые показывают, в каком именно направлении следует совершать торговые операции. Для безошибочного определения этого направления следует использовать уровни поддержки и сопротивления.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОбозначения в виде овалов над стрелами отображают сопротивления. Аналогичные овалы под стрелами — поддержка. Каждый последующий максимум поддержки выше предыдущего. То же происходит и с экстремумами сопротивления. Определив, в какую сторону движется рынок, следует выбрать момент покупки бинарного опциона со временем исполнения 5 минут. В данном случае нужно стартовать на покупку Call именно в тот момент, когда тренд, завершив очередную коррекцию, меняет направление в сторону основного движения.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ случае понижающейся тенденции действуют аналогичным образом. Важно помнить, что не следует выбирать время экспирации ниже 5 минут, поскольку иногда 1 или 2 минуты цена может оставаться на этом же уровне, не продвинувшись ни на один пункт вверх или вниз.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКроме того, любой трейдер должен понимать, что полностью избежать убыточных сделок не получится. При правильном использовании скальпинг-стратегии для бинарных опционов количество прибыльных торговых операций, вероятнее всего, будет значительно доминировать над числом убыточных.\u003C\u002Fp\u003E\r\n",
					"summary": "Буквально пару десятилетий назад торговля на финансовых рынках не подкреплялась такой мощной компьютерной базой, как сейчас. Сделки совершались трейдерами по телефонному звонку своему брокеру. С развитием новых технологий стало доступным наблюдение графиков торгуемых активов в онлайн-режиме. У многих трейдеров появилась прекрасная возможность совершать краткосрочные сделки."
				},
				"alias": "binary-options-scalping",
				"author": {
					"name": "Вадим Кальчук, клиент Трейдер"
				},
				"category": {
					"alias": "trading-strategies"
				},
				"video": null,
				"publicationDate": {
					"formatted": "2019-01-24T14:29:53",
					"timestamp": 1548340193
				}
			}, {
				"title": "Индикатор RSI. Как использовать",
				"body": {
					"value": "\u003Cp\u003EИндикаторами технического анализа трейдеры пользуются уже давно. Эти алгоритмы автоматически отражают поведение котировок, существенно облегчая торгующим проведение анализа рыночной ситуации и помогая строить торговые планы.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОдним из наиболее распространенных инструментов является RSI индикатор (индекс относительной силы). Его можно назвать легендой технического анализа. Алгоритм дает возможность реально оценить силу текущей тенденции и определить вероятные точки ее разворота.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EИстория и краткая характеристика RSI\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EИнструмент был разработан еще в 1978 году Уэллсом Уайлдером, широко известным основателем различных концепций технического анализа. В своих книжных трудах о торговых системах автор детально изложил суть RSI индикатора.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EРезультатом публикации книги явилась возросшая популярность этого инструмента среди многих участников рынка. При трейдинге на Forex RSI применяется в платформе MetaTrader. Для него приемлемы любые активы и все таймфреймы. По типу алгоритм представляет собой осциллятор. Величина профита зависит от выбранной торговой стратегии.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EОбщее описание алгоритма\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EОсциллятор RSI, а именно таковым, как уже было отмечено ранее, является этот инструмент, колеблется в определенном коридоре между максимальным (100) и минимальным (0) значениями. Он работает на скорости изменения цены, отображая результаты в вышеуказанном диапазоне. Наибольший эффект от работы осциллятора наблюдается, когда он находится вблизи своих экстремумов.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДиапазон от 70 до 100 — зона перекупленности, от 0 до 30 — зона перепроданности. Когда RSI достигает первого диапазона, то ожидается ценовое падение. Вариант пребывания в коридоре от 0 до 30 сигнализирует о дальнейшем ценовом росте.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСледует отметить, что границы 30 и 70 не следует воспринимать как догму. Некоторые трейдеры со стажем, использующие RSI в своих торговых стратегиях, советуют изменить эти значения на 20 и 80. Особенно, когда на рынке господствует ярко выраженная бычья или медвежья тенденции. Тогда, благодаря использованию этих границ, вход в рынок осуществляется более корректно.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 1\" data-entity-type=\"file\" data-entity-uuid=\"24ba4ad6-af1e-44d5-bdc5-3e2149cb01ad\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%201_9.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОднако в случае восходящего или нисходящего тренда всегда возникают логичные вопросы: как долго будет находиться RSI в пограничных зонах и как определить момент его выхода из них, чтобы корректно открыть позицию на покупку (продажу)? Сам автор индикатора рекомендовал использовать период, равный 14. Некоторые трейдеры, помимо этого значения, используют 9 и 25. В зависимости от таймфрейма указанные числа являются количеством свечей, применяемых в расчетах (минуты, часы, дни и т.&nbsp;д.).\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЛюбой трейдер, торгуя выбранным активом, может подобрать для себя оптимальный период экспериментальным путем. Для этого нужно, последовательно изменяя значения, следить за диапазонами перекупленности и перепроданности. Когда ярко выраженные (разворотные, ключевые) экстремумы на ценовом графике начнут отображаться инструментом в этих зонах, а остальные будут вне их — считается, что значение для периода подобрано удачно.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСледует помнить, что период с меньшим числовым значением отражается на чувствительности инструмента. Кривая RSI будет давать больше ложных сигналов. Увеличение периода сделает RSI indicator более сглаженным и отсеет неверные подсказки.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EХарактеристика зон перекупленности и перепроданности\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EНа экране торгового терминала в подвальном окне графика уровни 30 и 70 отображаются линиями. Именно они используются для получения сигналов, чтобы открывать длинные и короткие позиции.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПересечение осциллятором линии 30 сверху вниз говорит о его местонахождении в зоне перепроданности. Когда кривая RSI пересекает эту линию уже снизу вверх, трейдер расценивает это обстоятельство, как открытие длинной позиции. Если индикатор пересек границу 70 снизу вверх (войдя в зону перекупленности), а затем повторно уже сверху вниз — открывается ордер на продажу. Такие правила входа в рынок приемлемы только по движению основного тренда. Против тренда открытие соответствующих ордеров чревато возможными потерями.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОднако осциллятор может находиться в этих зонах довольно продолжительное время. Поэтому следует анализировать подобные ситуации в зависимости от ряда обстоятельств:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EВ случае обычного «боковика» ценовое движение происходит в определенном коридоре. Пересечение RSI уровней 70 сверху и 30 снизу будет хорошим сигналом для входа в рынок на продажу и покупку соответственно. Это видно на рисунке внизу. При условии узкого флэта скальперы имеют прекрасную возможность значительно увеличить свою прибыль.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 2\" data-entity-type=\"file\" data-entity-uuid=\"2e1c262b-e935-40c3-aa4f-bd353fbd91cc\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%202_9.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EВ случае сильного восходящего движения осциллятор, преодолев границу 70, может длительное время пребывать в диапазоне перекупленности. Целесообразнее пренебречь его показаниями до того момента, пока он не пересечет уровень в обратном направлении. Это будет неплохим сигналом для начала продаж.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EРанее уже упоминалось, что значения 30 и 70 подлежат изменению. Так, например, участники рынка, проводящие трейдинг в условиях бычьей тенденции, используют для уровней значения 40 и 80. При четко выраженном медвежьем тренде удобно использовать 20 и 60.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 3\" data-entity-type=\"file\" data-entity-uuid=\"68fe7e23-7490-4cb4-bc75-b21bdfad7146\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%203_7.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНекоторые трейдеры рекомендуют применять «правило 5%». Это значит, что линия уровня проводится таким образом, чтобы RSI индикатор Forex оставался за ней не более 5% всего времени за определенный временной промежуток. Можно протестировать его на исторических данных за последние три месяца. Впоследствии все данные обновляются.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКогда рынок не отличается резкой изменчивостью, уровни 30 и 70 практически не пересекаются осциллятором. Увеличить амплитуду его колебаний можно, уменьшив в расчетах период. Если же осциллятор чрезмерно чувствителен к ценовым изменениям, то период следует увеличить и тем самым отсеять рыночный шум. Момент завершения сделки связан с приближением к зонам перекупленности или перепроданности. Как только осциллятор достигнет их границ, позицию следует закрыть. Некоторые оставляют сделки открытыми и подтягивают стоп-лоссы ближе, надеясь получить еще большую прибыль, поскольку ценовое движение вполне может продолжиться в прежнем направлении.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EФигуры технического анализа\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EПрименяя RSI индикатор в торговле, можно входить в сделки, используя и графические фигуры, которые рисует инструмент в подвальном окне. Это могут быть «треугольники», «знамена», «двойные вершины» и т. д.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 4\" data-entity-type=\"file\" data-entity-uuid=\"b6214a4f-c4d6-4479-959e-acca6a5d1733\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%204_7.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНа рисунке пары EURUSD отчетливо наблюдается фигура разворота «голова-плечи». По ней можно войти в продажу, получив неплохой профит. В качестве линии шеи подходит уровень 50.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EДивергенции\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EИндикатор может быть помощником в прогнозировании дальнейшего движения основного тренда. Отображая divergence (расхождение в подвальном окне и на графике торгуемого актива), инструмент предсказывает скорый ценовой разворот в будущем.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 5\" data-entity-type=\"file\" data-entity-uuid=\"7b8d6cf6-36b8-4b70-9c9f-784256362eab\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%205_5.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ данном случае на графике наблюдается сильный сигнал к развороту — дивергенция ниже уровня 30 RSI. Подобный сигнал обязательно следует учитывать в трейдинге при уже открытой позиции. Ее следует закрыть во избежание возможных убытков.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТакое расхождение может наблюдаться в двух случаях:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eпри росте ценового тренда RSI снижается;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eпри нисходящей тенденции кривая RSI растет.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EИнструмент лучше применять вместе с другими индикаторами технического анализа. Это поможет отсеять ложные сигналы. Тестирование желательно провести на демо-счете, а уже затем торговать реальными средствами.\u003C\u002Fp\u003E\r\n",
					"summary": "Индикаторами технического анализа трейдеры пользуются уже давно. Эти алгоритмы автоматически отражают поведение котировок, существенно облегчая торгующим проведение анализа рыночной ситуации и помогая строить торговые планы.\r\n\r\nОдним из наиболее распространенных инструментов является RSI индикатор (индекс относительной силы). Его можно назвать легендой технического анализа. Алгоритм дает возможность реально оценить силу текущей тенденции и определить вероятные точки ее разворота"
				},
				"alias": "rsi-how-to-use",
				"author": {
					"name": "Вадим Кальчук, клиент Трейдер"
				},
				"category": {
					"alias": "other"
				},
				"video": null,
				"publicationDate": {
					"formatted": "2019-01-10T13:06:52",
					"timestamp": 1547125612
				}
			}, {
				"title": "Индикаторы уровней поддержки и сопротивления",
				"body": {
					"value": "\u003Cp\u003EБез сомнения, уровни поддержки и сопротивления являются одним из важнейших элементов технического анализа. С этим утверждением согласится любой трейдер. Одни используют уровни в трейдинге непосредственно, открывая и закрывая ордера у границ диапазона, очерченного ими. Другие применяют баланс спроса и предложения в своих торговых стратегиях на различных временных интервалах.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВизуальное представление границ зон борьбы продавцов с покупателями весьма удобно и служит прекрасным ориентиром для всех участников рынка. Проблему автоматической прорисовки поддержки и сопротивления решают индикаторы уровней.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EПредставление поддержки и сопротивления в торговом терминале\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EВ любом MetaTrader уже существуют несколько форм отображения вышеупомянутых уровней. Наиболее распространенными инструментами являются:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eпараллельные прямые линии, отображающие канал, в котором происходит ценовое изменение;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eскользящие средние с различными крупными периодами. Числовое значение периодов, как правило, начинается от 100 и является круглым числом;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eуровни Фибоначчи — прекрасное средство для определения ценовых откатов. Эта методика может применяться на любых таймфреймах.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 1\" data-entity-type=\"file\" data-entity-uuid=\"883be930-a9ad-4405-be2a-f7ae3ff76e43\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%201_8.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНа перечисленных трех инструментах основывается множество методов трейдинга, применяемых на Forex. Для использования особых зон с максимальным эффектом созданы специальные алгоритмы — индикаторы уровней поддержки и сопротивления. Их многообразие позволяет каждому выбрать наиболее приемлемый для него индикатор и, применяя в торговле, получать профит.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EИндикатор Zone\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЭто один из наиболее распространенных и эффективных алгоритмов, призванных определять сильные горизонтальные уровни. Хотя Zone не входит в стандартный набор инструментов MetaTrader, его без труда можно найти в интернете и установить в свой торговый терминал.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОтдельного внимания заслуживают два параметра:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003ETF — интервал времени, на котором инструмент прорисовывает важные горизонтальные уровни. Это значение выставляется в минутах. От 1 минуты для М1 и до 43 299 минут для месячного периода М;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EMaxbars — количество баров, используемых для построения границ поддержки и сопротивления. По умолчанию он равен 1 000. При наличии других индикаторов, используемых в торговле, значение Maxbars можно и снизить, чтобы не загружать торговый терминал.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EПомимо вышеуказанных настроек в индикаторе можно изменять толщину и цвет линий, размер шрифта. Применять Zone в трейдинге следует аналогично другим индикаторам уровней Forex. В случае разворота от намеченных границ&nbsp;— использовать момент для входа в соответствующую позицию (длинную или короткую). Вариант пробоя уровней — торговать с применением соответствующей стратегии.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 2\" data-entity-type=\"file\" data-entity-uuid=\"343d1f37-b578-402b-a681-4030c0cf2c84\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%202_8.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ отличие от других аналогичных алгоритмов, Zone отражает в терминале наиболее важные уровни, от которых, с большой долей вероятности, цена оттолкнется. Именно возле этих границ были проторгованы значительные объемы. Использовать этот инструмент в трейдинге можно самостоятельно или вместе с другими индикаторами, подтверждающими реакцию рынка в предполагаемый момент продаж или покупок.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПрежде чем применить алгоритм Zone в реальной торговле, следует протестировать его на демо-счете, подобрав соответствующие настройки. Только убедившись в корректной работе индикатора, можно начать торговлю реальными средствами.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНекоторые опытные трейдеры советуют нанести Zone с различными настройками TF на график выбранного актива. Тогда перед глазами будет наглядная картина разворотных уровней всех временных интервалов. Это послужит дополнительным фильтром для входа в рынок.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EИндикатор PowerDynamiteAreas\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЭто довольно неплохой и интуитивно понятный Forex-индикатор сопротивления и поддержки. PDA пользуются, как начинающие трейдеры, так и опытные. Инструмент дает возможность визуально наблюдать на экране терминала уровни, дифференцированные по их силе. Причем такая картина отображается на любом таймфрейме.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПоиск и установка PDA не займет много времени. Среди входных параметров можно выделить наиболее важные:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EPivot Strength — настройка силы уровня. Изменяется в пределах от 1 до 7;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EMax Look Back Bars — отображает количество свечей, применяемых для расчетов;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EMax Levels — число уровней поддержки и сопротивления, одновременно отображаемых на экране терминала.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EПомимо этого в настройках есть возможность изменить толщину линий и дистанцию, разделяющую два соседних горизонтальных уровня. Использовать PDA можно самостоятельно и в качестве дополнительного фильтра с другими индикаторами для подтверждения удобного момента на вход в сделку.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ первом случае присутствуют три варианта развития событий:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EОткрытие позиции при отскоке цены от уровня. Проанализировав трендовое движение, трейдер должен дождаться отскока цены от прорисованной индикатором линии и открыть ордер на покупку (продажу). Тейк-профит и страховочный стоп-лосс выставляются в соотношении 3:1. Это минимальное соотношение для торговли на часовом графике актива.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 3\" data-entity-type=\"file\" data-entity-uuid=\"4313e1b7-afe9-46dd-a2e2-2a01b80eff90\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%203_6.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EОткрытие позиции после пробоя уровня. Этот вариант предусматривает вход в рынок, если ситуация будет развиваться следующим образом. После пробития уровня и последующего закрепления за ним, цена повторно пересекает эту границу в прежнем направлении (как показано на рисунке снизу). Окончание свечи будет сигналом для открытия позиции. Страховочный ордер выставляется за последним экстремумом. Открытую позицию можно сопровождать трейлинг-стопом или со временем переместить стоп-лосс в безубыток и постепенно сдвигать его вслед за ценой.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 4\" data-entity-type=\"file\" data-entity-uuid=\"1e210035-00d6-4a1a-9324-3426623c8c7c\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%204_6.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EТрейдинг в боковом ценовом диапазоне. В этом случае инструмент PDA четко прорисовывает линии борьбы продавцов с покупателями. Цена изменяется в обозначенном коридоре. Нужно дождаться появления свечи со средним или длинным лучом возле границы, направленным в ее сторону (как показано на рисунке). После окончательного формирования свечи следует входить в длинную или короткую позицию, помещая стоп-лосс за уровень.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 5\" data-entity-type=\"file\" data-entity-uuid=\"c6e6400e-a14b-4a63-be6d-e366f5d905c6\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%205_4.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНеоспоримое достоинство PDA в том, что начинающий трейдер может не сомневаться в точной визуализации индикатором значимых уровней поддержки и сопротивления. Используя этот уникальный инструмент для внутридневной торговли, трейдер получает хороший фильтр сигналов, предупреждающих его о целесообразности не входить в рынок перед сильным препятствием. Само собой в трейдинге следует учитывать важнейшие новостные события, после которых цена может пробить значимые уровни и пойти дальше.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EАлгоритм Lines\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЯвляется одним из простейших индикаторов уровней поддержки и сопротивления без перерисовки для внутридневного трейдинга. Особенность алгоритма в том, что он отображает на графике торгуемого актива две линии сопротивления и две линии поддержки.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 6\" data-entity-type=\"file\" data-entity-uuid=\"7b2ada9e-b424-4527-87be-ec7b74d7c62b\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%206_3.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВсе линии окрашены в разные цвета и имеют разную толщину. Различия означают значимость уровней:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eподдержка красного цвета и сопротивление синего — более значимые уровни;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eподдержка розового цвета и сопротивление голубого — второстепенные границы.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EЗначимые уровни по протяженности превышают второстепенные. Это отчетливо видно на рисунке.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ настройках Lines предусмотрены параметры для более значимых границ – X1, Y1, L1, L2. Для второстепенных — X2, Y2, L3, L4.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 7\" data-entity-type=\"file\" data-entity-uuid=\"1d80fbae-7e7b-4452-82c1-7162e0160e31\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%207_3.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОни отображены в окне «Настройки инструмента». Значения X задают протяженность интервала времени, на котором производится расчет ценовых уровней. Параметры Y отвечают за ширину полос, наносимых на график.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВизуализация на экране 4-х уровней обуславливает специфику использования Lines. Трейдеры, применившие этот инструмент в своей торговле, рекомендуют с определенным интервалом времени изменять его расчетный период. Таким образом можно отслеживать изменение положения уровней.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 8\" data-entity-type=\"file\" data-entity-uuid=\"f51e69d5-aadf-4d60-8c49-06d6264f17f3\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%208_0.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЕсли это положение не меняется длительное время, значит, цена движется в канале. Следовательно, целесообразно использовать стратегию отбоя от ценовых уровней, открывая ордера на покупку и продажу. Это очень удобно. Главное вовремя открывать короткие и длинные позиции. Можно пользоваться тактикой отложенных ордеров.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ случае пробития важных ценовых уровней — применять соответствующий метод трейдинга. Также использовать отложенные ордера.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EPZ уровни&nbsp;\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЕще один индикатор уровней, идентифицирующих их важность. Начинающему трейдеру бывает непросто вручную прочертить на графике важные и менее значимые ценовые границы. Их многообразие объясняется тем, что информация, которую дают различные аналитические агентства, по-разному воспринимается.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИндикатор PZ оценивает каждый уровень и в зависимости от важности отображает его на графике с определенной толщиной. Отдельные, еще не сформировавшиеся, границы отображаются в виде пунктирной линии.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EАлгоритм имеет ряд преимуществ:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eпроведение одновременного анализа на 4-х временных интервалах;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eвблизи образовавшейся экстремальной точки анализируется поведение цены. Выявляется характер ее движения (медленный, быстрый). Это и есть сила зоны спроса и предложения;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eобъединение довольно близко расположенных уровней в один:\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eвозможность настройки параметров инструмента под свою торговую систему;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eотсутствие перерисовки и возможность звукового оповещения.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EВсе параметры PZ делятся на три категории — оказывающие влияние на результаты анализа, настройка и отображение результатов (визуализация), варианты оповещения (телефон, электронная почта, звук). Индикатор легко скачивается и устанавливается в торговый терминал.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТрейдеры, применившие алгоритм PZ на практике, советуют использовать его в торговле на отбой от уровней. Довольно результативно он отрабатывает в канальных стратегиях. Сигналом к развороту могут послужить свечные паттерны.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EМногие индикаторы уровней схожи между собой по принципу работы и выполняют одни и те же функции. Хотя у каждого есть свои индивидуальные особенности. Поэтому каждый трейдер выбирает их для себя самостоятельно, предварительно опробовав на практике.\u003C\u002Fp\u003E\r\n",
					"summary": "Без сомнения, уровни поддержки и сопротивления являются одним из важнейших элементов технического анализа. С этим утверждением согласится любой трейдер. Одни используют уровни в трейдинге непосредственно, открывая и закрывая ордера у границ диапазона, очерченного ими. Другие применяют баланс спроса и предложения в своих торговых стратегиях на различных временных интервалах.\r\n\r\nВизуальное представление границ зон борьбы продавцов с покупателями весьма удобно и служит прекрасным ориентиром для всех участников рынка. Проблему автоматической прорисовки поддержки и сопротивления решают индикаторы уровней."
				},
				"alias": "support-resistance-indicators",
				"author": {
					"name": "Вадим Кальчук, клиент Трейдер"
				},
				"category": {
					"alias": "other"
				},
				"video": null,
				"publicationDate": {
					"formatted": "2019-01-10T11:32:28",
					"timestamp": 1547119948
				}
			}, {
				"title": "Основы риск менеджмента при торговле на Форекс",
				"body": {
					"value": "\u003Cp\u003EИзвестно, что неотъемлемой частью прибыльной торговли являются риск-менеджмент и мани-менеджмент (Money Management). Профит всех трейдеров на Forex зависит от их умения управлять своими средствами как в периоды прибыли, так и в периоды просадок.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EК большому сожалению, многие начинающие трейдеры, да и не только они, пренебрегают риск-менеджментом. Новички наивно полагают, что есть некий волшебный подход к трейдингу на валютном рынке, заключающийся в получении правильной информации о нем, что позволяет практически всегда осуществлять лишь прибыльные торговые операции.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EЧто такое риск-менеджмент?\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EМногие трейдеры путают понятия мани-менеджмента и риск-менеджмента. В первом случае — это умение управлять средствами, а во втором — умение ограничивать свои потери во время торговли.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТрейдинг на финансовых рынках — это высокорискованное средство заработка. Получение прибыли в процессе торговли еще не является полным залогом успеха всей торговой деятельности. Весьма важно научиться доход не терять. Риск-менеджмент является частью торговой системы, указывающей на конкретное количество лотов, используемых в определенный момент трейдинга. Другими словами, это управление размером ставки.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EАвтор книги «Биржевая игра» Райан Джонс указывает на тот факт, что в большинстве случаев, размышляя над объемом вновь открываемой позиции, трейдеры действуют инстинктивно, полагаясь на свое предчувствие. Такая бессистемность порождает более 90% неудачников в трейдинге. Профессионалы, используя определенные системы подсчета, определяют, какой именно суммой денежных средств можно рисковать при открытии следующей позиции. Такие системы они используют продуктивно и постоянно. «Трейдинг — это игра, в которой присутствует вознаграждение за риск», — говорит Джонс.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПоскольку вся торговля на Forex в основном построена на эмоциях трейдера, риск-менеджмент служит для того, чтобы исключить эмоциональную составляющую и придать упорядоченность процессу. Итоговая прибыль является суммой результатов прибыльных и убыточных сделок.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Риск-менеджмент\" data-entity-type=\"file\" data-entity-uuid=\"e9dcf4d7-70b1-4d33-b86f-ce6f4262ba4e\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%B8%D1%81%D0%BA%201.jpg\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ настоящее время разработано множество правил управления капиталом и способов определения риска на сделку. Управление денежными средствами можно разделить на две категории: правильное и неправильное. Первая категория учитывает риск и полученное за него вознаграждение. Таким образом, используется весь спектр имеющихся возможностей. Вторая категория учитывает либо риск, либо прибыль. В этом случае берутся во внимание лишь отдельные характеристики счета: процент удачных торговых операций или соотношение профита и потерь.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EВажность риск-менеджмента при торговле\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EПри трейдинге на Forex риск-менеджмент является, по сути, наиболее важным аспектом. Он помогает трейдеру «оставаться в игре». Полный успех на рынке обеспечивает оптимальное управление капиталом. Поэтому следует более подробно рассмотреть, что он собой представляет.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНачинающие трейдеры довольно часто не учитывают случайность происходящих на Forex событий и не до конца разбираются в вопросах вероятности. Некоторые из них охотно верят в то, что брокеры искусственно формируют ложные свечи и преждевременно закрывают стоп-лоссы (Stop Loss). Именно такие новички зачастую и «сливают» свои депозиты.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДля трейдеров крайне важно понятие математического ожидания:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EПоложительное математическое ожидание — это преимущество игрока в проводимой игре.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EОтрицательное математическое ожидание — преимущество игорного дома.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EВ качестве примера можно привести подбрасывание монеты с целью выявления преимущества «орла» или «решки». В данном случае их шансы равны: 50 на 50. Поэтому и вероятность получить выигрыш составляет 50%. Однако за подобные действия в казино с игрока будут удержаны 10% комиссионных за каждое подбрасывание. Таким образом, преимущество игорного дома делает математическое ожидание игрока отрицательным. Следует уяснить, что ни одна система управления капиталом не выстоит против отрицательного математического ожидания. Рано или поздно размер депозита станет равным нулю. Это вопрос времени.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИгрока ждет успех только в случае положительного математического ожидания. К сожалению, торговля на финансовых рынках и, в частности на Forex, имеет отрицательное математическое ожидание. Подобно 10% налогу в казино, здесь отрицательное воздействие на трейдинг оказывают свопы, спреды, плата за перевод средств на счета. Поэтому трейдеру следует искать положительное математическое ожидание любыми способами.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EРазрабатывая или оптимизируя торговую систему, необходимо стремиться к тому, чтобы она была жесткой и практичной. Меньшее количество ее компонентов будут сводить к минимуму возможность потерь. Настройки должны быть плавающими и зависящими от определенных параметров рынка, например волатильности.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПрежде чем применить торговую систему в трейдинге реальными средствами, следует ее протестировать, используя длительный исторический период (желательно не менее 5 лет). И только убедившись в ее корректной работе при тестировании, можно использовать разработанный набор правил в реальной торговле. Следует отметить, что все результаты оценивают в совокупности.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИмея готовую торговую систему, уже можно устанавливать правила управления капиталом. Высокое положительное математическое ожидание этой системе будут давать правильно выбранный размер позиции и торговля по строго разработанным правилам.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EРазмер капитала, которым можно рисковать\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЭмоции и невежество, как правило, могут сыграть злую шутку с начинающими трейдерами. Они часто открывают ордера интуитивно и входят в рынок тогда, когда этого не следовало бы делать. Впоследствии «набивая шишки» и приобретая опыт торговли, эти трейдеры уже начинают придерживаться определенной торговой системы. Однако первые успехи на рынке делают их жадными, и новички неразумно рискуют слишком большой суммой в одной сделке. Несколько неудачных сделок, совершенных под воздействием эмоций, могут легко обнулить депозит.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EРискуя четвертью капитала на счете, довольно быстро можно приблизить финансовый крах. Даже самая лучшая торговая система не сможет его предотвратить. В случае риска десятой долей средств торговая деятельность продлиться некоторое время, но финал также будет плачевным.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Риск-менеджмент\" data-entity-type=\"file\" data-entity-uuid=\"3828c51e-a42f-486d-bbaf-e1a8a86717f4\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%B8%D1%81%D0%BA%202.jpg\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EМногочисленные исследования рынка показали, что использовать в трейдинге следует не более 2% депозита. Некоторые опытные трейдеры даже считают этот предел завышенным и уменьшают его до 1%. Это не случайно, поскольку, привлекая дополнительно инвесторов, весьма благоразумно показывать меньший процент убытков.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПри управлении капиталом следует придерживаться строгих правил:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EОбеспечить себе выживание на рынке и всячески избегать неоправданного риска. Заранее жестко ограничить возможные потери.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EДобиться устойчивого профита от сделок.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EПолучать сверхприбыль.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EДва последних правила выполнимы лишь при неукоснительном соблюдении первого. Следует помнить, что богатеть нужно медленно. В торговле на финансовых рынках никогда не следует торопиться, пускаясь в погоню за большой прибылью. Ни в коем случае нельзя рисковать всеми средствами, имеющимися на счете.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСпоры о заработках не затихают на многих тематических форумах. Считается, если трейдер делает 40% дохода в год и закрепил этот успех на протяжении 5 лет, он достиг многого. Трейдер, способный удвоить свой капитал за один год, считается большой редкостью. Поэтому правильным будет ставить перед собой скромные цели и достигать их. По сути, это единственный верный путь к получению хорошей статистики с регулярным профитом и малыми потерями. Опыт показывает: реальные доходы несовместимы с высокими рисками.\u003C\u002Fp\u003E\r\n\r\n\u003Ch3\u003EСуммарная чистая прибыль\u003C\u002Fh3\u003E\r\n\r\n\u003Cp\u003EОбщая чистая прибыль в результате трейдинга будет равна разности валовой прибыли и валового убытка. Этот признак наиболее полно дает инвестору информацию о возможности торговой системы.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСама по себе чистая прибыль практически не несет смысловой нагрузки. Ее обязательно следует рассматривать, разбив по различным периодам времени, даже по годам. Однако для принятия окончательного решения следует учитывать и другие параметры.\u003C\u002Fp\u003E\r\n\r\n\u003Ch3\u003EМаксимальная просадка\u003C\u002Fh3\u003E\r\n\r\n\u003Cp\u003EЭто одна из составляющих частей риск-менеджмента на рынке. У любого есть как успешные, так и убыточные сделки. Опытный трейдер минимизирует просадку в отличие от только начинающего торговать.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EМаксимальной просадкой принято считать степень наибольшего убытка, который может быть на счете трейдера. Это максимальное снижение средств, фиксируемое от локального максимума (разница между экстремумами денежных средств на депозите). Причем данная величина измеряется в валюте депозита.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНапример, на счете было 400 долларов. Закрытие первого ордера принесло прибыль размером 50 долларов. Вторая сделка была неудачной, обозначив убыток в 100 USD. Затем опять убыток 50 USD. И снова прибыль 20 USD. В результате нескольких прибыльных и убыточных сделок количество средств снизилось до 320 долларов. Разница между локальным максимумом 450 USD и локальным минимумом 300 USD составила 150. Это и есть максимальная просадка.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЭтот показатель определяет размер реальных рисков трейдинга. Его величина даже может быть больше первоначального размера депозита, когда сначала получена прибыль, а впоследствии — большие потери.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Риск-менеджмент\" data-entity-type=\"file\" data-entity-uuid=\"b079025b-1edd-4069-a328-442dc2ee4b82\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%B8%D1%81%D0%BA%203.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПри тестировании торговой стратегии немаловажной характеристикой является фактор восстановления (Recovery Factor). Это отношение чистой прибыли, полученной в результате торговой деятельности, к максимальной просадке. В итоге виден размер профита, приходящийся на один доллар убытка. Метод торговли, где значение Recovery Factor меньше единицы, не может быть эффективным. Вообще, трейдеры со стажем считают систему продвинутой, когда значение фактора восстановления не менее 3.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДаже весьма поверхностный анализ параметров любой торговой системы может показать, насколько она эффективна. Например, если определенный метод торговли сулит 80% прибыли в год, это довольно неплохой предвестник достатка. Но когда при этом максимальная просадка равна 60%, вполне возможен вариант уменьшения депозита более чем в два раза, а возможно и его слива.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EУвеличение максимальной просадки в результате нескольких неудачных торговых операций может пагубно воздействовать на психологическое состояние начинающего трейдера. У него возникает острое желание быстро восстановить потерю средств. Однако никоим образом не следует поддаваться эмоциям. Обязательно нужно следовать правилам уже выбранной торговой системы и не забывать: просадки являются неотъемлемой частью любого трейдинга.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EСредний коэффициент выигрыш \u002F проигрыш\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЭтот показатель, совмещенный с процентом прибыльности, дает инвестору или трейдеру много полезной информации для принятия кардинальных решений. Системную торговлю можно рассматривать, как игру в числа.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКомбинация коэффициента выигрыш \u002F проигрыш и процента прибыльности оказывает существенную помощь в вычислении резерва на ошибку и позволяет понять логику используемого в торговле метода. Для наглядности данную зависимость можно рассмотреть на графике.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Риск-менеджмент\" data-entity-type=\"file\" data-entity-uuid=\"7a86d474-6035-4741-bdb6-f783e117913f\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%B8%D1%81%D0%BA%204.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВидно, что при соотношении коэффициента выигрыш \u002F проигрыш и процента прибыльности 1 \u002F 50 наступает безубыточный трейдинг. Несложно заметить, что понижение значения второго параметра влечет увеличение первого. И наоборот, уменьшение процента прибыльности увеличивает коэффициент выигрыш \u002F проигрыш. Его значение должно быть равно минимум 4, чтобы обеспечивать 20% прибыли.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОбычно в неплохих торговых системах соотношение этих параметров 5 к 10. Не следует гнаться за сверхприбылью. Во всем нужно знать меру.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EСоотношение между максимальным и средним выигрышем\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EВ этом параметре происходит учет соотношения максимального и среднего убытка. Этот показатель будет полезен для определения потенциала максимальной прибыли. Однако любой инвестор должен помнить, что на такую удачу всецело не стоит полагаться, но все же она будет приятной.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКогда максимальный выигрыш в несколько раз (в три или четыре) больше среднего, то не стоит особо рассчитывать на его получение. В случае когда его значение не превышает сумму трех средних выигрышей, есть большая вероятность, что дальнейшее использование данного метода торговли даст еще больший профит по сравнению с первоначальным.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЕсли средний убыток в три-четыре раза ниже максимального, значит, произошло экстраординарное событие. Таких потерь быть не должно, они случаются крайне редко. Потери могут быть выше лишь при соотношении: максимальный убыток превышает средний менее, чем в три раза.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EВероятность финансового краха\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EПоказатель Probability of Ruin (POR) отражает вероятность того, что баланс на счете трейдера будет снижаться до определенной точки раньше, чем подниматься до другой, более высокой, точки. Таким образом, выбранный метод трейдинга может разорить торговый счет. Убыток будет виден по самому уровню счета в момент прекращения торговли. POR наглядно отражает движение выбранной системы к успеху или разорению.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЛюбому трейдеру будет всегда полезно знать эту величину. Для вычисления вероятности разорения нужно определить все параметры весьма сложного уравнения. Важно учитывать следующие закономерности:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EProbability of Ruin уменьшается при увеличении размера средних выигрышей.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EPOR увеличивается в случае роста среднего риска сделки.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EРазмер исходного депозита также влияет на вероятность разорения. Чем он больше, тем меньше POR.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EУвеличение процентной доли выигрышных торговых операций снижает POR.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EСлишком маленький размер депозита увеличивает вероятность его разорения.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EКак правило, значение Probability of Ruin не превышает 5%. Но важно то, что этот показатель своевременно информирует трейдеров о возможном быстром финансовом крахе. В этом случае следует снижать риск каждой последующей сделки и стараться уменьшить POR до нужного уровня. Рискуя совсем незначительной частью средств на депозите, трейдер однозначно увеличивает шансы на успех. Если есть выбор между двумя торговыми системами, следует выбирать ту, где риск разорения меньший.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EФактор прибыли\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЭтот немаловажный для трейдера параметр принято называть профит-фактором (Profit Factor). Он также является неотъемлемой частью тестирования торговой стратегии и позволяет оценить ее эффективность. Пользуется наибольшей популярностью у трейдеров.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EРасчет показателя несложен. Суммируются убыточные и прибыльные торговые операции. Считается, что значение не менее 1.6 является оптимальным для Profit Factor.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Риск-менеджмент\" data-entity-type=\"file\" data-entity-uuid=\"e5f35707-f6d0-46d0-b7f3-7ac1ef909f28\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%B8%D1%81%D0%BA%205.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЕсли же профит-фактор больше 1.6, это свидетельствует о повышении эффективности выбранного метода торговли. Profit Factor является результатом деления валовой прибыли на валовой убыток за конкретный отрезок времени. Желательно высчитывать его на большем временном промежутке, поскольку тогда он более объективен.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003ES(Pi) \u002F S(Li) = Profit Factor, где\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003ES(Pi) — валовая прибыль, а S(Li) — валовой убыток.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОчевидно, что в случае возросших убытков трейдер не может рассчитывать на прибыль. Profit Factor играет роль своеобразного фильтра, выявляющего низкоэффективные методы торговли, способные быстро обнулить депозит. Показатель отражает не только результат, но и динамику работы трейдера. Приносит реальную пользу в ряде случаев:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eоценка собственного трейдинга;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eизучение инвестиционного предложения;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eанализ предложения продавцов.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EСпециалисты советуют выбрать несколько основных показателей, предоставляющих информацию о рисках, прибыли и о некоторых соотношениях между ними. Чтобы оценить работу на рынке и улучшить способ торговли, нужно обязательно анализировать весь процесс трейдинга, а не только конечный результат. Будет совсем нелишним наблюдать за деятельностью коллег, поскольку у них есть чему поучиться. Инвесторы обязательно делают это с целью выбора лучшего управляющего.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EВыводы\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EПодводя итоги всего вышесказанного, следует учесть несколько основных моментов, чтобы оптимизировать трейдинг. Они просты, но обязательны для выполнения:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EПо каждой торговой операции вычисляется максимальный риск потери депозита. Расчет производится в процентах к общей сумме денежных средств на счете и зависит от стиля торговли. Ограничиваются возможные потери стоп-лоссом.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EСледует учитывать риски потерь за конкретный временной интервал: день, неделю, месяц. Учитывается эмоциональное состояние трейдера. Следует точно определить, с какой суммой ему не жалко расстаться. Если в течение торгового дня потери вызывают у трейдера подавленное состояние, то торговлю следует временно прекратить. Нужно успокоиться, а затем хладнокровно проанализировать произошедшее. К трейдингу можно вернуться, когда эмоции уйдут и будут сделаны правильные выводы с учетом случившихся временных неудач.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EОбязательное снижение объемов сделок после серии неудач вполовину, а возможно и в два раза. Это однозначно защитит депозит от разорения.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EДанные правила помогут приобрести опыт в торговле и, вероятнее всего, добиться успехов.\u003C\u002Fp\u003E\r\n",
					"summary": "Известно, что неотъемлемой частью прибыльной торговли являются риск-менеджмент и мани-менеджмент (Money Management). Профит всех трейдеров на Forex зависит от их умения управлять своими средствами как в периоды прибыли, так и в периоды просадок.\r\n\r\nК большому сожалению, многие начинающие трейдеры, да и не только они, пренебрегают риск-менеджментом. Новички наивно полагают, что есть некий волшебный подход к трейдингу на валютном рынке, заключающийся в получении правильной информации о нем, что позволяет практически всегда осуществлять лишь прибыльные торговые операции."
				},
				"alias": "risk-management-basics",
				"author": {
					"name": "Вадим Кальчук, клиент Трейдер"
				},
				"category": {
					"alias": "trading-strategies"
				},
				"video": null,
				"publicationDate": {
					"formatted": "2018-12-21T11:04:06",
					"timestamp": 1545390246
				}
			}, {
				"title": "Лучшие трендовые индикаторы Форекс",
				"body": {
					"value": "\u003Cp\u003EДля любого трейдера крайне важно правильно определить направление и силу трендового движения. К сожалению, единственное&nbsp;верное решение этой задачи отсутствует. Множество&nbsp;трейдеров&nbsp;торгуют на&nbsp;различных временных интервалах. По этой причине&nbsp;получаемые&nbsp;сигналы&nbsp;воспринимаются субъективно.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИндикаторы тренда&nbsp;дают возможность классифицировать направление ценового движения, определив его силу. Решение этой проблемы помогает инвесторам вовремя войти в рынок и получить хорошую прибыль.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EСредства технического анализа\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EТехническим анализом рынка&nbsp;Forex&nbsp;принято считать различные методы его исследования, дающие возможность прогнозировать ценовые движения активов. При этом обязательно учитываются исторические данные анализируемого актива. Именно корректное выполнение таких действий во многом помогает трейдерам вовремя принять правильное решение и получить профит.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКомпоненты технического анализа:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EГрафические фигуры;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EИндикаторы;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EЦеновые уровни;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EЯпонские свечи.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EИменно эти средства дают возможность&nbsp;эффективно прогнозировать рынок. Поскольку в ручном режиме этот процесс занимает довольно много времени, а трейдерам зачастую приходится принимать решения оперативно, наиболее популярными средствами ценового исследования являются&nbsp;Forex-индикаторы тренда.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EКлассификация индикаторов\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EБольшое многообразие этих инструментов делится на несколько групп в зависимости от того,&nbsp;какие задачи они призваны решать.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОбщие категории индикаторов:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EТрендовые индикаторы Forex&nbsp;помогают анализировать&nbsp;рынок&nbsp;на выбранном временном интервале.&nbsp;Они определяют господствующую тенденцию.&nbsp;Используются&nbsp;в трейдинге при такой тенденции;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EИндикаторы разворота являются частью описанной выше категории инструментов. Они не только анализируют ценовое движение, но и указывают&nbsp;точки возможных разворотов. Это способствует быстрому и оптимальному открытию ордеров на покупку или продажу (в зависимости от текущей ситуации);\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EИндикаторы построения каналов и уровней. Быстро определяют линии поддержки и сопротивления. Тем самым трейдер ориентируется в намеченном ценовом диапазоне, имея возможность вовремя открыть торговую позицию и вовремя закрыть ее;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EИнструменты, анализирующие основные параметры&nbsp;Forex, способствуют получению информации о текущих объемах всех рыночных сделок по определенному активу.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Ch2\u003ERSI индикатор\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EИндекс относительной силы — таково точное наименование этого&nbsp;Trend-индикатора. Он применим во многих торговых системах и на любых рынках. Инструмент является осциллятором, изменяющимся в определенной зоне. Зона имеет максимальное и минимальное ограничения. Значения&nbsp;RSI&nbsp;могут изменяться от 0 до 100.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКогда на графике торгуемого актива индикаторная линия движется в коридоре от 70 до 100, считается, что рынок пребывает в состоянии перекупленности. Если наблюдается движение в диапазоне&nbsp;от&nbsp;0&nbsp;до&nbsp;30&nbsp;—&nbsp;это состояние перепроданности. RSI&nbsp;может предупреждать о развороте тенденции, ее силе и ценовом приближении к центральной линии.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EРассчитывается осциллятор по формуле&nbsp;RSI = 100 – 100 \u002F (1 + RS). Здесь компонент RS представляет собой соотношение среднего роста актива к его среднему падению. Индекс относительной силы определяется на основании 14 временных промежутков. Это рекомендованное стандартное количество периодов.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПрименительно к свечному графику инструмент сравнивает средний прирост со средней потерей, анализируя 14 последних баров. При этом учитывается и размер каждой свечи.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 1\" data-entity-type=\"file\" data-entity-uuid=\"6a907b96-a360-484c-9f47-049776238353\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%201_7.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНа рисунке можно наблюдать, каким образом вычисляется индекс относительной силы. В первой выделенной области значение RSI уменьшается с 52.5 до 33. Во второй области значение индекса увеличилось до 52.5. Анализ обоих участков был сделан индикатором на основании 14 свечей. Индикатор делает эти расчеты намного быстрее ручного способа.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EАлгоритм MACD\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EСпособ схождения-расхождения скользящих средних — дословный перевод описываемого&nbsp;индикатора тренда.&nbsp;Он также являет собой и осциллятор. Принадлежит к разряду подвальных, располагается под графиком актива и отображает разницу&nbsp;между&nbsp;экспоненциальными&nbsp;скользящими&nbsp;средними&nbsp;меньшего и большего временного промежутка. По умолчанию их периоды равны 12 и 26. Быстрая скользящая отображает краткосрочную тенденцию. Медленная&nbsp;—&nbsp;наоборот, более продолжительную по времени.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EРазличают два вида алгоритмов — линейный и гистограмму.&nbsp;Вторая&nbsp;являет собой разницу между сигнальной линией и индикатором. Вычисляется по формуле&nbsp;MACD Histogram&nbsp;=&nbsp;MACD&nbsp;–&nbsp;Signal.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЕе можно наблюдать под графиком актива в виде столбиков. Гистограмма показывает направление и силу текущей тенденции.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 2\" data-entity-type=\"file\" data-entity-uuid=\"8fd7dcdc-a89c-49c4-b46a-4421c197035b\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%202_7.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЛинейный инструмент выглядит&nbsp;как&nbsp;скользящая&nbsp;средняя&nbsp;с периодом 9. Это линия красного цвета на графике. Именно рынок с широким спектром колебаний даст возможность&nbsp;MACD&nbsp;проявить себя в полной мере. Четко выраженный тренд способствует тому, что от индикатора поступают корректные сигналы.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСигналы, поступающие от индикатора можно интерпретировать по-разному:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EПересечение барами осциллятора нулевого уровня. Когда это происходит сверху вниз — сигнал на продажу. Снизу вверх — на покупку;\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 3\" data-entity-type=\"file\" data-entity-uuid=\"1be0bfa9-292c-4374-9aa7-f69675a0d29c\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%203_5.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EMACD&nbsp;пересекает быструю (сигнальную) линию снизу вверх — момент покупок, пересечение сверху вниз свидетельствует о продаже актива. Тренд определяется по общеизвестным правилам. Это наличие локальных&nbsp;экстремумов;\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 4\" data-entity-type=\"file\" data-entity-uuid=\"19f3ac84-37d0-4f99-a29a-dab4f07b9e0f\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%204_5.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EДивергенция — расхождение показаний инструмента и цены на графике. Возможен разворот тенденции. Это отчетливо видно на рисунке снизу.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 5\" data-entity-type=\"file\" data-entity-uuid=\"9fd8f05d-972b-4f1b-a77a-7a6d316eddaf\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%205_3.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EПосле дивергенции нисходящий тренд пары&nbsp;EURJPY&nbsp;стал восходящим.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EГистограмма инструмента&nbsp;также&nbsp;помогает идентифицировать типичные графические паттерны. В их числе «голова-плечи», «двойная вершина», «двойное дно» и т.д.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПрофессиональные трейдеры&nbsp;оценивают&nbsp;MACD&nbsp;как инструмент, объединяющий в себе элементы оценки импульса и тренда. В то время&nbsp;как&nbsp;скользящие средние обеспечивают контроль тенденции, именно анализ разницы между ними не пропустит момент разворота.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EСтохастический осциллятор\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EСреди&nbsp;лучших индикаторов тренда на Forex&nbsp;смело можно выделить стохастический осциллятор, часто именуемый&nbsp;«стохастиком». Он определяет темп ценового изменения или импульса цены. Инструмент анализирует скорость рынка, определяя положение цен закрытия в диапазоне между максимальным и минимальным значениями. Расчет производится за конкретное число дней.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВыражаясь точнее — «стохастик» в процентах от 0 до 100 показывает соотношение между ценой закрытия и диапазоном&nbsp;между&nbsp;минимумом и&nbsp;максимумом. Выделенные зоны — от 0 до 30 (перепроданность), от 70 до 100 (перекупленность). В зависимости от характера трейдинга их можно изменить.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЛучше всего&nbsp;Stochastic&nbsp;отрабатывает на широких ценовых диапазонах. Его с успехом используют на мягких трендах, имеющих легкий уклон вниз или такой же подъем вверх. Индикатор не дает желаемых результатов при устойчивой тенденции с незначительными коррекционными движениями.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EРазличают два способа функционирования этого индикатора:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EБыстрый. Он более точен, однако его недостатками являются излишняя чувствительность к различным шумам и большое число ложных сигналов;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EМедленный. Более сглаженный. Но и количество подаваемых сигналов меньше, чем в первом варианте.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 6\" data-entity-type=\"file\" data-entity-uuid=\"f2cbe6f6-fd5d-46a4-b0bc-6ccd4275bb7a\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%206_2.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДля корректной настройки «стохастика» существуют два показателя:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003E%К&nbsp;— период,&nbsp;соответствующий работе быстрого&nbsp;Stochastic.&nbsp;Несмотря на то, что&nbsp;по умолчанию изначально выставлено значение 3, все же рекомендуют 13. На графике он отображен в виде сплошной линии синего цвета;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E%D — замедленный период. Сигнальная линия красного цвета выглядит более плавно. Если значения увеличить, будут отфильтрованы ложные сигналы.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EПомимо этих настроек есть дополнительные, изменяемые по желанию трейдера: замедление, цены, метод МА.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 7\" data-entity-type=\"file\" data-entity-uuid=\"4515d85a-9175-41fc-af8a-80c82b638d49\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%207_2.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EStochastic с успехом применим для&nbsp;следующих&nbsp;методик: скальпинг, торговля в ценовом коридоре, трейдинг на пробой и торговля по тренду. Удобный момент для входа в длинную позицию&nbsp;—&nbsp;когда в зоне перепроданности наблюдается пересечение красной линии синей, снизу вверх. Активация короткой позиции осуществляется, когда в диапазоне перекупленности&nbsp;кривая синего цвета пересекает красную сверху вниз.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EИнструмент МА\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EВходит в число популярнейших&nbsp;индикаторов тренда. В трейдерской среде его часто именуют «мувингом».&nbsp;Moving Average&nbsp;— полное наименование инструмента. Один из&nbsp;наиболее&nbsp;часто используемых индикаторов&nbsp;Forex. Является компонентом и дополнением&nbsp;более сложных алгоритмов в том или ином виде.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«Мувинг» предназначен для определения среднего ценового значения за выбранный промежуток времени. Существуют несколько видов&nbsp;Moving Average:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003ESMA — простая скользящая. Алгоритм отображает среднюю цену за выбранный временной промежуток. При установке в&nbsp;MetaTrader&nbsp;значения 10 (настройки инструмента)&nbsp;алгоритм будет высчитывать сумму 10 последних цен закрытия и открытия, которая поделена на количество выбранных периодов;\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 8\" data-entity-type=\"file\" data-entity-uuid=\"e91bcae1-17f3-4739-a7e4-8fdceace2724\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%208.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EЕМА — экспоненциальная скользящая. Была создана для уменьшения задержки SMA. В расчете учитывается тот факт, что новые цены более приоритетны,&nbsp;нежели старые. Достоинство ЕМА заключается не только в сглаживании цены, но и в быстром реагировании на ее изменение. Поэтому индикатором часто пользуются для внутридневного трейдинга;\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 9\" data-entity-type=\"file\" data-entity-uuid=\"c3a4ac4f-1939-449e-ba86-779efe17970b\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%209.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EWMA&nbsp;— взвешенная скользящая. Являясь&nbsp;трендовым индикатором, убирает часть недостатков простой скользящей, делая запаздывания на вход в рынок значительно меньшими. Последним ценовым значениям придается больший вес. Инструмент быстрее,&nbsp;чем его предшественник,&nbsp;реагирует на рыночные изменения.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 10\" data-entity-type=\"file\" data-entity-uuid=\"fd3e995d-8c05-46f9-8557-e4f99f375830\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%2010.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНовички трейдинга должны помнить, что, используя совокупность инструментов прогнозирования, желательно выбрать&nbsp;2-3&nbsp;индикатора для трейдинга. В противном случае их обилие на графике выбранного актива будет вводить в заблуждение начинающего&nbsp;трейдера.\u003C\u002Fp\u003E\r\n",
					"summary": "Для любого трейдера крайне важно правильно определить направление и силу трендового движения. К сожалению, единственное верное решение этой задачи отсутствует. Множество трейдеров торгуют на различных временных интервалах. По этой причине получаемые сигналы воспринимаются субъективно.\r\n\r\nИндикаторы тренда дают возможность классифицировать направление ценового движения, определив его силу. Решение этой проблемы помогает инвесторам вовремя войти в рынок и получить хорошую прибыль."
				},
				"alias": "forex-trend-indicators",
				"author": {
					"name": "Вадим Кальчук, клиент Трейдер"
				},
				"category": {
					"alias": "financial-market-analysis"
				},
				"video": null,
				"publicationDate": {
					"formatted": "2018-12-20T07:05:38",
					"timestamp": 1545289538
				}
			}]
		},
		"articlesTop": {
			"investments": {
				"title": "Интервью с ПАММ-управляющим Sunnich: «Я всегда стремился к автоматизации торговли»",
				"body": {
					"value": "\u003Cp\u003EПредставляем вашему вниманию интервью с ПАММ-управляющим Sunnich. Уже на протяжении нескольких лет он является одним из главных действующих лиц популярного сервиса Трейдер, стабильно занимая место в ТОП-10 рейтинга со своим основным счетом \u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F388087\u002F\"\u003ESunnich Fr\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EЧто побудило вас заинтересоваться трейдингом?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНачал инвестировать на финансовых рынках в далеком 2000 году. Инвестировал в ПИФы компании «Тройка-диалог». Потом была торговля на МосБирже акциями. Времени на это не хватало. Основная работа не позволяла выделять необходимое время. Но тогда мне стало ясно, чем я буду заниматься на «пенсии». В дальнейшем, когда возник вопрос размещения свободных средств, зарабатываемых в бизнесе, куда их вкладывать вопрос не стоял. Стоял вопрос как.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКак вы думаете, трейдинг — это занятие для всех?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТрейдинг \u003Cstrong\u003E— \u003C\u002Fstrong\u003Eэто множество инструментов и стратегий. Я убежден, что каждый может достичь успеха в этом деле. Сложнее справиться с эмоциями при достижении целей. Многие останавливаются за шаг до успеха.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EЕсть ли категория людей, которым вы бы не советовали торговать на валютном рынке?&nbsp; \u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТаких категорий нет. Если кто-то не хочет торговать самостоятельно, то может всегда инвестировать свободные денежные средства, например, через ПАММ-сервис Трейдер.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКакой самый дельный совет, связанный с деньгами, вы слышали?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«Деньги к деньгам». Зачастую люди недооценивают необходимость сбережений.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«Деньги должны работать». Искренне не понимаю людей, хранящих все сбережения «под подушкой».\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКак много времени вы уделяете трейдингу? Вы относитесь к этому как к работе или, скорее, как к хобби?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЭто моя работа. Которая занимает плюс-минус стандартные 8 часов 5 дней в неделю. К счастью, это также хобби. Как говорил Конфуций, найдите работу, в которую влюбитесь, и вам больше не придется трудиться ни одного дня в жизни.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EПродолжите фразу: «Я торгую на \u003C\u002Fstrong\u003E\u003Cstrong\u003EForex, потому что…»\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Col\u003E\r\n\t\u003Cli\u003EМне нравится процесс.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EМне нравится результат.\u003C\u002Fli\u003E\r\n\u003C\u002Fol\u003E\r\n\r\n\u003Cp\u003EДумаю, что именно к сочетанию этих двух факторов должен стремиться любой человек, если он хочет получать удовольствие от жизни.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EМожете ли порекомендовать книги или статьи, которые вас мотивируют?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИз классики, если кто не прочитал, обязательно рекомендую следующие:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003E«Богатый папа, бедный папа» Роберта Кийосаки.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E«Думай и богатей» Наполеона Хилла.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EТакже часто читаю статьи по психологии трейдинга и интервью успешных терйдеров и успешных людей.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EПредставьте, что вам нужно дать мудрый совет трейдерам будущего. Что бы вы им сказали?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДиверсифицируйте риски, инструменты, стратегии.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСоблюдайте мани-менеджмент.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОграничивайте потери \u003Cstrong\u003E—\u003C\u002Fstrong\u003E ставьте (отложенный ордер) Stop Loss. Иначе твой Stop Loss \u003Cstrong\u003E—\u003C\u002Fstrong\u003E это весь депозит.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EЧто на ваш взгляд нужно знать о трейдинге, чтобы торговать эффективно?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДля меня это три кита:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EМани-менеджмент \u003Cstrong\u003E—\u003C\u002Fstrong\u003E это основа трейдинга.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EПсихология \u003Cstrong\u003E—\u003C\u002Fstrong\u003E не каждому удается с ней справиться.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EСтратегия \u003Cstrong\u003E—\u003C\u002Fstrong\u003E нужно найти ту или те стратегии, которые подходят именно тебе.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EЧто бы заработать на рынке деньги нужно сначала научиться их не терять. Стратегий хороших и не очень бесконечно много. При этом любая стратегия может привести к потерям.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКакой анализ важнее для управления вашим ПАММ-ом: технический или фундаментальный?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДля управления большинства счетами использую только технический анализ. При этом за фундаментом слежу регулярно.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EМногие говорят, что \u003C\u002Fstrong\u003E\u003Cstrong\u003EForex\u003C\u002Fstrong\u003E\u003Cstrong\u003E похож на лотерею. Как вам кажется, насколько такое мнение соответствует действительности?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЧасто слышу этот вопрос. Еще чаще с казино сравнивают.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЧто есть выигрыш в лотерее? Это вероятность выигрыша на один билет или ставку, умноженная на средний выигрыш. Обычно по государственным законам призовой фонд должен составлять 50% от сборов. При этом вероятность выигрыша каждого билета стремится к нулю. Таким образом, чтобы «отбить» вложения, необходимо купить бесконечно много лотерей.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЧто есть «выигрыш» в трейдинге? Это вероятность прибыли на одну сделку, умноженная на среднюю прибыль, минус вероятность убытка, умноженная на средний убыток. Вероятность «выигрышей» в трейдинге, особенно в автоторговле может достигать 90%. Плюс можно увеличить эту вероятность за счет диверсификации. Для среднесрочных и ручных стратегий обычно этот показатель ниже, при этом размер потенциальной прибыли в несколько раз превышает убыток.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТаким образом, на результат трейдинга мы можем влиять, а на результат лотереи не можем. Хотя есть у меня знакомые, которые используют трейдинг как игру. Вводят небольшие деньги, торгуют наугад. Для них это лотерея. Итого \u003Cstrong\u003E—\u003C\u002Fstrong\u003E если подходить к терйдингу, как к лотерее или казино, то это будет лотерея.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПри этом в целом с этим утверждением я не согласен. Купили бы вы лотерею, в которой вероятность потери 100 рублей составляет 20%, а вероятность выигрыша 50 рублей 80%? Я бы купил не задумываясь.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EИспользуете ли вы автоматизацию торговли или роботов?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E99.9% объема торгов \u003Cstrong\u003E— \u003C\u002Fstrong\u003Eэто автоматическая торговля. У автоматической торговли есть ряд преимуществ:\u003C\u002Fp\u003E\r\n\r\n\u003Col\u003E\r\n\t\u003Cli\u003EОтсутствие эмоций.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EМасштабируемость.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EВозможность проверки стратегии на истории.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EВозможность торговать на младших таймфреймах.\u003C\u002Fli\u003E\r\n\u003C\u002Fol\u003E\r\n\r\n\u003Cp\u003EК автоторговле я изначально стремился прийти. Хотя путь был непрост и недешев.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EМеняли ли вы подход к рискам (загрузке) своего ПАММ-счета?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПодход к рискам со временем меняется. Если рассматривать счет Sunnich Fr2, то подход к рискам там сильно менялся. Пока рынок позволял и инвесторов было относительно мало, это был суперрискованный счет. В дальнейшем риски понижались и повышались несколько раз, в зависимости от текущей ситуации. При росте депозита в целом риски немного снижаются.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНа разных счетах использую разный мани-менеджмент. Есть счета, на которых риски немного увеличиваются при просадках (позволяет быстрее выйти из них, если стратегия правильная). Есть счета, на которых риски снижаются на просадках (позволяет не «свалиться» в яму в случае изменения рыночной ситуации или ошибках в стратегиях).\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИ еще про мани-менеджмент. Все мои средства разделены между счетами:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eразгонные \u003Cstrong\u003E—\u003C\u002Fstrong\u003E быстро заработать, если повезет,\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eумеренный риск \u003Cstrong\u003E—\u003C\u002Fstrong\u003E обеспечивают основной доход;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eсчета-копилки \u003Cstrong\u003E—\u003C\u002Fstrong\u003E там, где я «храню» средства «резервного фонда» и накопления.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EМожете рассказать (если есть) историю «счастливого спасения»? Например, когда тренд, казалось бы, пошел против вас, но в итоге все закончилось хорошо. Или подобную историю из жизни?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПрямо спасения не помню. Ситуации, когда немного не хватает до Стоп-лоса или до Тейк-профита, случаются регулярно.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЯ пришел к такому выводу. Если вы чем-то рискуете на рынке, то вы это рано либо поздно потеряете. Если вы торгуете мартином (Мартингейл, высоко рисковая торговая система) без стопов, то вы потеряете депозит. «Счастливое» начало в использовании таких стратегий приводит к еще большим потерям. Я такое проходил. Поэтому, если даже и были эти «счастливые спасения», то они могли превратиться в «несчастливые», что и стерло их из памяти. И наоборот, какой-то из таких случаев стал последней точкой в торговле без стопов и «счастливым спасением». Результаты резко стали расти.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСегодня любой «несчастливый» случай не убьет мои капиталы. Мани-менеджмент \u003Cstrong\u003E—\u003C\u002Fstrong\u003E всему голова! Пример из жизни на ум тоже несильно приходит. Но могу сказать, что основное счастливое спасение \u003Cstrong\u003E—\u003C\u002Fstrong\u003E это мое окружение. Моя жена, мои друзья, мои дети, мои партнеры. Например, один из друзей помог, фактически заставил, выкупить филиал, в котором я руководил у своего работодателя. Я могу считать это счастливым спасением от наемного труда.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«Счастливым спасением» можно считать то, что я относительно случайно попал в физико-математическую школу. Сам я родом из провинциального городка, но когда был на региональной олимпиаде, новые друзья позвали за компанию на собеседование. Это «счастливое спасение».\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТакже построенная в свое время карьера. После университета относительно случайно устроился в небольшой филиал большой компании. Когда увольнялся, был директором этого филиала со штатом около 200 человек. И дальнейшие работодатели очень многому меня научили. В общем, вся жизнь \u003Cstrong\u003E— \u003C\u002Fstrong\u003Eчереда «счастливых спасений». Вообще, возможности к нам приходят регулярно. Только кто-то готов и хочет их брать, а кто-то их даже не видит. Уверен, что я многое пропустил.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКак бы вы описали ваш идеальный выходной?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПоездка в лес или в горы с семьей. Очень люблю дальние поездки. Последние выходные провел с друзьями на рыбалке почти за 500 км от дома. При этом сам не рыбак.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EИспользуете ли вы альпы для снижения спреда на вашем ПАММ-счете?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДа.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКогда вы решили заняться торговлей на валютном рынке? Помните, с чем был связан этот интерес?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПередо мной стоял вопрос краткосрочного и долгосрочного размещения свободных средств, заработанных в бизнесе. Планировал вернуться на рынок акций, но подвернулись одни «товарищи», которые предложили часть денег разместить на Forex (это был 2012 год).\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКонечно же, они их благополучно потеряли, т. к. советник использовали типа Мартингейла без стоп-лосов. Потом у меня была травма, которая вынудила меня много времени провести дома. Вот тогда я усилено и начал знакомиться с рынком Forex.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EК определенному моменту я начал зарабатывать достаточно на рынке, плюс, кризисные явления в экономике привели меня к мысли прекратить деятельность в реальном секторе и уйти в финансовый сектор. Удалось очень выгодно продать текущий бизнес и спокойно заняться тем, что нравится больше.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПри этом я всегда стремился к автоматизации торговли. И всегда планировал привлечение инвестиций. Спасибо Трейдер \u003Cstrong\u003E—\u003C\u002Fstrong\u003E дает возможность заниматься в первую очередь торговлей.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EЕсли бы вы завтра начинали свой бизнес, что бы это было?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВот именно этим бы и занялся. Для диверсификации это рентный бизнес.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКакую часть вашего времени приходится уделять торговле на ПАММ-счетах?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЕсли рассматривать отдельно каждый ПАММ счет, то времени они занимают немного. Плюс я работаю не один, с партнерами. В целом работа состоит из нескольких блоков.\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EНастройка и поддержание счетов.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EКонтроль работоспособности.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EПоиск новых продуктов (покупка и разработка).\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EТестирование и оптимизация.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EСбор и анализ статистических данных и принятие решений об изменениях.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EНа реальных счетах для сбора данных используется несколько сотен настроек различных советников. Анализ этих данных и занимает основное время.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЭтапы управления ПАММ-счетами следующие:\u003C\u002Fp\u003E\r\n\r\n\u003Col\u003E\r\n\t\u003Cli\u003Eвыбор стратегии (стратегий);\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eнастройка советников и мани-менеджмента;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eмониторинг отклонений;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eпериодический анализ;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eизменения на основании результатов пп. 3-4.\u003C\u002Fli\u003E\r\n\u003C\u002Fol\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EЕсть ли у вас постоянная работа, помимо торговли на ПАММ-счетах?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПомимо трейдинга и различных проектов в этой области другой работы нет.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EРасскажите подробнее о линейке своих ПАММ-счетов.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ торговле я использую достаточно много роботов с различными стратегиями. При этом можно выделить основные:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003E«Ночники». Ночные и вечерние стратегии.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E«Импульсники».\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E«КонтрТренд».\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EПрочие стратегии.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EОснову торговли сегодня составляют «Ночники». К сожалению, в последнее время идет большая раскорреляция между тестами и фактической торговлей у данных стратегий на ПАММ-счетах, в настоящее время снижены риски по большинству счетов. Если ситуацию не удастся исправить, то частично данные стратегии будут ликвидированы.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«Импульсники» также переживают не лучшие времена. Обновили исторические просадки. Я не считаю в данном случае, что стратегия «умерла», но риски по ней в целом также буду сокращать и добавлять другие стратегии \u003Cstrong\u003E—\u003C\u002Fstrong\u003E составлен портфель из дневных стратегий.\u003C\u002Fp\u003E\r\n\u003Cimg alt=\"Impulse-strategy\" data-align=\"center\" data-entity-type=\"file\" data-entity-uuid=\"cfc57da7-acf7-4e90-b6a3-ef64a74697f3\" height=\"358\" src=\"\u002Fstorage\u002Finline-images\u002FSunnich1.jpg\" width=\"1071\" \u002F\u003E\r\n\u003Cp\u003E«КонтрТренд». Стратегия относительно новая. Впервые была использована на счете \u003Ca href=\"https:\u002F\u002FTrader.com\u002Fru\u002Finvest\u002Fpamm\u002F472639\u002F\"\u003ESunnich GreenWave\u003C\u002Fa\u003E. Стратегия содержит сетку. При этом Stop Loss используется обязательно. Состоит из нескольких независимых сеток. Стратегия использует преимущества сеточных стратегий, при этом не допускает полной потери депозита, т. к. использует Stop Loss. Тест самой неудачной из них выглядит так (фиксированный лот):&nbsp;&nbsp;\u003C\u002Fp\u003E\r\n\u003Cimg alt=\"contr-trend-strategy\" data-align=\"center\" data-entity-type=\"file\" data-entity-uuid=\"a5c57b5c-ad9d-4041-89de-5b110089d07b\" height=\"263\" src=\"\u002Fstorage\u002Finline-images\u002FSunnich2.jpg\" width=\"1043\" \u002F\u003E\r\n\u003Cp\u003EВ целом набор стратегий на текущий момент (09.2020) можно представить в таком виде.\u003C\u002Fp\u003E\r\n\r\n\u003Ctable\u003E\r\n\t\u003Ctbody\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Cstrong\u003E&nbsp;\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Cstrong\u003EНочники\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Cstrong\u003EИмпульс\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Cstrong\u003EКонтрТренд\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Cstrong\u003EПрочие\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F388087\u002F\"\u003ESunnich Fr2\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 1\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F470271\u002F\"\u003ESunnich GoodNight\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 4\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F467754\u002F\"\u003ESunnich GoodNight RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 4\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F415507\u002F\"\u003ESunnich GR2-2\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F389368\u002F\"\u003ESunnich GR4\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 3\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F443259\u002F\"\u003ESunnich GR4 RUR\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 3\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F472639\u002F\"\u003ESunnich GreenWave\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F455803\u002F\"\u003ESunnich ImpulseDay\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F465861\u002F\"\u003ESunnich ImpulseDayRu\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F472998\u002F\"\u003ESunnich LevelUp.\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F350356\u002F\"\u003ESunnich M eur gbp RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 1\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F345728\u002F\"\u003ESunnich M RUR\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F369651\u002F\"\u003ESunnich M2 v2\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F452955\u002F\"\u003ESunnich NightFury\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 5\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F423966\u002F\"\u003ESunnich NightFury RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 5\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F445889\u002F\"\u003ESunnich NLight USD\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 2\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F458280\u002F\"\u003ESunnich NLight-r RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 2\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F400962\u002F\"\u003ESunnich NR v.2-1\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 2\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F464663\u002F\"\u003ESunnich NR v.7\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F418531\u002F\"\u003ESunnich NR v.8-1\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 2\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F473299\u002F\"\u003ESunnich Prime2.\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 1\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"https:\u002F\u002FTrader.com\u002Fru\u002Finvest\u002Fpamm\u002F470937\u002F\"\u003ESunnich RedLine.\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n\r\n\u003Cp\u003EВ описании к ПАММ-счету клиент может посмотреть общий уровень риска по моим счетам.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОтдельно остановлюсь на некоторых счетах:\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F388087\u002F\"\u003ESunnich Fr2\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИспользуется две стратегии (до августа 2020 г. использовалась только одна). Уровень риска \u003Cstrong\u003E—\u003C\u002Fstrong\u003E NormalRisk, ближе к LowRisk. Подходит для долгосрочных инвестиций. Ожидаемая доходность: 70-150% в год.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«Ночники». Набор 1. Самый широкий набор из независимых сетов, который отличается высокой устойчивостью и запасом «прочности». В настоящее время риск на сделку составляет 0.5%, всего 30 сетов. Риск может быть изменен в зависимости от исполнения ордеров и рыночной ситуации, как в меньшую, так и в большую сторону.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«КонтрТренд». Стратегия отличается повышенной стабильностью. Риск на сетку составляет примерно 5%. Количество стопов за год по тестам 1-4. Ближайший аналог с более высоким риском в рублевом варианте: \u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F350356\u002F\"\u003ESunnich M eur gbp RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F472639\u002F\"\u003ESunnich GreenWave\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«КонтрТренд». Агрессивный вариант. Риск высокий. По мере роста депозита риск будет снижаться. Использование данного типа стратегий в целом будет расширяться на моих счетах.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F473299\u002F\"\u003ESunnich Prime2.\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСамый широкий набор стратегий. Также на данном счете осуществляется ручная торговля. Среднесрочные и долгосрочные сделки. Счет можно назвать экспериментальным, т. к. он может содержать все недостатки ручных стратегий.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВсе текущие ПАММы считаю достойными для инвестиций. На текущий момент список моих фаворитов выглядит следующим образом:\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F388087\u002F\"\u003ESunnich Fr2\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F472639\u002F\"\u003ESunnich GreenWave\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F464663\u002F\"\u003ESunnich NR v.7\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F350356\u002F\"\u003ESunnich M eur gbp RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F452955\u002F\"\u003ESunnich NightFury\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F470271\u002F\"\u003ESunnich GoodNight\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ относительно недалеком будущем в планах открыть счет-копилку в виде ПАММ-счета. Сейчас идет подбор параметров. Счет с низкими просадками, относительно гладкой кривой и относительно невысокой доходностью 30-50% в год.\u003C\u002Fp\u003E\r\n",
					"summary": "Представляем вашему вниманию интервью с ПАММ-управляющим Sunnich. Уже на протяжении нескольких лет он является одним из главных действующих лиц популярного сервиса Трейдер, стабильно занимая место в ТОП-10 рейтинга со своим основным счетом Sunnich Fr. "
				},
				"alias": "sunnich-interview",
				"author": {
					"name": "Трейдер"
				},
				"category": {
					"alias": "investments"
				},
				"video": null,
				"publicationDate": {
					"formatted": "2020-09-18T08:09:23",
					"timestamp": 1600416563
				}
			}
		},
		"categories": {
			"trading-strategies": {
				"name": "Торговые стратегии",
				"image": {
					"alt": "",
					"urls": {
						"mobile": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002FTrading_strategies_mobile.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002FTrading_strategies_mobile.jpg"
						},
						"tablet": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002FTrading_strategies_tablet.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002FTrading_strategies_tablet.jpg"
						},
						"desktop": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002FTrading_strategies_desktop.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002FTrading_strategies_desktop.jpg"
						}
					}
				},
				"alias": "trading-strategies",
				"color": "#ff9b25"
			},
			"cryptocurrencies": {
				"name": "Криптовалюты",
				"image": {
					"alt": "",
					"urls": {
						"mobile": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002FCryptocurrencies_mobile.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002FCryptocurrencies_mobile.jpg"
						},
						"tablet": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002FCryptocurrencies_tablet.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002FCryptocurrencies_tablet.jpg"
						},
						"desktop": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002FCryptocurrencies_desktop.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002FCryptocurrencies_desktop.jpg"
						}
					}
				},
				"alias": "cryptocurrencies",
				"color": "#bfe52e"
			},
			"investments": {
				"name": "Инвестиции",
				"image": {
					"alt": "",
					"urls": {
						"mobile": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002Finvest_mobile.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002Finvest_mobile.jpg"
						},
						"tablet": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002Finvest_tablet.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002Finvest_tablet.jpg"
						},
						"desktop": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002Finvest_desktop.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002Finvest_desktop.jpg"
						}
					}
				},
				"alias": "investments",
				"color": "#1aaf20"
			},
			"trader-psychology": {
				"name": "Психология трейдера",
				"image": {
					"alt": "",
					"urls": {
						"mobile": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002Fpsychology_mobile.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002Fpsychology_mobile.jpg"
						},
						"tablet": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002Fpsychology_tablet.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002Fpsychology_tablet.jpg"
						},
						"desktop": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002Fpsychology_desktop.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002Fpsychology_desktop.jpg"
						}
					}
				},
				"alias": "trader-psychology",
				"color": "#966cff"
			},
			"financial-market-analysis": {
				"name": "Анализ финансовых рынков",
				"image": {
					"alt": "",
					"urls": {
						"mobile": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002Fmarket_analysis_mobile.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002Fmarket_analysis_mobile.jpg"
						},
						"tablet": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002Fmarket_analysis_tablet.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002Fmarket_analysis_tablet.jpg"
						},
						"desktop": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002Fmarket_analysis_desktop.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002Fmarket_analysis_desktop.jpg"
						}
					}
				},
				"alias": "financial-market-analysis",
				"color": "#ffd92f"
			},
			"other": {
				"name": "Разное",
				"image": {
					"alt": "",
					"urls": {
						"mobile": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002Fother_mobile.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002Fother_mobile.jpg"
						},
						"tablet": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002Fother_tablet.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002Fother_tablet.jpg"
						},
						"desktop": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2018-12\u002Fother_desktop.jpg",
							"retina": "\u002Fstorage\u002F2018-12\u002Fother_desktop.jpg"
						}
					}
				},
				"alias": "other",
				"color": "#ffb7b7"
			}
		},
		"categoriesInfo": {},
		"pagination": {},
		"lastArticles": [{
			"title": "Интервью с ПАММ-управляющим Sunnich: «Я всегда стремился к автоматизации торговли»",
			"body": {
				"value": "\u003Cp\u003EПредставляем вашему вниманию интервью с ПАММ-управляющим Sunnich. Уже на протяжении нескольких лет он является одним из главных действующих лиц популярного сервиса Трейдер, стабильно занимая место в ТОП-10 рейтинга со своим основным счетом \u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F388087\u002F\"\u003ESunnich Fr\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EЧто побудило вас заинтересоваться трейдингом?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНачал инвестировать на финансовых рынках в далеком 2000 году. Инвестировал в ПИФы компании «Тройка-диалог». Потом была торговля на МосБирже акциями. Времени на это не хватало. Основная работа не позволяла выделять необходимое время. Но тогда мне стало ясно, чем я буду заниматься на «пенсии». В дальнейшем, когда возник вопрос размещения свободных средств, зарабатываемых в бизнесе, куда их вкладывать вопрос не стоял. Стоял вопрос как.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКак вы думаете, трейдинг — это занятие для всех?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТрейдинг \u003Cstrong\u003E— \u003C\u002Fstrong\u003Eэто множество инструментов и стратегий. Я убежден, что каждый может достичь успеха в этом деле. Сложнее справиться с эмоциями при достижении целей. Многие останавливаются за шаг до успеха.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EЕсть ли категория людей, которым вы бы не советовали торговать на валютном рынке?&nbsp; \u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТаких категорий нет. Если кто-то не хочет торговать самостоятельно, то может всегда инвестировать свободные денежные средства, например, через ПАММ-сервис Трейдер.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКакой самый дельный совет, связанный с деньгами, вы слышали?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«Деньги к деньгам». Зачастую люди недооценивают необходимость сбережений.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«Деньги должны работать». Искренне не понимаю людей, хранящих все сбережения «под подушкой».\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКак много времени вы уделяете трейдингу? Вы относитесь к этому как к работе или, скорее, как к хобби?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЭто моя работа. Которая занимает плюс-минус стандартные 8 часов 5 дней в неделю. К счастью, это также хобби. Как говорил Конфуций, найдите работу, в которую влюбитесь, и вам больше не придется трудиться ни одного дня в жизни.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EПродолжите фразу: «Я торгую на \u003C\u002Fstrong\u003E\u003Cstrong\u003EForex, потому что…»\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Col\u003E\r\n\t\u003Cli\u003EМне нравится процесс.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EМне нравится результат.\u003C\u002Fli\u003E\r\n\u003C\u002Fol\u003E\r\n\r\n\u003Cp\u003EДумаю, что именно к сочетанию этих двух факторов должен стремиться любой человек, если он хочет получать удовольствие от жизни.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EМожете ли порекомендовать книги или статьи, которые вас мотивируют?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИз классики, если кто не прочитал, обязательно рекомендую следующие:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003E«Богатый папа, бедный папа» Роберта Кийосаки.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E«Думай и богатей» Наполеона Хилла.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EТакже часто читаю статьи по психологии трейдинга и интервью успешных терйдеров и успешных людей.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EПредставьте, что вам нужно дать мудрый совет трейдерам будущего. Что бы вы им сказали?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДиверсифицируйте риски, инструменты, стратегии.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСоблюдайте мани-менеджмент.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОграничивайте потери \u003Cstrong\u003E—\u003C\u002Fstrong\u003E ставьте (отложенный ордер) Stop Loss. Иначе твой Stop Loss \u003Cstrong\u003E—\u003C\u002Fstrong\u003E это весь депозит.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EЧто на ваш взгляд нужно знать о трейдинге, чтобы торговать эффективно?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДля меня это три кита:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EМани-менеджмент \u003Cstrong\u003E—\u003C\u002Fstrong\u003E это основа трейдинга.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EПсихология \u003Cstrong\u003E—\u003C\u002Fstrong\u003E не каждому удается с ней справиться.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EСтратегия \u003Cstrong\u003E—\u003C\u002Fstrong\u003E нужно найти ту или те стратегии, которые подходят именно тебе.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EЧто бы заработать на рынке деньги нужно сначала научиться их не терять. Стратегий хороших и не очень бесконечно много. При этом любая стратегия может привести к потерям.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКакой анализ важнее для управления вашим ПАММ-ом: технический или фундаментальный?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДля управления большинства счетами использую только технический анализ. При этом за фундаментом слежу регулярно.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EМногие говорят, что \u003C\u002Fstrong\u003E\u003Cstrong\u003EForex\u003C\u002Fstrong\u003E\u003Cstrong\u003E похож на лотерею. Как вам кажется, насколько такое мнение соответствует действительности?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЧасто слышу этот вопрос. Еще чаще с казино сравнивают.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЧто есть выигрыш в лотерее? Это вероятность выигрыша на один билет или ставку, умноженная на средний выигрыш. Обычно по государственным законам призовой фонд должен составлять 50% от сборов. При этом вероятность выигрыша каждого билета стремится к нулю. Таким образом, чтобы «отбить» вложения, необходимо купить бесконечно много лотерей.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЧто есть «выигрыш» в трейдинге? Это вероятность прибыли на одну сделку, умноженная на среднюю прибыль, минус вероятность убытка, умноженная на средний убыток. Вероятность «выигрышей» в трейдинге, особенно в автоторговле может достигать 90%. Плюс можно увеличить эту вероятность за счет диверсификации. Для среднесрочных и ручных стратегий обычно этот показатель ниже, при этом размер потенциальной прибыли в несколько раз превышает убыток.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТаким образом, на результат трейдинга мы можем влиять, а на результат лотереи не можем. Хотя есть у меня знакомые, которые используют трейдинг как игру. Вводят небольшие деньги, торгуют наугад. Для них это лотерея. Итого \u003Cstrong\u003E—\u003C\u002Fstrong\u003E если подходить к терйдингу, как к лотерее или казино, то это будет лотерея.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПри этом в целом с этим утверждением я не согласен. Купили бы вы лотерею, в которой вероятность потери 100 рублей составляет 20%, а вероятность выигрыша 50 рублей 80%? Я бы купил не задумываясь.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EИспользуете ли вы автоматизацию торговли или роботов?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E99.9% объема торгов \u003Cstrong\u003E— \u003C\u002Fstrong\u003Eэто автоматическая торговля. У автоматической торговли есть ряд преимуществ:\u003C\u002Fp\u003E\r\n\r\n\u003Col\u003E\r\n\t\u003Cli\u003EОтсутствие эмоций.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EМасштабируемость.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EВозможность проверки стратегии на истории.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EВозможность торговать на младших таймфреймах.\u003C\u002Fli\u003E\r\n\u003C\u002Fol\u003E\r\n\r\n\u003Cp\u003EК автоторговле я изначально стремился прийти. Хотя путь был непрост и недешев.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EМеняли ли вы подход к рискам (загрузке) своего ПАММ-счета?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПодход к рискам со временем меняется. Если рассматривать счет Sunnich Fr2, то подход к рискам там сильно менялся. Пока рынок позволял и инвесторов было относительно мало, это был суперрискованный счет. В дальнейшем риски понижались и повышались несколько раз, в зависимости от текущей ситуации. При росте депозита в целом риски немного снижаются.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНа разных счетах использую разный мани-менеджмент. Есть счета, на которых риски немного увеличиваются при просадках (позволяет быстрее выйти из них, если стратегия правильная). Есть счета, на которых риски снижаются на просадках (позволяет не «свалиться» в яму в случае изменения рыночной ситуации или ошибках в стратегиях).\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИ еще про мани-менеджмент. Все мои средства разделены между счетами:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eразгонные \u003Cstrong\u003E—\u003C\u002Fstrong\u003E быстро заработать, если повезет,\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eумеренный риск \u003Cstrong\u003E—\u003C\u002Fstrong\u003E обеспечивают основной доход;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eсчета-копилки \u003Cstrong\u003E—\u003C\u002Fstrong\u003E там, где я «храню» средства «резервного фонда» и накопления.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EМожете рассказать (если есть) историю «счастливого спасения»? Например, когда тренд, казалось бы, пошел против вас, но в итоге все закончилось хорошо. Или подобную историю из жизни?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПрямо спасения не помню. Ситуации, когда немного не хватает до Стоп-лоса или до Тейк-профита, случаются регулярно.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЯ пришел к такому выводу. Если вы чем-то рискуете на рынке, то вы это рано либо поздно потеряете. Если вы торгуете мартином (Мартингейл, высоко рисковая торговая система) без стопов, то вы потеряете депозит. «Счастливое» начало в использовании таких стратегий приводит к еще большим потерям. Я такое проходил. Поэтому, если даже и были эти «счастливые спасения», то они могли превратиться в «несчастливые», что и стерло их из памяти. И наоборот, какой-то из таких случаев стал последней точкой в торговле без стопов и «счастливым спасением». Результаты резко стали расти.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСегодня любой «несчастливый» случай не убьет мои капиталы. Мани-менеджмент \u003Cstrong\u003E—\u003C\u002Fstrong\u003E всему голова! Пример из жизни на ум тоже несильно приходит. Но могу сказать, что основное счастливое спасение \u003Cstrong\u003E—\u003C\u002Fstrong\u003E это мое окружение. Моя жена, мои друзья, мои дети, мои партнеры. Например, один из друзей помог, фактически заставил, выкупить филиал, в котором я руководил у своего работодателя. Я могу считать это счастливым спасением от наемного труда.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«Счастливым спасением» можно считать то, что я относительно случайно попал в физико-математическую школу. Сам я родом из провинциального городка, но когда был на региональной олимпиаде, новые друзья позвали за компанию на собеседование. Это «счастливое спасение».\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТакже построенная в свое время карьера. После университета относительно случайно устроился в небольшой филиал большой компании. Когда увольнялся, был директором этого филиала со штатом около 200 человек. И дальнейшие работодатели очень многому меня научили. В общем, вся жизнь \u003Cstrong\u003E— \u003C\u002Fstrong\u003Eчереда «счастливых спасений». Вообще, возможности к нам приходят регулярно. Только кто-то готов и хочет их брать, а кто-то их даже не видит. Уверен, что я многое пропустил.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКак бы вы описали ваш идеальный выходной?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПоездка в лес или в горы с семьей. Очень люблю дальние поездки. Последние выходные провел с друзьями на рыбалке почти за 500 км от дома. При этом сам не рыбак.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EИспользуете ли вы альпы для снижения спреда на вашем ПАММ-счете?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДа.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКогда вы решили заняться торговлей на валютном рынке? Помните, с чем был связан этот интерес?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПередо мной стоял вопрос краткосрочного и долгосрочного размещения свободных средств, заработанных в бизнесе. Планировал вернуться на рынок акций, но подвернулись одни «товарищи», которые предложили часть денег разместить на Forex (это был 2012 год).\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКонечно же, они их благополучно потеряли, т. к. советник использовали типа Мартингейла без стоп-лосов. Потом у меня была травма, которая вынудила меня много времени провести дома. Вот тогда я усилено и начал знакомиться с рынком Forex.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EК определенному моменту я начал зарабатывать достаточно на рынке, плюс, кризисные явления в экономике привели меня к мысли прекратить деятельность в реальном секторе и уйти в финансовый сектор. Удалось очень выгодно продать текущий бизнес и спокойно заняться тем, что нравится больше.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПри этом я всегда стремился к автоматизации торговли. И всегда планировал привлечение инвестиций. Спасибо Трейдер \u003Cstrong\u003E—\u003C\u002Fstrong\u003E дает возможность заниматься в первую очередь торговлей.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EЕсли бы вы завтра начинали свой бизнес, что бы это было?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВот именно этим бы и занялся. Для диверсификации это рентный бизнес.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EКакую часть вашего времени приходится уделять торговле на ПАММ-счетах?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЕсли рассматривать отдельно каждый ПАММ счет, то времени они занимают немного. Плюс я работаю не один, с партнерами. В целом работа состоит из нескольких блоков.\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EНастройка и поддержание счетов.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EКонтроль работоспособности.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EПоиск новых продуктов (покупка и разработка).\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EТестирование и оптимизация.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EСбор и анализ статистических данных и принятие решений об изменениях.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EНа реальных счетах для сбора данных используется несколько сотен настроек различных советников. Анализ этих данных и занимает основное время.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЭтапы управления ПАММ-счетами следующие:\u003C\u002Fp\u003E\r\n\r\n\u003Col\u003E\r\n\t\u003Cli\u003Eвыбор стратегии (стратегий);\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eнастройка советников и мани-менеджмента;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eмониторинг отклонений;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eпериодический анализ;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eизменения на основании результатов пп. 3-4.\u003C\u002Fli\u003E\r\n\u003C\u002Fol\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EЕсть ли у вас постоянная работа, помимо торговли на ПАММ-счетах?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПомимо трейдинга и различных проектов в этой области другой работы нет.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cstrong\u003EРасскажите подробнее о линейке своих ПАММ-счетов.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ торговле я использую достаточно много роботов с различными стратегиями. При этом можно выделить основные:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003E«Ночники». Ночные и вечерние стратегии.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E«Импульсники».\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E«КонтрТренд».\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EПрочие стратегии.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EОснову торговли сегодня составляют «Ночники». К сожалению, в последнее время идет большая раскорреляция между тестами и фактической торговлей у данных стратегий на ПАММ-счетах, в настоящее время снижены риски по большинству счетов. Если ситуацию не удастся исправить, то частично данные стратегии будут ликвидированы.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«Импульсники» также переживают не лучшие времена. Обновили исторические просадки. Я не считаю в данном случае, что стратегия «умерла», но риски по ней в целом также буду сокращать и добавлять другие стратегии \u003Cstrong\u003E—\u003C\u002Fstrong\u003E составлен портфель из дневных стратегий.\u003C\u002Fp\u003E\r\n\u003Cimg alt=\"Impulse-strategy\" data-align=\"center\" data-entity-type=\"file\" data-entity-uuid=\"cfc57da7-acf7-4e90-b6a3-ef64a74697f3\" height=\"358\" src=\"\u002Fstorage\u002Finline-images\u002FSunnich1.jpg\" width=\"1071\" \u002F\u003E\r\n\u003Cp\u003E«КонтрТренд». Стратегия относительно новая. Впервые была использована на счете \u003Ca href=\"https:\u002F\u002FTrader.com\u002Fru\u002Finvest\u002Fpamm\u002F472639\u002F\"\u003ESunnich GreenWave\u003C\u002Fa\u003E. Стратегия содержит сетку. При этом Stop Loss используется обязательно. Состоит из нескольких независимых сеток. Стратегия использует преимущества сеточных стратегий, при этом не допускает полной потери депозита, т. к. использует Stop Loss. Тест самой неудачной из них выглядит так (фиксированный лот):&nbsp;&nbsp;\u003C\u002Fp\u003E\r\n\u003Cimg alt=\"contr-trend-strategy\" data-align=\"center\" data-entity-type=\"file\" data-entity-uuid=\"a5c57b5c-ad9d-4041-89de-5b110089d07b\" height=\"263\" src=\"\u002Fstorage\u002Finline-images\u002FSunnich2.jpg\" width=\"1043\" \u002F\u003E\r\n\u003Cp\u003EВ целом набор стратегий на текущий момент (09.2020) можно представить в таком виде.\u003C\u002Fp\u003E\r\n\r\n\u003Ctable\u003E\r\n\t\u003Ctbody\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Cstrong\u003E&nbsp;\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Cstrong\u003EНочники\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Cstrong\u003EИмпульс\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Cstrong\u003EКонтрТренд\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Cstrong\u003EПрочие\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F388087\u002F\"\u003ESunnich Fr2\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 1\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F470271\u002F\"\u003ESunnich GoodNight\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 4\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F467754\u002F\"\u003ESunnich GoodNight RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 4\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F415507\u002F\"\u003ESunnich GR2-2\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F389368\u002F\"\u003ESunnich GR4\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 3\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F443259\u002F\"\u003ESunnich GR4 RUR\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 3\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F472639\u002F\"\u003ESunnich GreenWave\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F455803\u002F\"\u003ESunnich ImpulseDay\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F465861\u002F\"\u003ESunnich ImpulseDayRu\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F472998\u002F\"\u003ESunnich LevelUp.\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F350356\u002F\"\u003ESunnich M eur gbp RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 1\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F345728\u002F\"\u003ESunnich M RUR\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F369651\u002F\"\u003ESunnich M2 v2\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F452955\u002F\"\u003ESunnich NightFury\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 5\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F423966\u002F\"\u003ESunnich NightFury RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 5\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F445889\u002F\"\u003ESunnich NLight USD\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 2\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F458280\u002F\"\u003ESunnich NLight-r RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 2\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F400962\u002F\"\u003ESunnich NR v.2-1\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 2\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F464663\u002F\"\u003ESunnich NR v.7\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F418531\u002F\"\u003ESunnich NR v.8-1\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 2\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F473299\u002F\"\u003ESunnich Prime2.\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003EНабор 1\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\t\u003Ctr\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E\u003Ca href=\"https:\u002F\u002FTrader.com\u002Fru\u002Finvest\u002Fpamm\u002F470937\u002F\"\u003ESunnich RedLine.\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\t\u003Ctd\u003E\r\n\t\t\t\u003Cp\u003Eда\u003C\u002Fp\u003E\r\n\t\t\t\u003C\u002Ftd\u003E\r\n\t\t\u003C\u002Ftr\u003E\r\n\t\u003C\u002Ftbody\u003E\r\n\u003C\u002Ftable\u003E\r\n\r\n\u003Cp\u003EВ описании к ПАММ-счету клиент может посмотреть общий уровень риска по моим счетам.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОтдельно остановлюсь на некоторых счетах:\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F388087\u002F\"\u003ESunnich Fr2\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИспользуется две стратегии (до августа 2020 г. использовалась только одна). Уровень риска \u003Cstrong\u003E—\u003C\u002Fstrong\u003E NormalRisk, ближе к LowRisk. Подходит для долгосрочных инвестиций. Ожидаемая доходность: 70-150% в год.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«Ночники». Набор 1. Самый широкий набор из независимых сетов, который отличается высокой устойчивостью и запасом «прочности». В настоящее время риск на сделку составляет 0.5%, всего 30 сетов. Риск может быть изменен в зависимости от исполнения ордеров и рыночной ситуации, как в меньшую, так и в большую сторону.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«КонтрТренд». Стратегия отличается повышенной стабильностью. Риск на сетку составляет примерно 5%. Количество стопов за год по тестам 1-4. Ближайший аналог с более высоким риском в рублевом варианте: \u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F350356\u002F\"\u003ESunnich M eur gbp RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F472639\u002F\"\u003ESunnich GreenWave\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«КонтрТренд». Агрессивный вариант. Риск высокий. По мере роста депозита риск будет снижаться. Использование данного типа стратегий в целом будет расширяться на моих счетах.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F473299\u002F\"\u003ESunnich Prime2.\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСамый широкий набор стратегий. Также на данном счете осуществляется ручная торговля. Среднесрочные и долгосрочные сделки. Счет можно назвать экспериментальным, т. к. он может содержать все недостатки ручных стратегий.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВсе текущие ПАММы считаю достойными для инвестиций. На текущий момент список моих фаворитов выглядит следующим образом:\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F388087\u002F\"\u003ESunnich Fr2\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F472639\u002F\"\u003ESunnich GreenWave\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F464663\u002F\"\u003ESunnich NR v.7\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F350356\u002F\"\u003ESunnich M eur gbp RU\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F452955\u002F\"\u003ESunnich NightFury\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Ca href=\"\u002Fru\u002Finvest\u002Fpamm\u002F470271\u002F\"\u003ESunnich GoodNight\u003C\u002Fa\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ относительно недалеком будущем в планах открыть счет-копилку в виде ПАММ-счета. Сейчас идет подбор параметров. Счет с низкими просадками, относительно гладкой кривой и относительно невысокой доходностью 30-50% в год.\u003C\u002Fp\u003E\r\n",
				"summary": "Представляем вашему вниманию интервью с ПАММ-управляющим Sunnich. Уже на протяжении нескольких лет он является одним из главных действующих лиц популярного сервиса Трейдер, стабильно занимая место в ТОП-10 рейтинга со своим основным счетом Sunnich Fr. "
			},
			"alias": "sunnich-interview",
			"author": {
				"name": "Трейдер"
			},
			"category": {
				"alias": "investments"
			},
			"video": null,
			"publicationDate": {
				"formatted": "2020-09-18T08:09:23",
				"timestamp": 1600416563
			}
		}, {
			"title": "Анализ японских свечей. Свечной анализ графиков",
			"body": {
				"value": "\u003Cp\u003EНаиболее удобным вариантом графика любого актива на Forex являются японские свечи. Информативность и наглядность представленных ими данных о состоянии рынка уже давно заслужили популярность у всех трейдеров. Именно анализ японских свечей дает возможность составления прогнозов дальнейшего ценового движения.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЭтот инструмент технического анализа помогает трейдеру увидеть и понять настроение и психологию рынка.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EЧто собой представляют японские свечи\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EПравильно читать графики активов, корректно определять уровни поддержки и сопротивления любому трейдеру помогает технический анализ свечей. Они сочетают в себе вид ценовой линии c разновидностью интервального графика. На графике прекрасно отображены колебания котировок всех активов за определенный временной промежуток.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДля более полного понимания инструмента следует подробнее рассмотреть его составляющие:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eтело, представляющее собой прямоугольник;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eтень — линию, отходящую от тела.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EЭти два компонента внешне напоминают свечу. Каждый из них отображает изменение цены за определенный временной интервал. Свечной анализ графиков отлично помогает в составлении рыночных прогнозов. Причем в данном случае прекрасно обходятся и без компьютерных индикаторов. Можно также предвидеть и реакцию участников торгов на определенные события.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 1\" data-entity-type=\"file\" data-entity-uuid=\"c638d1f7-9527-4b63-98a8-b7045d355c35\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%201_11.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСущественным преимуществом такого графика является то, что свеча представляет собой эквивалент нескольких показателей: время открытия и закрытия, информацию о преобладании на рынке продавцов или покупателей. Каждый свечной элемент соответствует таймфрейму, на котором он отображен. На временном интервале М1 одна свеча отображает ценовое изменение за одну минуту, на 5М — за 5 минут, на 15М — за 15 минут и т.д.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПомимо этого свечные элементы отображают на экране торгового терминала различные графические фигуры, использующиеся трейдерами для открытия (закрытия) ордеров на покупку или продажу. Поэтому график из японских свечей значительно упрощает комплексное исследование любого рынка. Вовремя определяя тот или иной паттерн, трейдер имеет возможность подготовить торговый план и, действуя согласно его пунктам, входить в сделки, получая прибыль.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EИнформация от японских свечей на графике\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EКак читать японские свечи на графике? Данный вопрос неизменно задают начинающие трейдеры.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИнформация, представляемая свечами на всех временных промежутках, аналогична:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eкотировка открытия за период времени (Open);\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eкотировка закрытия за этот же период времени (Close);\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eценовой минимум за период (Low);\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eмаксимум цены за период (High).\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 2\" data-entity-type=\"file\" data-entity-uuid=\"0ad06671-acc6-48f9-bd19-3e3ce92088c3\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%202_11.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИз рисунка видно, что котировки открытия и закрытия являются обрамлением свечного элемента. Его принято называть телом. Тонкие нити, идущие от тела вверх и вниз, являются тенью, которую иногда называют фитилем.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПринято различать бычий (возрастающий) и медвежий (понижающийся) варианты свечи. В первом случае ее формирование происходит снизу вверх. В качестве нижней границы здесь выступает цена открытия, а цена закрытия является границей верхней. Обычно на графике терминала МТ4 такие свечки бесцветны или окрашены в зеленый цвет. Медвежья свеча — полная противоположность бычьей. Формируется сверху вниз, окрашена красным или черным цветом. Цена открытия — ее верхняя граница, цена закрытия — нижняя.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ отдельных случаях тело японской свечи отсутствует. Происходит это, когда цена открытия равна цене закрытия. Иногда в свечном элементе наблюдается отсутствие фитилей. Здесь все параметры: котировки открытия, котировки закрытия, минимум и максимум равны между собой.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EЧтение японских свечей\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЯпонские свечи, как их правильно читать? Исследование таких графиков сводится к выявлению графических паттернов в виде комбинаций свечных элементов. Подобных моделей, представленных несколькими элементами, довольно много и каждая из них носит определенное название: «молот», «повешенный», «падающая звезда», «доджи», «надгробие», «харами» и другие.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 3\" data-entity-type=\"file\" data-entity-uuid=\"6eb7456d-207b-4ab0-bce5-234db26ad3bd\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%203_8.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЛюбой их этих паттернов сигнализирует о моментах входа в рынок. Существуют модели продолжения тренда и модели разворота тенденции. Последние представляют собой подавляющее большинство.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПри анализе японских свечей в трейдинге следует учитывать важные особенности:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eвсе исследования лучше проводить на дневном таймфрейме. На меньших временных интервалах надежность сигналов, поступающих от свечных моделей, снижается. Чем меньше таймфрейм — тем надежность ниже;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eпрогнозирование долгосрочных трендов проводится на месячных и недельных временных интервалах;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eпосле появляющихся моделей разворота тенденция изменяется не всегда. Иногда происходит коррекция тренда или флэт. Поэтому модель разворота скорее прогнозирует изменение текущей ситуации на рынке.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EОбъясняется это балансом продавцов и покупателей. Чем больше открытых в одном направлении ордеров, тем выше вероятность разворота. Маркетмейкеры внимательно следят за рынком и при определенном количестве участников торгов «обрушивают» цену, заставляя ее развернуться, произвести коррекцию или уйти во флэт.\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EПаттерны, имеющие ценовые разрывы, являются более надежными.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EЛюбая комбинация свечей должна подтверждаться. Например, если на рынке сформировалась бычья модель, то последующая свеча должна показать рыночное устремление.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Ch2\u003EОтображение психологии рынка в свечах\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EКак анализировать японские свечи? Ответ на этот вопрос помогает понять психологию рынка, иными словами&nbsp;— намерения большинства продавцов и покупателей. Даже новички, приложив определенные усилия, смогут научиться анализировать свечные элементы для прогнозирования дальнейшего трендового движения.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОдним из наиболее важных параметров свечи является размер ее тела. Его длина свидетельствует о давлении на рынок быков или медведей. Если тело большого размера (относительно соседних свечек) имеет белый (зеленый) цвет, значит, преобладают бычьи настроения, и покупатели одержали верх над продавцами. Уверенную победу продавцов отображает большое темное (красное) тело. Незначительный его размер говорит о приблизительном равенстве сил продавцов и покупателей. Значит, вполне вероятен откат (коррекция) главенствующей тенденции, либо дальнейшее флэтовое движение. В таких случаях тренд на время «застывает» перед следующим рывком вверх или вниз.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 4\" data-entity-type=\"file\" data-entity-uuid=\"e77213cc-f510-4759-bafe-49d8bbed44bd\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%204_8.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКогда бычья свеча, сформировавшаяся после длительного нисходящего тренда, появляется на экране торгового терминала, есть все основания предполагать, что зарождается восходящая тенденция. А закрытие бычьей свечи выше линии сопротивления свидетельствует о том, что рынок укрепился на новом ценовом рубеже. Но такое утверждение будет иметь место только по завершении формирования свечного элемента. Для более детального просмотра этого процесса следует переключиться на меньший таймфрейм.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EХвост (фитиль, часто именуемый пин-баром), отходящий от тела отражает настроения участников торгов, а точнее — его перемену в процессе формирования самой свечки. Пин-бар довольно часто является предвестником смены господствующей тенденции или ее продолжением после соответствующего ценового отката. Длинные фитили, как правило, образуются вблизи сильного протестированного, но не пробитого уровня.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 5\" data-entity-type=\"file\" data-entity-uuid=\"83225a48-2636-47e6-bb8d-a484065d31b7\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%205_6.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКогда борьба продавцов и покупателей достигает своего максимума, на экране появляются «доджи» с длинными пин-барами. Это свидетельствует о нерешительности участников рынка — на фоне активной торговли нет результата.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EНастроение свечи\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EТакое понятие было предложено Лансом Бегсом, известным трейдером на Forex и специалистом алгоритма «Прайс экшн».\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНастроение зависит от положения цены закрытия относительно предыдущего свечного элемента. Принято различать несколько видов настроения:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eбычье. Цена закрытия выше последнего максимума;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eмедвежье. Закрытие периода ниже предыдущего минимума;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eнейтральное. Последнее свечное закрытие в диапазоне предыдущей свечи.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EВ свою очередь каждый из видов может быть высоким, низким и средним. Это интенсивность настроения. Она определяется в зависимости от того места диапазона свечи, где она была закрыта.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 6\" data-entity-type=\"file\" data-entity-uuid=\"679885de-ce96-4162-b1bb-0a02cd733d0c\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%206_4.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EИсследование свечного графика\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЯпонские свечи, технический анализ которых — вне всякой конкуренции другим графическим исследованиям рынка, могут дать трейдеру множество полезной информации о грядущих рыночных переменах.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПервостепенное значение имеют свечные тела, второстепенное — их тени. Фитили считаются рыночным шумом, хотя в любом трейдинге следует учитывать и его.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПодобные исследования графиков учитывают определенные фундаментальные принципы:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eдлинные тела, имеющие короткие фитили, являются фундаментом строительства новой тенденции. Это ярко выраженное превосходство покупателей над продавцами или, наоборот, продавцов над покупателями. Как правило, самые длинные свечные тела располагаются в начале тренда и в его завершении. Если ордер был открыт по тренду, то появление длиннотелых элементов — сигнал на закрытие сделки;\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 7\" data-entity-type=\"file\" data-entity-uuid=\"3bb61d62-36ba-47e1-be94-9d76429a4b49\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%207_4.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eсвечи с короткими телами и длинными фитилями часто формируются при развороте тенденции. Лучшим сигналом этого является элемент, у которого одна тень чрезвычайно превышает в длину другую тень и тело. Так отображается борьба быков и медведей, в процессе которой сначала побеждали одни, а в итоге первенство досталось другим;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eтела и фитили малых размеров появляются при появлении боковых трендов. В этот момент можно открывать ордера с небольшими стоп-лоссами (Stop Loss).\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Ch2\u003EВыводы\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EПрименение японских свечей характеризуется как положительными аспектами, так и определенными сложностями. Достоверность этих элементов, в отличие от компьютерных индикаторов, дает возможность исследовать саму цену, а не математические расчеты. Свечи универсальны. Они применимы для графиков активов всех рынков — валютного, сырьевого, фондового и др.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОднако у начинающих трейдеров наблюдается некоторая сложность в их освоении. Следует приложить определенные усилия и потратить время, чтобы досконально разобраться в свечном анализе. Но результаты труда, однозначно, не пропадут зря и помогут заработать неплохие средства.\u003C\u002Fp\u003E\r\n",
				"summary": "Наиболее удобным вариантом графика любого актива на Forex являются японские свечи. Информативность и наглядность представленных ими данных о состоянии рынка уже давно заслужили популярность у всех трейдеров. Именно анализ японских свечей дает возможность составления прогнозов дальнейшего ценового движения.\r\n\r\nЭтот инструмент технического анализа помогает трейдеру увидеть и понять настроение и психологию рынка."
			},
			"alias": "analysis-japanese-candlesticks",
			"author": {
				"name": "Вадим Кальчук, клиент Трейдер"
			},
			"category": {
				"alias": "other"
			},
			"video": null,
			"publicationDate": {
				"formatted": "2019-02-01T13:07:05",
				"timestamp": 1549026425
			}
		}, {
			"title": "Скальпинговые стратегии для бинарных опционов",
			"body": {
				"value": "\u003Cp\u003EБуквально пару десятилетий назад торговля на финансовых рынках не подкреплялась такой мощной компьютерной базой, как сейчас. Сделки совершались трейдерами по телефонному звонку своему брокеру. С развитием новых технологий стало доступным наблюдение графиков торгуемых активов в онлайн-режиме. У многих трейдеров появилась прекрасная возможность совершать краткосрочные сделки.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИменно бинарный скальпинг позволил трейдерам проводить торговые операции, время исполнения которых (или время экспирации) находится в диапазоне от 30 секунд до 5 минут.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EСуть и преимущества скальпинговой стратегии для бинарных опционов\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EНачинающие трейдеры часто интересуются, как можно спрогнозировать дальнейшее ценовое движение (вверх или вниз) следующие несколько минут. Оказывается, это вполне реально. Прибыль можно получать из мельчайших ценовых колебаний. На протяжении всего торгового дня любой актив обычно совершает 2 или 3 значительные движения в ту или иную сторону. Однако существует множество пульсаций цены вверх и вниз, позволяющих получить скальперам приличный заработок.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЗная это, некоторые не совсем порядочные брокерские компании всячески препятствуют своим клиентам в проведении таких краткосрочных сделок. Но скальпинг-опционы вполне доступны у серьезных и проверенных временем брокеров.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДля новичков такой краткосрочный трейдинг весьма полезен приобретением определенных навыков:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eпоявляется опыт быстро и умело принимать решения в экстремальных ситуациях, часто встречающихся на финансовых рынках;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eдовольно оперативно изучается торговая платформа и ее возможности;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eза небольшой промежуток времени начинающие трейдеры получают свой первый профит.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EЭто весьма важно, поскольку скальпинг на бинарных опционах может дать до 80% прибыли. И ее можно получить, торгуя с минимальным временем экспирации.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТакая торговля будет приносить прибыль при использовании определенного баланса компьютерных индикаторов. Применяя этот набор, важно соблюдать четкий логический алгоритм действий.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВот основные условия успешного применения метода скальпинга для бинарных опционов:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eосновные валютные пары и золото должны быть инструментами такой торговли, поскольку они являются высоковолатильными (это очень важно);\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eтаймфрейм трейдинга должен быть равен одной минуте или пяти;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eторговать следует в Европейскую или Американскую сессии;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eнужно применять риск-менеджмент;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eследует серьезно отнестись к подбору брокера, являющегося посредником между трейдером и рынком;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eвыбор времени экспирации зависит от текущей ситуации на рынке.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EСледует добавить, что существуют различные способы бинарного скальпинга: с применением индикаторов или без их использования.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EИндикаторы для скальпинга бинарными опционами\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EХотя многие трейдеры и считают краткосрочный трейдинг опционами весьма рискованным видом торговли, использование в нем проверенных индикаторов снижает риск во много раз.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНаиболее надежными помощниками из общего списка инструментов можно назвать следующие:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eпара экспоненциальных скользящих средних с периодами 5 и 10;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eиндекс относительной силы (RSI), настройки используются по умолчанию;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E«Стохастик» (\u003Cstrong\u003EStochastic\u003C\u002Fstrong\u003E\u003Cstrong\u003E \u003C\u002Fstrong\u003E\u003Cstrong\u003EOscillator\u003C\u002Fstrong\u003E\u003Cstrong\u003E) со значениями настроек 14, 3, 3.\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EПеречисленный набор индикаторов довольно распространен и приемлем со скальпинговой стратегией для любой торговой платформы, включая программное обеспечение бинарных брокеров.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНаиболее значимую роль играет пара вышеуказанных экспоненциальных «мувингов». Их пересечение отображает перемену краткосрочных тенденций. Именно этот момент является основным фактором для входа в сделку. RSI выполняет роль фильтра, отображающего результаты на экране торгового терминала относительно важного уровня 50. «Стохастик» — дополнительный инструмент, призванный быть подтверждением основного сигнала.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EСигналы индикаторов на открытие сделки\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EВ торговле бинарными опционами существует возможность покупки Call опциона (рост цены в оговоренные сроки) и Put опциона (снижение цены в оговоренные сроки).\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Скальпинг\" data-entity-type=\"file\" data-entity-uuid=\"74d2ea67-0ab5-4da4-bcbf-96586157f566\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%201_10.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСигнал «вверх», или покупка Call опциона, появляется при выполнении ряда условий:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eскользящая красного цвета пересекла зеленую скользящую снизу вверх;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eиндекс относительной силы располагается над уровнем 50;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eбыстрая линия «Стохастика» пересекла медленную (пунктирную) снизу вверх.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EПеред покупкой Call опциона обязательно нужно учесть рыночную обстановку. При низкой волатильности время экспирации следует увеличить.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Скальпинг\" data-entity-type=\"file\" data-entity-uuid=\"d81a1d6b-522b-4e2e-ba67-58db9873d63f\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%202_10.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСигнал «вниз», или покупка Put опциона, образуется также при наличии определенных факторов:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eкрасный «мувинг» пересек зеленый сверху вниз;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003ERSI располагается ниже уровня 50;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eбыстрая линия стохастического осциллятора пересекает медленную сверху вниз.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EПри входе в сделку немаловажно учитывать волатильность торгуемого актива.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИспользуя вышеуказанные сигналы индикаторов, следует помнить, что такая торговая стратегия опционов, как скальпинг, подходит не всем. Покупая опцион Put или Call, при недостаточном анализе рыночной ситуации, и проявляя несдержанность вместо хладнокровия, трейдер превращает разумную торговлю в азартную игру. Шансы получить профит при этом намного снижаются.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EСкальпинг без индикаторов\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EРеализуя скальпинг-стратегии для бинарных опционов, можно обойтись и без использования индикаторов. При этом применяются сделки по тренду.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДля результативной торговли таким методом необходимо наличие трех факторов:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eвесьма «подвижная» валютная пара, у которой тенденция резко возрастает или снижается;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eчеткий механизм, определяющий эту тенденцию;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eточный вход в рынок.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EДля достижения высокой точности входа следует совершать краткосрочные сделки по тренду с минимальным временем экспирации. Причем стартовать нужно на откате цены актива.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Скальпинг\" data-entity-type=\"file\" data-entity-uuid=\"b37c06fe-89ee-42d3-906c-baec097be5b2\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.3_1.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНа рисунке изображен восходящий тренд на минутном временном интервале. Его движение отображено стрелками, которые показывают, в каком именно направлении следует совершать торговые операции. Для безошибочного определения этого направления следует использовать уровни поддержки и сопротивления.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОбозначения в виде овалов над стрелами отображают сопротивления. Аналогичные овалы под стрелами — поддержка. Каждый последующий максимум поддержки выше предыдущего. То же происходит и с экстремумами сопротивления. Определив, в какую сторону движется рынок, следует выбрать момент покупки бинарного опциона со временем исполнения 5 минут. В данном случае нужно стартовать на покупку Call именно в тот момент, когда тренд, завершив очередную коррекцию, меняет направление в сторону основного движения.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ случае понижающейся тенденции действуют аналогичным образом. Важно помнить, что не следует выбирать время экспирации ниже 5 минут, поскольку иногда 1 или 2 минуты цена может оставаться на этом же уровне, не продвинувшись ни на один пункт вверх или вниз.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКроме того, любой трейдер должен понимать, что полностью избежать убыточных сделок не получится. При правильном использовании скальпинг-стратегии для бинарных опционов количество прибыльных торговых операций, вероятнее всего, будет значительно доминировать над числом убыточных.\u003C\u002Fp\u003E\r\n",
				"summary": "Буквально пару десятилетий назад торговля на финансовых рынках не подкреплялась такой мощной компьютерной базой, как сейчас. Сделки совершались трейдерами по телефонному звонку своему брокеру. С развитием новых технологий стало доступным наблюдение графиков торгуемых активов в онлайн-режиме. У многих трейдеров появилась прекрасная возможность совершать краткосрочные сделки."
			},
			"alias": "binary-options-scalping",
			"author": {
				"name": "Вадим Кальчук, клиент Трейдер"
			},
			"category": {
				"alias": "trading-strategies"
			},
			"video": null,
			"publicationDate": {
				"formatted": "2019-01-24T14:29:53",
				"timestamp": 1548340193
			}
		}, {
			"title": "Индикатор RSI. Как использовать",
			"body": {
				"value": "\u003Cp\u003EИндикаторами технического анализа трейдеры пользуются уже давно. Эти алгоритмы автоматически отражают поведение котировок, существенно облегчая торгующим проведение анализа рыночной ситуации и помогая строить торговые планы.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОдним из наиболее распространенных инструментов является RSI индикатор (индекс относительной силы). Его можно назвать легендой технического анализа. Алгоритм дает возможность реально оценить силу текущей тенденции и определить вероятные точки ее разворота.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EИстория и краткая характеристика RSI\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EИнструмент был разработан еще в 1978 году Уэллсом Уайлдером, широко известным основателем различных концепций технического анализа. В своих книжных трудах о торговых системах автор детально изложил суть RSI индикатора.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EРезультатом публикации книги явилась возросшая популярность этого инструмента среди многих участников рынка. При трейдинге на Forex RSI применяется в платформе MetaTrader. Для него приемлемы любые активы и все таймфреймы. По типу алгоритм представляет собой осциллятор. Величина профита зависит от выбранной торговой стратегии.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EОбщее описание алгоритма\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EОсциллятор RSI, а именно таковым, как уже было отмечено ранее, является этот инструмент, колеблется в определенном коридоре между максимальным (100) и минимальным (0) значениями. Он работает на скорости изменения цены, отображая результаты в вышеуказанном диапазоне. Наибольший эффект от работы осциллятора наблюдается, когда он находится вблизи своих экстремумов.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДиапазон от 70 до 100 — зона перекупленности, от 0 до 30 — зона перепроданности. Когда RSI достигает первого диапазона, то ожидается ценовое падение. Вариант пребывания в коридоре от 0 до 30 сигнализирует о дальнейшем ценовом росте.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСледует отметить, что границы 30 и 70 не следует воспринимать как догму. Некоторые трейдеры со стажем, использующие RSI в своих торговых стратегиях, советуют изменить эти значения на 20 и 80. Особенно, когда на рынке господствует ярко выраженная бычья или медвежья тенденции. Тогда, благодаря использованию этих границ, вход в рынок осуществляется более корректно.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 1\" data-entity-type=\"file\" data-entity-uuid=\"24ba4ad6-af1e-44d5-bdc5-3e2149cb01ad\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%201_9.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОднако в случае восходящего или нисходящего тренда всегда возникают логичные вопросы: как долго будет находиться RSI в пограничных зонах и как определить момент его выхода из них, чтобы корректно открыть позицию на покупку (продажу)? Сам автор индикатора рекомендовал использовать период, равный 14. Некоторые трейдеры, помимо этого значения, используют 9 и 25. В зависимости от таймфрейма указанные числа являются количеством свечей, применяемых в расчетах (минуты, часы, дни и т.&nbsp;д.).\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЛюбой трейдер, торгуя выбранным активом, может подобрать для себя оптимальный период экспериментальным путем. Для этого нужно, последовательно изменяя значения, следить за диапазонами перекупленности и перепроданности. Когда ярко выраженные (разворотные, ключевые) экстремумы на ценовом графике начнут отображаться инструментом в этих зонах, а остальные будут вне их — считается, что значение для периода подобрано удачно.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСледует помнить, что период с меньшим числовым значением отражается на чувствительности инструмента. Кривая RSI будет давать больше ложных сигналов. Увеличение периода сделает RSI indicator более сглаженным и отсеет неверные подсказки.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EХарактеристика зон перекупленности и перепроданности\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EНа экране торгового терминала в подвальном окне графика уровни 30 и 70 отображаются линиями. Именно они используются для получения сигналов, чтобы открывать длинные и короткие позиции.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПересечение осциллятором линии 30 сверху вниз говорит о его местонахождении в зоне перепроданности. Когда кривая RSI пересекает эту линию уже снизу вверх, трейдер расценивает это обстоятельство, как открытие длинной позиции. Если индикатор пересек границу 70 снизу вверх (войдя в зону перекупленности), а затем повторно уже сверху вниз — открывается ордер на продажу. Такие правила входа в рынок приемлемы только по движению основного тренда. Против тренда открытие соответствующих ордеров чревато возможными потерями.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОднако осциллятор может находиться в этих зонах довольно продолжительное время. Поэтому следует анализировать подобные ситуации в зависимости от ряда обстоятельств:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EВ случае обычного «боковика» ценовое движение происходит в определенном коридоре. Пересечение RSI уровней 70 сверху и 30 снизу будет хорошим сигналом для входа в рынок на продажу и покупку соответственно. Это видно на рисунке внизу. При условии узкого флэта скальперы имеют прекрасную возможность значительно увеличить свою прибыль.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 2\" data-entity-type=\"file\" data-entity-uuid=\"2e1c262b-e935-40c3-aa4f-bd353fbd91cc\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%202_9.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EВ случае сильного восходящего движения осциллятор, преодолев границу 70, может длительное время пребывать в диапазоне перекупленности. Целесообразнее пренебречь его показаниями до того момента, пока он не пересечет уровень в обратном направлении. Это будет неплохим сигналом для начала продаж.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EРанее уже упоминалось, что значения 30 и 70 подлежат изменению. Так, например, участники рынка, проводящие трейдинг в условиях бычьей тенденции, используют для уровней значения 40 и 80. При четко выраженном медвежьем тренде удобно использовать 20 и 60.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 3\" data-entity-type=\"file\" data-entity-uuid=\"68fe7e23-7490-4cb4-bc75-b21bdfad7146\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%203_7.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНекоторые трейдеры рекомендуют применять «правило 5%». Это значит, что линия уровня проводится таким образом, чтобы RSI индикатор Forex оставался за ней не более 5% всего времени за определенный временной промежуток. Можно протестировать его на исторических данных за последние три месяца. Впоследствии все данные обновляются.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКогда рынок не отличается резкой изменчивостью, уровни 30 и 70 практически не пересекаются осциллятором. Увеличить амплитуду его колебаний можно, уменьшив в расчетах период. Если же осциллятор чрезмерно чувствителен к ценовым изменениям, то период следует увеличить и тем самым отсеять рыночный шум. Момент завершения сделки связан с приближением к зонам перекупленности или перепроданности. Как только осциллятор достигнет их границ, позицию следует закрыть. Некоторые оставляют сделки открытыми и подтягивают стоп-лоссы ближе, надеясь получить еще большую прибыль, поскольку ценовое движение вполне может продолжиться в прежнем направлении.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EФигуры технического анализа\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EПрименяя RSI индикатор в торговле, можно входить в сделки, используя и графические фигуры, которые рисует инструмент в подвальном окне. Это могут быть «треугольники», «знамена», «двойные вершины» и т. д.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 4\" data-entity-type=\"file\" data-entity-uuid=\"b6214a4f-c4d6-4479-959e-acca6a5d1733\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%204_7.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНа рисунке пары EURUSD отчетливо наблюдается фигура разворота «голова-плечи». По ней можно войти в продажу, получив неплохой профит. В качестве линии шеи подходит уровень 50.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EДивергенции\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EИндикатор может быть помощником в прогнозировании дальнейшего движения основного тренда. Отображая divergence (расхождение в подвальном окне и на графике торгуемого актива), инструмент предсказывает скорый ценовой разворот в будущем.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 5\" data-entity-type=\"file\" data-entity-uuid=\"7b8d6cf6-36b8-4b70-9c9f-784256362eab\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%205_5.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ данном случае на графике наблюдается сильный сигнал к развороту — дивергенция ниже уровня 30 RSI. Подобный сигнал обязательно следует учитывать в трейдинге при уже открытой позиции. Ее следует закрыть во избежание возможных убытков.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТакое расхождение может наблюдаться в двух случаях:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eпри росте ценового тренда RSI снижается;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eпри нисходящей тенденции кривая RSI растет.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EИнструмент лучше применять вместе с другими индикаторами технического анализа. Это поможет отсеять ложные сигналы. Тестирование желательно провести на демо-счете, а уже затем торговать реальными средствами.\u003C\u002Fp\u003E\r\n",
				"summary": "Индикаторами технического анализа трейдеры пользуются уже давно. Эти алгоритмы автоматически отражают поведение котировок, существенно облегчая торгующим проведение анализа рыночной ситуации и помогая строить торговые планы.\r\n\r\nОдним из наиболее распространенных инструментов является RSI индикатор (индекс относительной силы). Его можно назвать легендой технического анализа. Алгоритм дает возможность реально оценить силу текущей тенденции и определить вероятные точки ее разворота"
			},
			"alias": "rsi-how-to-use",
			"author": {
				"name": "Вадим Кальчук, клиент Трейдер"
			},
			"category": {
				"alias": "other"
			},
			"video": null,
			"publicationDate": {
				"formatted": "2019-01-10T13:06:52",
				"timestamp": 1547125612
			}
		}, {
			"title": "Индикаторы уровней поддержки и сопротивления",
			"body": {
				"value": "\u003Cp\u003EБез сомнения, уровни поддержки и сопротивления являются одним из важнейших элементов технического анализа. С этим утверждением согласится любой трейдер. Одни используют уровни в трейдинге непосредственно, открывая и закрывая ордера у границ диапазона, очерченного ими. Другие применяют баланс спроса и предложения в своих торговых стратегиях на различных временных интервалах.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВизуальное представление границ зон борьбы продавцов с покупателями весьма удобно и служит прекрасным ориентиром для всех участников рынка. Проблему автоматической прорисовки поддержки и сопротивления решают индикаторы уровней.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EПредставление поддержки и сопротивления в торговом терминале\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EВ любом MetaTrader уже существуют несколько форм отображения вышеупомянутых уровней. Наиболее распространенными инструментами являются:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eпараллельные прямые линии, отображающие канал, в котором происходит ценовое изменение;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eскользящие средние с различными крупными периодами. Числовое значение периодов, как правило, начинается от 100 и является круглым числом;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eуровни Фибоначчи — прекрасное средство для определения ценовых откатов. Эта методика может применяться на любых таймфреймах.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 1\" data-entity-type=\"file\" data-entity-uuid=\"883be930-a9ad-4405-be2a-f7ae3ff76e43\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%201_8.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНа перечисленных трех инструментах основывается множество методов трейдинга, применяемых на Forex. Для использования особых зон с максимальным эффектом созданы специальные алгоритмы — индикаторы уровней поддержки и сопротивления. Их многообразие позволяет каждому выбрать наиболее приемлемый для него индикатор и, применяя в торговле, получать профит.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EИндикатор Zone\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЭто один из наиболее распространенных и эффективных алгоритмов, призванных определять сильные горизонтальные уровни. Хотя Zone не входит в стандартный набор инструментов MetaTrader, его без труда можно найти в интернете и установить в свой торговый терминал.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОтдельного внимания заслуживают два параметра:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003ETF — интервал времени, на котором инструмент прорисовывает важные горизонтальные уровни. Это значение выставляется в минутах. От 1 минуты для М1 и до 43 299 минут для месячного периода М;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EMaxbars — количество баров, используемых для построения границ поддержки и сопротивления. По умолчанию он равен 1 000. При наличии других индикаторов, используемых в торговле, значение Maxbars можно и снизить, чтобы не загружать торговый терминал.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EПомимо вышеуказанных настроек в индикаторе можно изменять толщину и цвет линий, размер шрифта. Применять Zone в трейдинге следует аналогично другим индикаторам уровней Forex. В случае разворота от намеченных границ&nbsp;— использовать момент для входа в соответствующую позицию (длинную или короткую). Вариант пробоя уровней — торговать с применением соответствующей стратегии.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 2\" data-entity-type=\"file\" data-entity-uuid=\"343d1f37-b578-402b-a681-4030c0cf2c84\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%202_8.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ отличие от других аналогичных алгоритмов, Zone отражает в терминале наиболее важные уровни, от которых, с большой долей вероятности, цена оттолкнется. Именно возле этих границ были проторгованы значительные объемы. Использовать этот инструмент в трейдинге можно самостоятельно или вместе с другими индикаторами, подтверждающими реакцию рынка в предполагаемый момент продаж или покупок.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПрежде чем применить алгоритм Zone в реальной торговле, следует протестировать его на демо-счете, подобрав соответствующие настройки. Только убедившись в корректной работе индикатора, можно начать торговлю реальными средствами.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНекоторые опытные трейдеры советуют нанести Zone с различными настройками TF на график выбранного актива. Тогда перед глазами будет наглядная картина разворотных уровней всех временных интервалов. Это послужит дополнительным фильтром для входа в рынок.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EИндикатор PowerDynamiteAreas\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЭто довольно неплохой и интуитивно понятный Forex-индикатор сопротивления и поддержки. PDA пользуются, как начинающие трейдеры, так и опытные. Инструмент дает возможность визуально наблюдать на экране терминала уровни, дифференцированные по их силе. Причем такая картина отображается на любом таймфрейме.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПоиск и установка PDA не займет много времени. Среди входных параметров можно выделить наиболее важные:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EPivot Strength — настройка силы уровня. Изменяется в пределах от 1 до 7;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EMax Look Back Bars — отображает количество свечей, применяемых для расчетов;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EMax Levels — число уровней поддержки и сопротивления, одновременно отображаемых на экране терминала.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EПомимо этого в настройках есть возможность изменить толщину линий и дистанцию, разделяющую два соседних горизонтальных уровня. Использовать PDA можно самостоятельно и в качестве дополнительного фильтра с другими индикаторами для подтверждения удобного момента на вход в сделку.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ первом случае присутствуют три варианта развития событий:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EОткрытие позиции при отскоке цены от уровня. Проанализировав трендовое движение, трейдер должен дождаться отскока цены от прорисованной индикатором линии и открыть ордер на покупку (продажу). Тейк-профит и страховочный стоп-лосс выставляются в соотношении 3:1. Это минимальное соотношение для торговли на часовом графике актива.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 3\" data-entity-type=\"file\" data-entity-uuid=\"4313e1b7-afe9-46dd-a2e2-2a01b80eff90\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%203_6.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EОткрытие позиции после пробоя уровня. Этот вариант предусматривает вход в рынок, если ситуация будет развиваться следующим образом. После пробития уровня и последующего закрепления за ним, цена повторно пересекает эту границу в прежнем направлении (как показано на рисунке снизу). Окончание свечи будет сигналом для открытия позиции. Страховочный ордер выставляется за последним экстремумом. Открытую позицию можно сопровождать трейлинг-стопом или со временем переместить стоп-лосс в безубыток и постепенно сдвигать его вслед за ценой.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 4\" data-entity-type=\"file\" data-entity-uuid=\"1e210035-00d6-4a1a-9324-3426623c8c7c\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%204_6.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EТрейдинг в боковом ценовом диапазоне. В этом случае инструмент PDA четко прорисовывает линии борьбы продавцов с покупателями. Цена изменяется в обозначенном коридоре. Нужно дождаться появления свечи со средним или длинным лучом возле границы, направленным в ее сторону (как показано на рисунке). После окончательного формирования свечи следует входить в длинную или короткую позицию, помещая стоп-лосс за уровень.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 5\" data-entity-type=\"file\" data-entity-uuid=\"c6e6400e-a14b-4a63-be6d-e366f5d905c6\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%205_4.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНеоспоримое достоинство PDA в том, что начинающий трейдер может не сомневаться в точной визуализации индикатором значимых уровней поддержки и сопротивления. Используя этот уникальный инструмент для внутридневной торговли, трейдер получает хороший фильтр сигналов, предупреждающих его о целесообразности не входить в рынок перед сильным препятствием. Само собой в трейдинге следует учитывать важнейшие новостные события, после которых цена может пробить значимые уровни и пойти дальше.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EАлгоритм Lines\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЯвляется одним из простейших индикаторов уровней поддержки и сопротивления без перерисовки для внутридневного трейдинга. Особенность алгоритма в том, что он отображает на графике торгуемого актива две линии сопротивления и две линии поддержки.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 6\" data-entity-type=\"file\" data-entity-uuid=\"7b2ada9e-b424-4527-87be-ec7b74d7c62b\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%206_3.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВсе линии окрашены в разные цвета и имеют разную толщину. Различия означают значимость уровней:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eподдержка красного цвета и сопротивление синего — более значимые уровни;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eподдержка розового цвета и сопротивление голубого — второстепенные границы.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EЗначимые уровни по протяженности превышают второстепенные. Это отчетливо видно на рисунке.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ настройках Lines предусмотрены параметры для более значимых границ – X1, Y1, L1, L2. Для второстепенных — X2, Y2, L3, L4.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 7\" data-entity-type=\"file\" data-entity-uuid=\"1d80fbae-7e7b-4452-82c1-7162e0160e31\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%207_3.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОни отображены в окне «Настройки инструмента». Значения X задают протяженность интервала времени, на котором производится расчет ценовых уровней. Параметры Y отвечают за ширину полос, наносимых на график.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВизуализация на экране 4-х уровней обуславливает специфику использования Lines. Трейдеры, применившие этот инструмент в своей торговле, рекомендуют с определенным интервалом времени изменять его расчетный период. Таким образом можно отслеживать изменение положения уровней.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 8\" data-entity-type=\"file\" data-entity-uuid=\"f51e69d5-aadf-4d60-8c49-06d6264f17f3\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%208_0.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЕсли это положение не меняется длительное время, значит, цена движется в канале. Следовательно, целесообразно использовать стратегию отбоя от ценовых уровней, открывая ордера на покупку и продажу. Это очень удобно. Главное вовремя открывать короткие и длинные позиции. Можно пользоваться тактикой отложенных ордеров.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ случае пробития важных ценовых уровней — применять соответствующий метод трейдинга. Также использовать отложенные ордера.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EPZ уровни&nbsp;\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЕще один индикатор уровней, идентифицирующих их важность. Начинающему трейдеру бывает непросто вручную прочертить на графике важные и менее значимые ценовые границы. Их многообразие объясняется тем, что информация, которую дают различные аналитические агентства, по-разному воспринимается.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИндикатор PZ оценивает каждый уровень и в зависимости от важности отображает его на графике с определенной толщиной. Отдельные, еще не сформировавшиеся, границы отображаются в виде пунктирной линии.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EАлгоритм имеет ряд преимуществ:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eпроведение одновременного анализа на 4-х временных интервалах;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eвблизи образовавшейся экстремальной точки анализируется поведение цены. Выявляется характер ее движения (медленный, быстрый). Это и есть сила зоны спроса и предложения;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eобъединение довольно близко расположенных уровней в один:\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eвозможность настройки параметров инструмента под свою торговую систему;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eотсутствие перерисовки и возможность звукового оповещения.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EВсе параметры PZ делятся на три категории — оказывающие влияние на результаты анализа, настройка и отображение результатов (визуализация), варианты оповещения (телефон, электронная почта, звук). Индикатор легко скачивается и устанавливается в торговый терминал.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТрейдеры, применившие алгоритм PZ на практике, советуют использовать его в торговле на отбой от уровней. Довольно результативно он отрабатывает в канальных стратегиях. Сигналом к развороту могут послужить свечные паттерны.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EМногие индикаторы уровней схожи между собой по принципу работы и выполняют одни и те же функции. Хотя у каждого есть свои индивидуальные особенности. Поэтому каждый трейдер выбирает их для себя самостоятельно, предварительно опробовав на практике.\u003C\u002Fp\u003E\r\n",
				"summary": "Без сомнения, уровни поддержки и сопротивления являются одним из важнейших элементов технического анализа. С этим утверждением согласится любой трейдер. Одни используют уровни в трейдинге непосредственно, открывая и закрывая ордера у границ диапазона, очерченного ими. Другие применяют баланс спроса и предложения в своих торговых стратегиях на различных временных интервалах.\r\n\r\nВизуальное представление границ зон борьбы продавцов с покупателями весьма удобно и служит прекрасным ориентиром для всех участников рынка. Проблему автоматической прорисовки поддержки и сопротивления решают индикаторы уровней."
			},
			"alias": "support-resistance-indicators",
			"author": {
				"name": "Вадим Кальчук, клиент Трейдер"
			},
			"category": {
				"alias": "other"
			},
			"video": null,
			"publicationDate": {
				"formatted": "2019-01-10T11:32:28",
				"timestamp": 1547119948
			}
		}, {
			"title": "Основы риск менеджмента при торговле на Форекс",
			"body": {
				"value": "\u003Cp\u003EИзвестно, что неотъемлемой частью прибыльной торговли являются риск-менеджмент и мани-менеджмент (Money Management). Профит всех трейдеров на Forex зависит от их умения управлять своими средствами как в периоды прибыли, так и в периоды просадок.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EК большому сожалению, многие начинающие трейдеры, да и не только они, пренебрегают риск-менеджментом. Новички наивно полагают, что есть некий волшебный подход к трейдингу на валютном рынке, заключающийся в получении правильной информации о нем, что позволяет практически всегда осуществлять лишь прибыльные торговые операции.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EЧто такое риск-менеджмент?\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EМногие трейдеры путают понятия мани-менеджмента и риск-менеджмента. В первом случае — это умение управлять средствами, а во втором — умение ограничивать свои потери во время торговли.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EТрейдинг на финансовых рынках — это высокорискованное средство заработка. Получение прибыли в процессе торговли еще не является полным залогом успеха всей торговой деятельности. Весьма важно научиться доход не терять. Риск-менеджмент является частью торговой системы, указывающей на конкретное количество лотов, используемых в определенный момент трейдинга. Другими словами, это управление размером ставки.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EАвтор книги «Биржевая игра» Райан Джонс указывает на тот факт, что в большинстве случаев, размышляя над объемом вновь открываемой позиции, трейдеры действуют инстинктивно, полагаясь на свое предчувствие. Такая бессистемность порождает более 90% неудачников в трейдинге. Профессионалы, используя определенные системы подсчета, определяют, какой именно суммой денежных средств можно рисковать при открытии следующей позиции. Такие системы они используют продуктивно и постоянно. «Трейдинг — это игра, в которой присутствует вознаграждение за риск», — говорит Джонс.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПоскольку вся торговля на Forex в основном построена на эмоциях трейдера, риск-менеджмент служит для того, чтобы исключить эмоциональную составляющую и придать упорядоченность процессу. Итоговая прибыль является суммой результатов прибыльных и убыточных сделок.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Риск-менеджмент\" data-entity-type=\"file\" data-entity-uuid=\"e9dcf4d7-70b1-4d33-b86f-ce6f4262ba4e\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%B8%D1%81%D0%BA%201.jpg\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ настоящее время разработано множество правил управления капиталом и способов определения риска на сделку. Управление денежными средствами можно разделить на две категории: правильное и неправильное. Первая категория учитывает риск и полученное за него вознаграждение. Таким образом, используется весь спектр имеющихся возможностей. Вторая категория учитывает либо риск, либо прибыль. В этом случае берутся во внимание лишь отдельные характеристики счета: процент удачных торговых операций или соотношение профита и потерь.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EВажность риск-менеджмента при торговле\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EПри трейдинге на Forex риск-менеджмент является, по сути, наиболее важным аспектом. Он помогает трейдеру «оставаться в игре». Полный успех на рынке обеспечивает оптимальное управление капиталом. Поэтому следует более подробно рассмотреть, что он собой представляет.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНачинающие трейдеры довольно часто не учитывают случайность происходящих на Forex событий и не до конца разбираются в вопросах вероятности. Некоторые из них охотно верят в то, что брокеры искусственно формируют ложные свечи и преждевременно закрывают стоп-лоссы (Stop Loss). Именно такие новички зачастую и «сливают» свои депозиты.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДля трейдеров крайне важно понятие математического ожидания:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EПоложительное математическое ожидание — это преимущество игрока в проводимой игре.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EОтрицательное математическое ожидание — преимущество игорного дома.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EВ качестве примера можно привести подбрасывание монеты с целью выявления преимущества «орла» или «решки». В данном случае их шансы равны: 50 на 50. Поэтому и вероятность получить выигрыш составляет 50%. Однако за подобные действия в казино с игрока будут удержаны 10% комиссионных за каждое подбрасывание. Таким образом, преимущество игорного дома делает математическое ожидание игрока отрицательным. Следует уяснить, что ни одна система управления капиталом не выстоит против отрицательного математического ожидания. Рано или поздно размер депозита станет равным нулю. Это вопрос времени.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИгрока ждет успех только в случае положительного математического ожидания. К сожалению, торговля на финансовых рынках и, в частности на Forex, имеет отрицательное математическое ожидание. Подобно 10% налогу в казино, здесь отрицательное воздействие на трейдинг оказывают свопы, спреды, плата за перевод средств на счета. Поэтому трейдеру следует искать положительное математическое ожидание любыми способами.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EРазрабатывая или оптимизируя торговую систему, необходимо стремиться к тому, чтобы она была жесткой и практичной. Меньшее количество ее компонентов будут сводить к минимуму возможность потерь. Настройки должны быть плавающими и зависящими от определенных параметров рынка, например волатильности.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПрежде чем применить торговую систему в трейдинге реальными средствами, следует ее протестировать, используя длительный исторический период (желательно не менее 5 лет). И только убедившись в ее корректной работе при тестировании, можно использовать разработанный набор правил в реальной торговле. Следует отметить, что все результаты оценивают в совокупности.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИмея готовую торговую систему, уже можно устанавливать правила управления капиталом. Высокое положительное математическое ожидание этой системе будут давать правильно выбранный размер позиции и торговля по строго разработанным правилам.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EРазмер капитала, которым можно рисковать\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЭмоции и невежество, как правило, могут сыграть злую шутку с начинающими трейдерами. Они часто открывают ордера интуитивно и входят в рынок тогда, когда этого не следовало бы делать. Впоследствии «набивая шишки» и приобретая опыт торговли, эти трейдеры уже начинают придерживаться определенной торговой системы. Однако первые успехи на рынке делают их жадными, и новички неразумно рискуют слишком большой суммой в одной сделке. Несколько неудачных сделок, совершенных под воздействием эмоций, могут легко обнулить депозит.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EРискуя четвертью капитала на счете, довольно быстро можно приблизить финансовый крах. Даже самая лучшая торговая система не сможет его предотвратить. В случае риска десятой долей средств торговая деятельность продлиться некоторое время, но финал также будет плачевным.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Риск-менеджмент\" data-entity-type=\"file\" data-entity-uuid=\"3828c51e-a42f-486d-bbaf-e1a8a86717f4\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%B8%D1%81%D0%BA%202.jpg\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EМногочисленные исследования рынка показали, что использовать в трейдинге следует не более 2% депозита. Некоторые опытные трейдеры даже считают этот предел завышенным и уменьшают его до 1%. Это не случайно, поскольку, привлекая дополнительно инвесторов, весьма благоразумно показывать меньший процент убытков.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПри управлении капиталом следует придерживаться строгих правил:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EОбеспечить себе выживание на рынке и всячески избегать неоправданного риска. Заранее жестко ограничить возможные потери.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EДобиться устойчивого профита от сделок.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EПолучать сверхприбыль.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EДва последних правила выполнимы лишь при неукоснительном соблюдении первого. Следует помнить, что богатеть нужно медленно. В торговле на финансовых рынках никогда не следует торопиться, пускаясь в погоню за большой прибылью. Ни в коем случае нельзя рисковать всеми средствами, имеющимися на счете.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСпоры о заработках не затихают на многих тематических форумах. Считается, если трейдер делает 40% дохода в год и закрепил этот успех на протяжении 5 лет, он достиг многого. Трейдер, способный удвоить свой капитал за один год, считается большой редкостью. Поэтому правильным будет ставить перед собой скромные цели и достигать их. По сути, это единственный верный путь к получению хорошей статистики с регулярным профитом и малыми потерями. Опыт показывает: реальные доходы несовместимы с высокими рисками.\u003C\u002Fp\u003E\r\n\r\n\u003Ch3\u003EСуммарная чистая прибыль\u003C\u002Fh3\u003E\r\n\r\n\u003Cp\u003EОбщая чистая прибыль в результате трейдинга будет равна разности валовой прибыли и валового убытка. Этот признак наиболее полно дает инвестору информацию о возможности торговой системы.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСама по себе чистая прибыль практически не несет смысловой нагрузки. Ее обязательно следует рассматривать, разбив по различным периодам времени, даже по годам. Однако для принятия окончательного решения следует учитывать и другие параметры.\u003C\u002Fp\u003E\r\n\r\n\u003Ch3\u003EМаксимальная просадка\u003C\u002Fh3\u003E\r\n\r\n\u003Cp\u003EЭто одна из составляющих частей риск-менеджмента на рынке. У любого есть как успешные, так и убыточные сделки. Опытный трейдер минимизирует просадку в отличие от только начинающего торговать.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EМаксимальной просадкой принято считать степень наибольшего убытка, который может быть на счете трейдера. Это максимальное снижение средств, фиксируемое от локального максимума (разница между экстремумами денежных средств на депозите). Причем данная величина измеряется в валюте депозита.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНапример, на счете было 400 долларов. Закрытие первого ордера принесло прибыль размером 50 долларов. Вторая сделка была неудачной, обозначив убыток в 100 USD. Затем опять убыток 50 USD. И снова прибыль 20 USD. В результате нескольких прибыльных и убыточных сделок количество средств снизилось до 320 долларов. Разница между локальным максимумом 450 USD и локальным минимумом 300 USD составила 150. Это и есть максимальная просадка.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЭтот показатель определяет размер реальных рисков трейдинга. Его величина даже может быть больше первоначального размера депозита, когда сначала получена прибыль, а впоследствии — большие потери.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Риск-менеджмент\" data-entity-type=\"file\" data-entity-uuid=\"b079025b-1edd-4069-a328-442dc2ee4b82\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%B8%D1%81%D0%BA%203.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПри тестировании торговой стратегии немаловажной характеристикой является фактор восстановления (Recovery Factor). Это отношение чистой прибыли, полученной в результате торговой деятельности, к максимальной просадке. В итоге виден размер профита, приходящийся на один доллар убытка. Метод торговли, где значение Recovery Factor меньше единицы, не может быть эффективным. Вообще, трейдеры со стажем считают систему продвинутой, когда значение фактора восстановления не менее 3.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДаже весьма поверхностный анализ параметров любой торговой системы может показать, насколько она эффективна. Например, если определенный метод торговли сулит 80% прибыли в год, это довольно неплохой предвестник достатка. Но когда при этом максимальная просадка равна 60%, вполне возможен вариант уменьшения депозита более чем в два раза, а возможно и его слива.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EУвеличение максимальной просадки в результате нескольких неудачных торговых операций может пагубно воздействовать на психологическое состояние начинающего трейдера. У него возникает острое желание быстро восстановить потерю средств. Однако никоим образом не следует поддаваться эмоциям. Обязательно нужно следовать правилам уже выбранной торговой системы и не забывать: просадки являются неотъемлемой частью любого трейдинга.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EСредний коэффициент выигрыш \u002F проигрыш\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЭтот показатель, совмещенный с процентом прибыльности, дает инвестору или трейдеру много полезной информации для принятия кардинальных решений. Системную торговлю можно рассматривать, как игру в числа.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКомбинация коэффициента выигрыш \u002F проигрыш и процента прибыльности оказывает существенную помощь в вычислении резерва на ошибку и позволяет понять логику используемого в торговле метода. Для наглядности данную зависимость можно рассмотреть на графике.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Риск-менеджмент\" data-entity-type=\"file\" data-entity-uuid=\"7a86d474-6035-4741-bdb6-f783e117913f\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%B8%D1%81%D0%BA%204.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВидно, что при соотношении коэффициента выигрыш \u002F проигрыш и процента прибыльности 1 \u002F 50 наступает безубыточный трейдинг. Несложно заметить, что понижение значения второго параметра влечет увеличение первого. И наоборот, уменьшение процента прибыльности увеличивает коэффициент выигрыш \u002F проигрыш. Его значение должно быть равно минимум 4, чтобы обеспечивать 20% прибыли.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОбычно в неплохих торговых системах соотношение этих параметров 5 к 10. Не следует гнаться за сверхприбылью. Во всем нужно знать меру.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EСоотношение между максимальным и средним выигрышем\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EВ этом параметре происходит учет соотношения максимального и среднего убытка. Этот показатель будет полезен для определения потенциала максимальной прибыли. Однако любой инвестор должен помнить, что на такую удачу всецело не стоит полагаться, но все же она будет приятной.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКогда максимальный выигрыш в несколько раз (в три или четыре) больше среднего, то не стоит особо рассчитывать на его получение. В случае когда его значение не превышает сумму трех средних выигрышей, есть большая вероятность, что дальнейшее использование данного метода торговли даст еще больший профит по сравнению с первоначальным.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЕсли средний убыток в три-четыре раза ниже максимального, значит, произошло экстраординарное событие. Таких потерь быть не должно, они случаются крайне редко. Потери могут быть выше лишь при соотношении: максимальный убыток превышает средний менее, чем в три раза.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EВероятность финансового краха\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EПоказатель Probability of Ruin (POR) отражает вероятность того, что баланс на счете трейдера будет снижаться до определенной точки раньше, чем подниматься до другой, более высокой, точки. Таким образом, выбранный метод трейдинга может разорить торговый счет. Убыток будет виден по самому уровню счета в момент прекращения торговли. POR наглядно отражает движение выбранной системы к успеху или разорению.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЛюбому трейдеру будет всегда полезно знать эту величину. Для вычисления вероятности разорения нужно определить все параметры весьма сложного уравнения. Важно учитывать следующие закономерности:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EProbability of Ruin уменьшается при увеличении размера средних выигрышей.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EPOR увеличивается в случае роста среднего риска сделки.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EРазмер исходного депозита также влияет на вероятность разорения. Чем он больше, тем меньше POR.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EУвеличение процентной доли выигрышных торговых операций снижает POR.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EСлишком маленький размер депозита увеличивает вероятность его разорения.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EКак правило, значение Probability of Ruin не превышает 5%. Но важно то, что этот показатель своевременно информирует трейдеров о возможном быстром финансовом крахе. В этом случае следует снижать риск каждой последующей сделки и стараться уменьшить POR до нужного уровня. Рискуя совсем незначительной частью средств на депозите, трейдер однозначно увеличивает шансы на успех. Если есть выбор между двумя торговыми системами, следует выбирать ту, где риск разорения меньший.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EФактор прибыли\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EЭтот немаловажный для трейдера параметр принято называть профит-фактором (Profit Factor). Он также является неотъемлемой частью тестирования торговой стратегии и позволяет оценить ее эффективность. Пользуется наибольшей популярностью у трейдеров.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EРасчет показателя несложен. Суммируются убыточные и прибыльные торговые операции. Считается, что значение не менее 1.6 является оптимальным для Profit Factor.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Риск-менеджмент\" data-entity-type=\"file\" data-entity-uuid=\"e5f35707-f6d0-46d0-b7f3-7ac1ef909f28\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%B8%D1%81%D0%BA%205.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЕсли же профит-фактор больше 1.6, это свидетельствует о повышении эффективности выбранного метода торговли. Profit Factor является результатом деления валовой прибыли на валовой убыток за конкретный отрезок времени. Желательно высчитывать его на большем временном промежутке, поскольку тогда он более объективен.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003ES(Pi) \u002F S(Li) = Profit Factor, где\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003ES(Pi) — валовая прибыль, а S(Li) — валовой убыток.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОчевидно, что в случае возросших убытков трейдер не может рассчитывать на прибыль. Profit Factor играет роль своеобразного фильтра, выявляющего низкоэффективные методы торговли, способные быстро обнулить депозит. Показатель отражает не только результат, но и динамику работы трейдера. Приносит реальную пользу в ряде случаев:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003Eоценка собственного трейдинга;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eизучение инвестиционного предложения;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003Eанализ предложения продавцов.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EСпециалисты советуют выбрать несколько основных показателей, предоставляющих информацию о рисках, прибыли и о некоторых соотношениях между ними. Чтобы оценить работу на рынке и улучшить способ торговли, нужно обязательно анализировать весь процесс трейдинга, а не только конечный результат. Будет совсем нелишним наблюдать за деятельностью коллег, поскольку у них есть чему поучиться. Инвесторы обязательно делают это с целью выбора лучшего управляющего.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EВыводы\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EПодводя итоги всего вышесказанного, следует учесть несколько основных моментов, чтобы оптимизировать трейдинг. Они просты, но обязательны для выполнения:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EПо каждой торговой операции вычисляется максимальный риск потери депозита. Расчет производится в процентах к общей сумме денежных средств на счете и зависит от стиля торговли. Ограничиваются возможные потери стоп-лоссом.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EСледует учитывать риски потерь за конкретный временной интервал: день, неделю, месяц. Учитывается эмоциональное состояние трейдера. Следует точно определить, с какой суммой ему не жалко расстаться. Если в течение торгового дня потери вызывают у трейдера подавленное состояние, то торговлю следует временно прекратить. Нужно успокоиться, а затем хладнокровно проанализировать произошедшее. К трейдингу можно вернуться, когда эмоции уйдут и будут сделаны правильные выводы с учетом случившихся временных неудач.\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EОбязательное снижение объемов сделок после серии неудач вполовину, а возможно и в два раза. Это однозначно защитит депозит от разорения.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EДанные правила помогут приобрести опыт в торговле и, вероятнее всего, добиться успехов.\u003C\u002Fp\u003E\r\n",
				"summary": "Известно, что неотъемлемой частью прибыльной торговли являются риск-менеджмент и мани-менеджмент (Money Management). Профит всех трейдеров на Forex зависит от их умения управлять своими средствами как в периоды прибыли, так и в периоды просадок.\r\n\r\nК большому сожалению, многие начинающие трейдеры, да и не только они, пренебрегают риск-менеджментом. Новички наивно полагают, что есть некий волшебный подход к трейдингу на валютном рынке, заключающийся в получении правильной информации о нем, что позволяет практически всегда осуществлять лишь прибыльные торговые операции."
			},
			"alias": "risk-management-basics",
			"author": {
				"name": "Вадим Кальчук, клиент Трейдер"
			},
			"category": {
				"alias": "trading-strategies"
			},
			"video": null,
			"publicationDate": {
				"formatted": "2018-12-21T11:04:06",
				"timestamp": 1545390246
			}
		}, {
			"title": "Лучшие трендовые индикаторы Форекс",
			"body": {
				"value": "\u003Cp\u003EДля любого трейдера крайне важно правильно определить направление и силу трендового движения. К сожалению, единственное&nbsp;верное решение этой задачи отсутствует. Множество&nbsp;трейдеров&nbsp;торгуют на&nbsp;различных временных интервалах. По этой причине&nbsp;получаемые&nbsp;сигналы&nbsp;воспринимаются субъективно.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИндикаторы тренда&nbsp;дают возможность классифицировать направление ценового движения, определив его силу. Решение этой проблемы помогает инвесторам вовремя войти в рынок и получить хорошую прибыль.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EСредства технического анализа\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EТехническим анализом рынка&nbsp;Forex&nbsp;принято считать различные методы его исследования, дающие возможность прогнозировать ценовые движения активов. При этом обязательно учитываются исторические данные анализируемого актива. Именно корректное выполнение таких действий во многом помогает трейдерам вовремя принять правильное решение и получить профит.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКомпоненты технического анализа:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EГрафические фигуры;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EИндикаторы;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EЦеновые уровни;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EЯпонские свечи.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EИменно эти средства дают возможность&nbsp;эффективно прогнозировать рынок. Поскольку в ручном режиме этот процесс занимает довольно много времени, а трейдерам зачастую приходится принимать решения оперативно, наиболее популярными средствами ценового исследования являются&nbsp;Forex-индикаторы тренда.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EКлассификация индикаторов\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EБольшое многообразие этих инструментов делится на несколько групп в зависимости от того,&nbsp;какие задачи они призваны решать.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОбщие категории индикаторов:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EТрендовые индикаторы Forex&nbsp;помогают анализировать&nbsp;рынок&nbsp;на выбранном временном интервале.&nbsp;Они определяют господствующую тенденцию.&nbsp;Используются&nbsp;в трейдинге при такой тенденции;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EИндикаторы разворота являются частью описанной выше категории инструментов. Они не только анализируют ценовое движение, но и указывают&nbsp;точки возможных разворотов. Это способствует быстрому и оптимальному открытию ордеров на покупку или продажу (в зависимости от текущей ситуации);\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EИндикаторы построения каналов и уровней. Быстро определяют линии поддержки и сопротивления. Тем самым трейдер ориентируется в намеченном ценовом диапазоне, имея возможность вовремя открыть торговую позицию и вовремя закрыть ее;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EИнструменты, анализирующие основные параметры&nbsp;Forex, способствуют получению информации о текущих объемах всех рыночных сделок по определенному активу.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Ch2\u003ERSI индикатор\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EИндекс относительной силы — таково точное наименование этого&nbsp;Trend-индикатора. Он применим во многих торговых системах и на любых рынках. Инструмент является осциллятором, изменяющимся в определенной зоне. Зона имеет максимальное и минимальное ограничения. Значения&nbsp;RSI&nbsp;могут изменяться от 0 до 100.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EКогда на графике торгуемого актива индикаторная линия движется в коридоре от 70 до 100, считается, что рынок пребывает в состоянии перекупленности. Если наблюдается движение в диапазоне&nbsp;от&nbsp;0&nbsp;до&nbsp;30&nbsp;—&nbsp;это состояние перепроданности. RSI&nbsp;может предупреждать о развороте тенденции, ее силе и ценовом приближении к центральной линии.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EРассчитывается осциллятор по формуле&nbsp;RSI = 100 – 100 \u002F (1 + RS). Здесь компонент RS представляет собой соотношение среднего роста актива к его среднему падению. Индекс относительной силы определяется на основании 14 временных промежутков. Это рекомендованное стандартное количество периодов.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПрименительно к свечному графику инструмент сравнивает средний прирост со средней потерей, анализируя 14 последних баров. При этом учитывается и размер каждой свечи.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 1\" data-entity-type=\"file\" data-entity-uuid=\"6a907b96-a360-484c-9f47-049776238353\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%201_7.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНа рисунке можно наблюдать, каким образом вычисляется индекс относительной силы. В первой выделенной области значение RSI уменьшается с 52.5 до 33. Во второй области значение индекса увеличилось до 52.5. Анализ обоих участков был сделан индикатором на основании 14 свечей. Индикатор делает эти расчеты намного быстрее ручного способа.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EАлгоритм MACD\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EСпособ схождения-расхождения скользящих средних — дословный перевод описываемого&nbsp;индикатора тренда.&nbsp;Он также являет собой и осциллятор. Принадлежит к разряду подвальных, располагается под графиком актива и отображает разницу&nbsp;между&nbsp;экспоненциальными&nbsp;скользящими&nbsp;средними&nbsp;меньшего и большего временного промежутка. По умолчанию их периоды равны 12 и 26. Быстрая скользящая отображает краткосрочную тенденцию. Медленная&nbsp;—&nbsp;наоборот, более продолжительную по времени.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EРазличают два вида алгоритмов — линейный и гистограмму.&nbsp;Вторая&nbsp;являет собой разницу между сигнальной линией и индикатором. Вычисляется по формуле&nbsp;MACD Histogram&nbsp;=&nbsp;MACD&nbsp;–&nbsp;Signal.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЕе можно наблюдать под графиком актива в виде столбиков. Гистограмма показывает направление и силу текущей тенденции.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 2\" data-entity-type=\"file\" data-entity-uuid=\"8fd7dcdc-a89c-49c4-b46a-4421c197035b\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%202_7.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЛинейный инструмент выглядит&nbsp;как&nbsp;скользящая&nbsp;средняя&nbsp;с периодом 9. Это линия красного цвета на графике. Именно рынок с широким спектром колебаний даст возможность&nbsp;MACD&nbsp;проявить себя в полной мере. Четко выраженный тренд способствует тому, что от индикатора поступают корректные сигналы.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСигналы, поступающие от индикатора можно интерпретировать по-разному:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EПересечение барами осциллятора нулевого уровня. Когда это происходит сверху вниз — сигнал на продажу. Снизу вверх — на покупку;\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 3\" data-entity-type=\"file\" data-entity-uuid=\"1be0bfa9-292c-4374-9aa7-f69675a0d29c\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%203_5.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EMACD&nbsp;пересекает быструю (сигнальную) линию снизу вверх — момент покупок, пересечение сверху вниз свидетельствует о продаже актива. Тренд определяется по общеизвестным правилам. Это наличие локальных&nbsp;экстремумов;\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 4\" data-entity-type=\"file\" data-entity-uuid=\"19f3ac84-37d0-4f99-a29a-dab4f07b9e0f\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%204_5.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EДивергенция — расхождение показаний инструмента и цены на графике. Возможен разворот тенденции. Это отчетливо видно на рисунке снизу.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 5\" data-entity-type=\"file\" data-entity-uuid=\"9fd8f05d-972b-4f1b-a77a-7a6d316eddaf\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%205_3.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EПосле дивергенции нисходящий тренд пары&nbsp;EURJPY&nbsp;стал восходящим.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EГистограмма инструмента&nbsp;также&nbsp;помогает идентифицировать типичные графические паттерны. В их числе «голова-плечи», «двойная вершина», «двойное дно» и т.д.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПрофессиональные трейдеры&nbsp;оценивают&nbsp;MACD&nbsp;как инструмент, объединяющий в себе элементы оценки импульса и тренда. В то время&nbsp;как&nbsp;скользящие средние обеспечивают контроль тенденции, именно анализ разницы между ними не пропустит момент разворота.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EСтохастический осциллятор\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EСреди&nbsp;лучших индикаторов тренда на Forex&nbsp;смело можно выделить стохастический осциллятор, часто именуемый&nbsp;«стохастиком». Он определяет темп ценового изменения или импульса цены. Инструмент анализирует скорость рынка, определяя положение цен закрытия в диапазоне между максимальным и минимальным значениями. Расчет производится за конкретное число дней.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВыражаясь точнее — «стохастик» в процентах от 0 до 100 показывает соотношение между ценой закрытия и диапазоном&nbsp;между&nbsp;минимумом и&nbsp;максимумом. Выделенные зоны — от 0 до 30 (перепроданность), от 70 до 100 (перекупленность). В зависимости от характера трейдинга их можно изменить.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EЛучше всего&nbsp;Stochastic&nbsp;отрабатывает на широких ценовых диапазонах. Его с успехом используют на мягких трендах, имеющих легкий уклон вниз или такой же подъем вверх. Индикатор не дает желаемых результатов при устойчивой тенденции с незначительными коррекционными движениями.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EРазличают два способа функционирования этого индикатора:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EБыстрый. Он более точен, однако его недостатками являются излишняя чувствительность к различным шумам и большое число ложных сигналов;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003EМедленный. Более сглаженный. Но и количество подаваемых сигналов меньше, чем в первом варианте.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 6\" data-entity-type=\"file\" data-entity-uuid=\"f2cbe6f6-fd5d-46a4-b0bc-6ccd4275bb7a\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%206_2.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EДля корректной настройки «стохастика» существуют два показателя:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003E%К&nbsp;— период,&nbsp;соответствующий работе быстрого&nbsp;Stochastic.&nbsp;Несмотря на то, что&nbsp;по умолчанию изначально выставлено значение 3, все же рекомендуют 13. На графике он отображен в виде сплошной линии синего цвета;\u003C\u002Fli\u003E\r\n\t\u003Cli\u003E%D — замедленный период. Сигнальная линия красного цвета выглядит более плавно. Если значения увеличить, будут отфильтрованы ложные сигналы.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003EПомимо этих настроек есть дополнительные, изменяемые по желанию трейдера: замедление, цены, метод МА.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 7\" data-entity-type=\"file\" data-entity-uuid=\"4515d85a-9175-41fc-af8a-80c82b638d49\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%207_2.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EStochastic с успехом применим для&nbsp;следующих&nbsp;методик: скальпинг, торговля в ценовом коридоре, трейдинг на пробой и торговля по тренду. Удобный момент для входа в длинную позицию&nbsp;—&nbsp;когда в зоне перепроданности наблюдается пересечение красной линии синей, снизу вверх. Активация короткой позиции осуществляется, когда в диапазоне перекупленности&nbsp;кривая синего цвета пересекает красную сверху вниз.\u003C\u002Fp\u003E\r\n\r\n\u003Ch2\u003EИнструмент МА\u003C\u002Fh2\u003E\r\n\r\n\u003Cp\u003EВходит в число популярнейших&nbsp;индикаторов тренда. В трейдерской среде его часто именуют «мувингом».&nbsp;Moving Average&nbsp;— полное наименование инструмента. Один из&nbsp;наиболее&nbsp;часто используемых индикаторов&nbsp;Forex. Является компонентом и дополнением&nbsp;более сложных алгоритмов в том или ином виде.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E«Мувинг» предназначен для определения среднего ценового значения за выбранный промежуток времени. Существуют несколько видов&nbsp;Moving Average:\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003ESMA — простая скользящая. Алгоритм отображает среднюю цену за выбранный временной промежуток. При установке в&nbsp;MetaTrader&nbsp;значения 10 (настройки инструмента)&nbsp;алгоритм будет высчитывать сумму 10 последних цен закрытия и открытия, которая поделена на количество выбранных периодов;\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 8\" data-entity-type=\"file\" data-entity-uuid=\"e91bcae1-17f3-4739-a7e4-8fdceace2724\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%208.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EЕМА — экспоненциальная скользящая. Была создана для уменьшения задержки SMA. В расчете учитывается тот факт, что новые цены более приоритетны,&nbsp;нежели старые. Достоинство ЕМА заключается не только в сглаживании цены, но и в быстром реагировании на ее изменение. Поэтому индикатором часто пользуются для внутридневного трейдинга;\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 9\" data-entity-type=\"file\" data-entity-uuid=\"c3a4ac4f-1939-449e-ba86-779efe17970b\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%209.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cul\u003E\r\n\t\u003Cli\u003EWMA&nbsp;— взвешенная скользящая. Являясь&nbsp;трендовым индикатором, убирает часть недостатков простой скользящей, делая запаздывания на вход в рынок значительно меньшими. Последним ценовым значениям придается больший вес. Инструмент быстрее,&nbsp;чем его предшественник,&nbsp;реагирует на рыночные изменения.\u003C\u002Fli\u003E\r\n\u003C\u002Ful\u003E\r\n\r\n\u003Cp\u003E\u003Cimg alt=\"Рис. 10\" data-entity-type=\"file\" data-entity-uuid=\"fd3e995d-8c05-46f9-8557-e4f99f375830\" src=\"\u002Fstorage\u002Finline-images\u002F%D0%A0%D0%98%D0%A1.%2010.JPG\" \u002F\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EНовички трейдинга должны помнить, что, используя совокупность инструментов прогнозирования, желательно выбрать&nbsp;2-3&nbsp;индикатора для трейдинга. В противном случае их обилие на графике выбранного актива будет вводить в заблуждение начинающего&nbsp;трейдера.\u003C\u002Fp\u003E\r\n",
				"summary": "Для любого трейдера крайне важно правильно определить направление и силу трендового движения. К сожалению, единственное верное решение этой задачи отсутствует. Множество трейдеров торгуют на различных временных интервалах. По этой причине получаемые сигналы воспринимаются субъективно.\r\n\r\nИндикаторы тренда дают возможность классифицировать направление ценового движения, определив его силу. Решение этой проблемы помогает инвесторам вовремя войти в рынок и получить хорошую прибыль."
			},
			"alias": "forex-trend-indicators",
			"author": {
				"name": "Вадим Кальчук, клиент Трейдер"
			},
			"category": {
				"alias": "financial-market-analysis"
			},
			"video": null,
			"publicationDate": {
				"formatted": "2018-12-20T07:05:38",
				"timestamp": 1545289538
			}
		}],
		"articleCategory": {}
	},
	"teachers": {
		"teachers": {
			"oalekseev": {
				"name": "Олег Алексеев",
				"alias": "oalekseev",
				"image": {
					"alt": "",
					"urls": {
						"mobile": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2020-12\u002FOA.png",
							"retina": "\u002Fstorage\u002F2020-12\u002FOA.png"
						},
						"tablet": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2020-12\u002FOA_0.png",
							"retina": "\u002Fstorage\u002F2020-12\u002FOA_0.png"
						},
						"desktop": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2020-12\u002FOA_1.png",
							"retina": "\u002Fstorage\u002F2020-12\u002FOA_1.png"
						}
					}
				},
				"position": "Преподаватель Академии трейдинга",
				"quote": "Наблюдайте за рынком, за другими трейдерами, накапливайте опыт, и через какое-то время ваш опыт начнет приносить вам прибыль. Подобные навыки обязательно развиваются со временем и шлифуются в процессе практики.",
				"seo": {
					"title": "Преподаватель Академии трейдинга",
					"description": "Преподаватель Академии трейдинга",
					"keywords": "",
					"og_title": "",
					"og_description": "",
					"h1": null
				},
				"seoOgImage": null,
				"thumbnail": {
					"alt": "",
					"urls": {
						"mobile": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2020-12\u002FOA_2.png",
							"retina": "\u002Fstorage\u002F2020-12\u002FOA_2.png"
						},
						"tablet": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2020-12\u002FOA_3.png",
							"retina": "\u002Fstorage\u002F2020-12\u002FOA_3.png"
						},
						"desktop": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2020-12\u002FOA_4.png",
							"retina": "\u002Fstorage\u002F2020-12\u002FOA_4.png"
						}
					}
				},
				"video": null,
				"body": {
					"value": "\u003Cp\u003EПорядка 10 лет успешно занимается инвестированием на финансовых рынках и консультированием клиентов с разным уровнем опыта, желающих эффективно вкладывать средства в валютный рынок Forex, не торгуя самостоятельно. Имеет богатый опыт формирования ПАММ-портфелей.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EСильные стороны: досконально понимает принципы работы ПАММ-сервиса; знает, как сделать первую инвестицию прибыльной. Обучает начинающих и опытных инвесторов избегать распространенных ошибок, принимать правильные решения. Стаж преподавательской деятельности — более 3 лет.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОсновные направления: технический анализ ПАММ-счетов, консультации по управлению инвестициями, создание эффективных ПАММ-портфелей.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EХобби: футбол, бокс, финансы, трейдинг.\u003C\u002Fp\u003E\r\n",
					"summary": "Эксперт по инвестициям с 8-летним опытом. Специализируется на техническом анализе ПАММ-счетов и создании эффективных ПАММ-портфелей."
				},
				"contacts": null,
				"languages": ["ru"]
			},
			"aziz_abdusalomov": {
				"name": "Азиз Абдусаломов",
				"alias": "aziz_abdusalomov",
				"image": {
					"alt": "",
					"urls": {
						"mobile": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-04\u002F%D0%90%D0%B1%D0%B4%D1%83%D1%81%D0%B0%D0%BB%D0%BE%D0%BC%D0%BE%D0%B21.png",
							"retina": "\u002Fstorage\u002F2021-04\u002F%D0%90%D0%B1%D0%B4%D1%83%D1%81%D0%B0%D0%BB%D0%BE%D0%BC%D0%BE%D0%B21.png"
						},
						"tablet": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-04\u002F%D0%90%D0%B1%D0%B4%D1%83%D1%81%D0%B0%D0%BB%D0%BE%D0%BC%D0%BE%D0%B21_0.png",
							"retina": "\u002Fstorage\u002F2021-04\u002F%D0%90%D0%B1%D0%B4%D1%83%D1%81%D0%B0%D0%BB%D0%BE%D0%BC%D0%BE%D0%B21_0.png"
						},
						"desktop": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-04\u002F%D0%90%D0%B1%D0%B4%D1%83%D1%81%D0%B0%D0%BB%D0%BE%D0%BC%D0%BE%D0%B21_1.png",
							"retina": "\u002Fstorage\u002F2021-04\u002F%D0%90%D0%B1%D0%B4%D1%83%D1%81%D0%B0%D0%BB%D0%BE%D0%BC%D0%BE%D0%B21_1.png"
						}
					}
				},
				"position": "Преподаватель Академии трейдинга",
				"quote": "Торговля на Forex доступна каждому. Будь то профессиональный трейдер или начинающий инвестор — любой может освоить это ремесло. Нужно лишь желание и капля усердия.",
				"seo": {
					"title": "Преподаватель Академии трейдинга",
					"description": "Преподаватель Академии трейдинга",
					"keywords": "",
					"og_title": "",
					"og_description": "",
					"h1": null
				},
				"seoOgImage": null,
				"thumbnail": {
					"alt": "",
					"urls": {
						"mobile": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-04\u002F%D0%90%D0%B1%D0%B4%D1%83%D1%81%D0%B0%D0%BB%D0%BE%D0%BC%D0%BE%D0%B21_2.png",
							"retina": "\u002Fstorage\u002F2021-04\u002F%D0%90%D0%B1%D0%B4%D1%83%D1%81%D0%B0%D0%BB%D0%BE%D0%BC%D0%BE%D0%B21_2.png"
						},
						"tablet": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-04\u002F%D0%90%D0%B1%D0%B4%D1%83%D1%81%D0%B0%D0%BB%D0%BE%D0%BC%D0%BE%D0%B21_3.png",
							"retina": "\u002Fstorage\u002F2021-04\u002F%D0%90%D0%B1%D0%B4%D1%83%D1%81%D0%B0%D0%BB%D0%BE%D0%BC%D0%BE%D0%B21_3.png"
						},
						"desktop": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-04\u002F%D0%90%D0%B1%D0%B4%D1%83%D1%81%D0%B0%D0%BB%D0%BE%D0%BC%D0%BE%D0%B21_4.png",
							"retina": "\u002Fstorage\u002F2021-04\u002F%D0%90%D0%B1%D0%B4%D1%83%D1%81%D0%B0%D0%BB%D0%BE%D0%BC%D0%BE%D0%B21_4.png"
						}
					}
				},
				"video": null,
				"body": {
					"value": "\u003Cp\u003EФинансовый эксперт с 7-летним стажем успешной торговли на валютном и фондовом рынках. Присоединился к команде «Трейдер» в начале 2018 года. Учился торговле на Forex самостоятельно. Предпочитает дейтрейдинг и свинг-трейд. Считает, что в торговле самое важное — это не торговать только потому, что хочется торговать. Надо уметь ждать, а дождавшись — быстро действовать. Активно занимается торговой и аналитической деятельностью.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EАвтор торговой стратегии Hunter, пользующейся огромной популярностью. В ней используется уникальная техника анализа рынка и ведения торговли без применения индикаторов. Опираясь на свой опыт, разрабатывает и внедряет нестандартные подходы с использованием графических методов технического анализа с учетом фундаментальных факторов, что позволяет получить наилучшие результаты в трейдинге. Имеет собственные обучающие методики.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EУвлечения: чтение книг, компьютерные игры, спорт и кино.\u003C\u002Fp\u003E\r\n",
					"summary": "Финансовый эксперт с 7-летним стажем успешной торговли на валютном и фондовом рынках. Автор торговой стратегии Hunter."
				},
				"contacts": null,
				"languages": ["ru"]
			},
			"sandulyak": {
				"name": "Виктория Сандуляк",
				"alias": "sandulyak",
				"image": {
					"alt": "",
					"urls": {
						"mobile": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-04\u002F%D0%A1%D0%B0%D0%BD%D0%B4%D1%83%D0%BB%D1%8F%D0%BA.png",
							"retina": "\u002Fstorage\u002F2021-04\u002F%D0%A1%D0%B0%D0%BD%D0%B4%D1%83%D0%BB%D1%8F%D0%BA.png"
						},
						"tablet": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-04\u002F%D0%A1%D0%B0%D0%BD%D0%B4%D1%83%D0%BB%D1%8F%D0%BA_0.png",
							"retina": "\u002Fstorage\u002F2021-04\u002F%D0%A1%D0%B0%D0%BD%D0%B4%D1%83%D0%BB%D1%8F%D0%BA_0.png"
						},
						"desktop": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-04\u002F%D0%A1%D0%B0%D0%BD%D0%B4%D1%83%D0%BB%D1%8F%D0%BA_1.png",
							"retina": "\u002Fstorage\u002F2021-04\u002F%D0%A1%D0%B0%D0%BD%D0%B4%D1%83%D0%BB%D1%8F%D0%BA_1.png"
						}
					}
				},
				"position": "Преподаватель Академии трейдинга",
				"quote": "Адекватный психологический настрой, четко сформированная стратегия, следование собственному торговому плану, а также соблюдение дисциплины и риск-менеджемента — основополагающие факторы успешного трейдинга. Торговать прибыльно может научиться каждый!",
				"seo": {
					"title": "Преподаватель Академии трейдинга",
					"description": "Трейдер на фондовом и валютном рынках с 2014 года, с трехлетним опытом преподавания в данной области. ",
					"keywords": "",
					"og_title": "",
					"og_description": "",
					"h1": null
				},
				"seoOgImage": null,
				"thumbnail": {
					"alt": "",
					"urls": {
						"mobile": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-04\u002F%D0%A1%D0%B0%D0%BD%D0%B4%D1%83%D0%BB%D1%8F%D0%BA_2.png",
							"retina": "\u002Fstorage\u002F2021-04\u002F%D0%A1%D0%B0%D0%BD%D0%B4%D1%83%D0%BB%D1%8F%D0%BA_2.png"
						},
						"tablet": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-04\u002F%D0%A1%D0%B0%D0%BD%D0%B4%D1%83%D0%BB%D1%8F%D0%BA_3.png",
							"retina": "\u002Fstorage\u002F2021-04\u002F%D0%A1%D0%B0%D0%BD%D0%B4%D1%83%D0%BB%D1%8F%D0%BA_3.png"
						},
						"desktop": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-04\u002F%D0%A1%D0%B0%D0%BD%D0%B4%D1%83%D0%BB%D1%8F%D0%BA_4.png",
							"retina": "\u002Fstorage\u002F2021-04\u002F%D0%A1%D0%B0%D0%BD%D0%B4%D1%83%D0%BB%D1%8F%D0%BA_4.png"
						}
					}
				},
				"video": null,
				"body": {
					"value": "\u003Cp\u003EТрейдер на фондовом и валютном рынках с 2014 года, с трехлетним опытом преподавания в данной области. Практикует индивидуальный подход в обучении трейдингу: от базовых знаний до самостоятельного принятия решений, разработки плана, технического и фундаментального анализов.&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EИмеет два высших образования: Экономическая Академия и Государственный Университет РМ. Дистанционно изучала «Анализ финансовых рынков» в НИУ ВШЭ.&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВ своей практике в основном использует технический анализ для торговли внутри дня и свинг-сделок.&nbsp;\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EУвлечения: йога, спорт, путешествия.\u003C\u002Fp\u003E\r\n",
					"summary": "Трейдер на фондовом и валютном рынках с 2014 года, с трехлетним опытом преподавания в данной области. "
				},
				"contacts": null,
				"languages": ["ru"]
			},
			"losev": {
				"name": "Александр Лосев",
				"alias": "losev",
				"image": {
					"alt": "",
					"urls": {
						"mobile": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-11\u002FLosev.png",
							"retina": "\u002Fstorage\u002F2021-11\u002FLosev.png"
						},
						"tablet": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-11\u002FLosev_0.png",
							"retina": "\u002Fstorage\u002F2021-11\u002FLosev_0.png"
						},
						"desktop": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-11\u002FLosev_1.png",
							"retina": "\u002Fstorage\u002F2021-11\u002FLosev_1.png"
						}
					}
				},
				"position": "Преподаватель Академии трейдинга",
				"quote": "Если вы поймете, что финансовые рынки были есть и будут, и научитесь на них зарабатывать деньги, то никакие кризисы вам не страшны. Вы будете финансово независимым человеком.",
				"seo": {
					"title": "Александр Лосев",
					"description": "Александр Лосев Преподаватель Академии трейдинга",
					"keywords": "",
					"og_title": "",
					"og_description": "",
					"h1": null
				},
				"seoOgImage": null,
				"thumbnail": {
					"alt": "",
					"urls": {
						"mobile": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-11\u002FLosev_2.png",
							"retina": "\u002Fstorage\u002F2021-11\u002FLosev_2.png"
						},
						"tablet": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-11\u002FLosev_3.png",
							"retina": "\u002Fstorage\u002F2021-11\u002FLosev_3.png"
						},
						"desktop": {
							"simple": "\u002Fstorage\u002Fstyles\u002Fretina_compression\u002Fpublic\u002F2021-11\u002FLosev_4.png",
							"retina": "\u002Fstorage\u002F2021-11\u002FLosev_4.png"
						}
					}
				},
				"video": null,
				"body": {
					"value": "\u003Cp\u003EПрактикующий трейдер, на финансовых рынках работает с 2004 года.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EОбучался на профессиональных курсах отечественных и зарубежных специалистов. В своей работе применяет простую и эффективную стратегию для получения стабильного результата на финансовых рынках (внутридневная, среднесрочная, долгосрочная торговля).\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EС 2014 года занимается обучением трейдеров, многие из которых начали свою успешную карьеру. Также специализируется на подготовке управляющих и инвесторов ПАММ-счетов.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EПреподает основы риск-менеджмента, технический и фундаментальный анализы валютного рынка. Большое внимание уделяет основам прикладной психологии биржевой торговли и инвестирования.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EХобби: спорт, история, финансы.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\r\n",
					"summary": "С 2014 года занимается обучением трейдеров, многие из которых начали свою успешную карьеру. Также специализируется на подготовке управляющих и инвесторов ПАММ-счетов."
				},
				"contacts": null,
				"languages": ["ru"]
			}
		},
		"schedule": {},
		"schedulePagination": {}
	}
};
(function() {
	var s;
	(s = document.currentScript || document.scripts[document.scripts.length - 1]).parentNode.removeChild(s);
}());
