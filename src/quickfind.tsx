import { List, Icon } from "@raycast/api";
import { getTimezonesWithOffsets } from "./getTimezones";
import {DateTime} from "luxon"

export default function Command() {
  const options = getTimezonesWithOffsets()
  return (
    <List>
      {options.map((option) => {
        const city = option.name.split("/")[1].replace("_", " ")
        const date = DateTime.now().setZone(option.name);
        const dateString = date.toLocaleString(DateTime.TIME_24_SIMPLE);

        return (
          <List.Item
            key={option.name}
            title={city}
            subtitle={option.offset}
            accessories={[{ text:dateString}]}
          />
        );
      })}
    </List>
  );
}
