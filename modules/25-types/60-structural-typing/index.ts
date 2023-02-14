// BEGIN
enum LoadingStatus {
  loading = 'loading',
  success = 'success',
  error = 'error',
}

type DataState =
  | { status: LoadingStatus.loading }
  | { status: LoadingStatus.success; data: number }
  | { status: LoadingStatus.error; error: Error };

const handleData = (dataState: DataState) => {
  switch (dataState.status) {
    case LoadingStatus.loading:
      return 'loading...';
    case LoadingStatus.success:
      return String(dataState.data);
    case LoadingStatus.error:
      return dataState.error.message;
    default:
      return 'unknown';
  }
};
// END

export { DataState, LoadingStatus };
export default handleData;
