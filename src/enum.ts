export enum ChromeAICapabilityAvailability {
  /**
   * the device or browser does not support prompting a language model at all
   */
  NO = 'no',
  /**
   * the device or browser supports prompting a language model, but it needs to be downloaded before it can be used
   */
  AFTER_DOWNLOAD = 'after-download',
  /**
   * the device or browser supports prompting a language model and it’s ready to be used without any downloading steps
   */
  READILY = 'readily',
}

export interface ChromeAICapabilities {
  /**
   * the availability of the capability
   */
  available: ChromeAICapabilityAvailability;
  /**
   * the default temperature for the capability
   */
  defaultTemperature: number;
  /**
   * the default top k for the capability
   */
  defaultTopK: number;
  /**
   * the maximum top k for the capability
   */
  maxTopK: number;
}
