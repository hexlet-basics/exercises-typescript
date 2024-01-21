// BEGIN
enum LoadingStatus {
  Loading = 'Loading',
  Success = 'Success',
  Error = 'Error',
}

type DataState =
  | { status: LoadingStatus.Loading }
  | { status: LoadingStatus.Success; data: number }
  | { status: LoadingStatus.Error; error: Error };

const handleData = (dataState: DataState): string => {
  switch (dataState.status) {
    case LoadingStatus.Loading:
      return 'loading...';
    case LoadingStatus.Success:
      return String(dataState.data);
    case LoadingStatus.Error:
      return dataState.error.message;
    default:
      return 'unknown';
  }
};
// END

export { DataState, LoadingStatus };
export default handleData;
