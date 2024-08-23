import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fatchStatusActions } from "../store/fatchStatusSlice";

const FetchItem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  console.log(fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fatchStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fatchStatusActions.markFetchDone());
        dispatch(fatchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItem(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      <div>
        Fetch Done : {fetchStatus.fetchDone}
        Currently Fetch : {fetchStatus.currentlyFetching}
      </div>
    </>
  );
};

export default FetchItem;
