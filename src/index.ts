/// <reference path="../node_modules/inversify-dts/inversify/inversify.d.ts" />

/*
 * Dependency injection
 */
export { injectable, inject           } from "inversify";

/**
 * Framework API
 */
export { IBundle                      } from "./robotlegs/bender/framework/api/IBundle";
export { IConfig                      } from "./robotlegs/bender/framework/api/IConfig";
export { IContext                     } from "./robotlegs/bender/framework/api/IContext";
export { IExtension                   } from "./robotlegs/bender/framework/api/IExtension";
export { IGuard                       } from "./robotlegs/bender/framework/api/IGuard";
export { IHook                        } from "./robotlegs/bender/framework/api/IHook";
export { IInjector                    } from "./robotlegs/bender/framework/api/IInjector";
export { ILifecycle                   } from "./robotlegs/bender/framework/api/ILifecycle";
export { ILogger                      } from "./robotlegs/bender/framework/api/ILogger";
export { ILogTarget                   } from "./robotlegs/bender/framework/api/ILogTarget";
export { IMatcher                     } from "./robotlegs/bender/framework/api/IMatcher";
export { LifecycleError               } from "./robotlegs/bender/framework/api/LifecycleError";
export { LifecycleEvent               } from "./robotlegs/bender/framework/api/LifecycleEvent";
export { LifecycleState               } from "./robotlegs/bender/framework/api/LifecycleState";
export { LogLevel                     } from "./robotlegs/bender/framework/api/LogLevel";
export { PinEvent                     } from "./robotlegs/bender/framework/api/PinEvent";

/**
 * Framework Implementation
 */
export { ConfigManager                } from "./robotlegs/bender/framework/impl/ConfigManager";
export { Context                      } from "./robotlegs/bender/framework/impl/Context";
export { ExtensionInstaller           } from "./robotlegs/bender/framework/impl/ExtensionInstaller";
export { Lifecycle                    } from "./robotlegs/bender/framework/impl/Lifecycle";
export { LifecycleTransition          } from "./robotlegs/bender/framework/impl/LifecycleTransition";
export { Logger                       } from "./robotlegs/bender/framework/impl/Logger";
export { LogManager                   } from "./robotlegs/bender/framework/impl/LogManager";
export { MessageDispatcher            } from "./robotlegs/bender/framework/impl/MessageDispatcher";
export { ObjectProcessor              } from "./robotlegs/bender/framework/impl/ObjectProcessor";
export { Pin                          } from "./robotlegs/bender/framework/impl/Pin";
export { RobotlegsInjector            } from "./robotlegs/bender/framework/impl/RobotlegsInjector";
export { UID                          } from "./robotlegs/bender/framework/impl/UID";

/**
 * Framework Functions
 */
export { applyHooks                   } from "./robotlegs/bender/framework/impl/applyHooks";
export { guardsApprove                } from "./robotlegs/bender/framework/impl/guardsApprove";
export { safelyCallBack               } from "./robotlegs/bender/framework/impl/safelyCallBack";

/**
 * Event Dispatcher
 */
export { IEventDispatcher             } from "./robotlegs/bender/events/api/IEventDispatcher";
export { EventDispatcher              } from "./robotlegs/bender/events/impl/EventDispatcher";

/**
 * Extensions
 */

// CommandCenter
export { CommandPayload               } from "./robotlegs/bender/extensions/commandCenter/api/CommandPayload";
export { ICommand                     } from "./robotlegs/bender/extensions/commandCenter/api/ICommand";
export { ICommandExecutor             } from "./robotlegs/bender/extensions/commandCenter/api/ICommandExecutor";
export { ICommandMapping              } from "./robotlegs/bender/extensions/commandCenter/api/ICommandMapping";
export { ICommandMappingList          } from "./robotlegs/bender/extensions/commandCenter/api/ICommandMappingList";
export { ICommandTrigger              } from "./robotlegs/bender/extensions/commandCenter/api/ICommandTrigger";
export { ICommandConfigurator         } from "./robotlegs/bender/extensions/commandCenter/dsl/ICommandConfigurator";
export { ICommandMapper               } from "./robotlegs/bender/extensions/commandCenter/dsl/ICommandMapper";
export { ICommandUnmapper             } from "./robotlegs/bender/extensions/commandCenter/dsl/ICommandUnmapper";
export { CommandExecutor              } from "./robotlegs/bender/extensions/commandCenter/impl/CommandExecutor";
export { CommandMapper                } from "./robotlegs/bender/extensions/commandCenter/impl/CommandMapper";
export { CommandMapping               } from "./robotlegs/bender/extensions/commandCenter/impl/CommandMapping";
export { CommandMappingList           } from "./robotlegs/bender/extensions/commandCenter/impl/CommandMappingList";
export { CommandTriggerMap            } from "./robotlegs/bender/extensions/commandCenter/impl/CommandTriggerMap";
export { NullCommandTrigger           } from "./robotlegs/bender/extensions/commandCenter/impl/NullCommandTrigger";

// ContextView
export { ContextView                  } from "./robotlegs/bender/extensions/contextView/ContextView";
export { ContextViewExtension         } from "./robotlegs/bender/extensions/contextView/ContextViewExtension";
export { ContextViewListenerConfig    } from "./robotlegs/bender/extensions/contextView/ContextViewListenerConfig";
export { StageSyncExtension           } from "./robotlegs/bender/extensions/contextView/StageSyncExtension";

// DirectCommandMap
export { IDirectCommandMap            } from "./robotlegs/bender/extensions/directCommandMap/api/IDirectCommandMap";
export { DirectCommandMapExtension    } from "./robotlegs/bender/extensions/directCommandMap/DirectCommandMapExtension";

// EnhancedLogging
export { ConsoleLoggingExtension      } from "./robotlegs/bender/extensions/enhancedLogging/ConsoleLoggingExtension";
export { InjectableLoggerExtension    } from "./robotlegs/bender/extensions/enhancedLogging/InjectableLoggerExtension";

// EventCommandMap
export { IEventCommandMap             } from "./robotlegs/bender/extensions/eventCommandMap/api/IEventCommandMap";
export { EventCommandMapExtension     } from "./robotlegs/bender/extensions/eventCommandMap/EventCommandMapExtension";

// EventDispatcher
export { EventDispatcherExtension     } from "./robotlegs/bender/extensions/eventDispatcher/EventDispatcherExtension";

// LocalEventMap
export { IEventMap                    } from "./robotlegs/bender/extensions/localEventMap/api/IEventMap";
export { LocalEventMapExtension       } from "./robotlegs/bender/extensions/localEventMap/LocalEventMapExtension";

// MediatorMap
export { IMediator                    } from "./robotlegs/bender/extensions/mediatorMap/api/IMediator";
export { IMediatorMap                 } from "./robotlegs/bender/extensions/mediatorMap/api/IMediatorMap";
export { MediatorMapExtension         } from "./robotlegs/bender/extensions/mediatorMap/MediatorMapExtension";

// ViewManager
export { ManualStageObserverExtension } from "./robotlegs/bender/extensions/viewManager/ManualStageObserverExtension";
export { StageCrawlerExtension        } from "./robotlegs/bender/extensions/viewManager/StageCrawlerExtension";
export { StageObserverExtension       } from "./robotlegs/bender/extensions/viewManager/StageObserverExtension";
export { ViewManagerExtension         } from "./robotlegs/bender/extensions/viewManager/ViewManagerExtension";
export { IViewHandler                 } from "./robotlegs/bender/extensions/viewManager/api/IViewHandler";
export { IViewManager                 } from "./robotlegs/bender/extensions/viewManager/api/IViewManager";

/**
 * Bundles
 */
export { MVCSBundle                   } from "./robotlegs/bender/bundles/mvcs/MVCSBundle";
