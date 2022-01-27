import React, { useEffect, useState } from "react";
import config from "shared/config";

import copy from "copy-text-to-clipboard";
import { Button, Tooltip } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

type Props = {
  target?: string;
  version?: string;
};

const CopyUrlButton: React.FC<Props> = ({ version, target }) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }

    return undefined;
  }, [copied]);
  const location = useLocation();

  return (
    <Tooltip
      visible={copied}
      trigger={[]}
      placement="top"
      title="Copied to clipboard"
    >
      <Button
        onClick={() => {
          if (version) {
            copy(
              `${
                config.isElectron ? "buddy.edgetx.org" : window.location.host
              }/#${location.pathname}?version=${version}${
                target ? `&target=${target}` : ""
              }`
            );
            setCopied(true);
          }
        }}
        disabled={!version}
        type="link"
        size="small"
        icon={<CopyOutlined />}
      >
        Copy URL
      </Button>
    </Tooltip>
  );
};

export default CopyUrlButton;
