import runtime from 'offline-plugin/runtime';

runtime.install({
  // Go offline on installed
  onInstalled() {
    // openOfflineReady()
  },

  // do something
  onUpdating() {
  },

  // When an update is ready, tell ServiceWorker to take control immediately:
  onUpdateReady() {
    console.log('update ready');
    runtime.applyUpdate();
  },

  // Reload to get the new version:
  onUpdated() {
    console.log('updated');
  },

  onUpdateFailed: () => {
    console.log('SW Event:', 'onUpdateFailed');
  },
});
