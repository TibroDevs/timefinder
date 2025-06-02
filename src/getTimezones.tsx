export interface TimezoneWithOffset {
    name: string;
    offset: string;
  }
  
  export function getTimezonesWithOffsets(): { name: string; offset: string }[] {
    const timezones = Intl.supportedValuesOf("timeZone");
    const now = new Date();
  
    return timezones.map((tz) => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        timeZoneName: 'longOffset'
      });
      const parts = formatter.formatToParts(now);
      const offsetPart = parts.find((part) => part.type === "timeZoneName");
      let offset = offsetPart?.value || "GMT+00";
      if(offset == "GMT") {
        offset = "GMT+00:00"
      }
      return {
        name: tz,
        offset,
      };
    });
  }
  