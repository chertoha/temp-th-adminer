import { Button } from "@mui/material";

import { useLazyGetSubscribersDataQuery } from "@/redux/subscribers/subscribersApi";

const DownloadSubscribersButton = () => {
  const [exportSubscribers] = useLazyGetSubscribersDataQuery();

  const handler = async () => {
    const result = await exportSubscribers().unwrap();

    if (result) {
      const blob = new Blob([result], { type: "text/csv" });

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "subscribers.csv";
      a.click();

      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <Button variant="outlined" size="large" onClick={handler}>
      Експортувати
    </Button>
  );
};
export default DownloadSubscribersButton;
