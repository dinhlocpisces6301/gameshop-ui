function useNotification(ref) {
  const addToast = (mode, message = '') => {
    if (message === '') {
      message = 'Message content';
    }
    ref.current.addMessage({ mode: mode, message: message });
  };
  return addToast;
}

export default useNotification;
