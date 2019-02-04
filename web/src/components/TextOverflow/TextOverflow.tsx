import * as React from "react";
import TextOverflow from "@buildo/bento/components/TextOverflow";
import Tooltip from "@buildo/bento/components/Tooltip";

import "@buildo/bento/components/tooltip.scss";

export default ({ label }: { label: string }) => (
  <TextOverflow label={label}>
    {self => (
      <Tooltip
        popover={{ content: label, attachToBody: true }}
        style={{ width: "100%" }}
      >
        {self}
      </Tooltip>
    )}
  </TextOverflow>
);
