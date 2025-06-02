export interface TimezoneWithOffset {
    name: string;
    offset: string;
  }
  
  export function getTimezonesWithOffsets(): TimezoneWithOffset[] {
    const timezones = Intl.supportedValuesOf("timeZone");
    const now = new Date();
  
    return timezones.map((tz) => {
      const dateInTz = new Date(
        now.toLocaleString("en-US", { timeZone: tz })
      );
  
      const offsetMinutes = -dateInTz.getTimezoneOffset();
      const hours = Math.floor(offsetMinutes / 60);
      const minutes = Math.abs(offsetMinutes % 60);
      const sign = hours >= 0 ? "+" : "-";
  
      return {
        name: tz,
        offset: `GMT${sign}${String(Math.abs(hours)).padStart(2, "0")}${
          minutes > 0 ? `:${String(minutes).padStart(2, "0")}` : ""
        }`,
      };
    });
  }