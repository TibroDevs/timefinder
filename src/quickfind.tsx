import { List, Icon } from "@raycast/api";

export default function Command() {
  return (
    <List>
      <List.Item
        icon={Icon.Bird}
        title="Brisbane"
        subtitle="GMT+10"
        accessories={[{ text: `10:00 pm :)`, icon: Icon.Clock }]}
        
      />
      <List.Item
        icon={Icon.Bird}
        title="bob"
      />
      <List.Item
        icon={Icon.Bird}
        title="Greeting"
      />
      <List.Item
        icon={Icon.Bird}
        title="sfsfs"
      />
      <List.Item
        icon={Icon.Bird}
        title="dad"
      />
      <List.Item
        icon={Icon.Bird}
        title="baba"
      />
      <List.Item
        icon={Icon.Bird}
        title="hghg"
      />
    </List>
  );
}
