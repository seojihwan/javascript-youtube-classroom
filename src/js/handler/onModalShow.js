import { LOCAL_STORAGE_KEY } from '../utils/constant.js';
import storage from '../utils/localStorage.js';
import { $ } from '../utils/querySelector.js';
import {
  openModal,
  renderClips,
  renderSaveVideoCount,
  renderRecentKeywords,
} from '../view/modal.js';

export const onModalShow = () => {
  const savedClips = storage.get(LOCAL_STORAGE_KEY.SAVED_CLIPS) ?? [];
  const savedClipIds = savedClips.map((savedClip) => savedClip.id.videoId);
  const recentKeywords = storage.get(LOCAL_STORAGE_KEY.RECENT_KETWORDS) ?? [];
  const recentSearchResults = storage.get(
    LOCAL_STORAGE_KEY.RECENT_SEARCH_RESULTS,
  );

  openModal();
  renderRecentKeywords(recentKeywords);
  renderSaveVideoCount(savedClips);

  if (recentSearchResults) {
    renderClips(recentSearchResults, savedClipIds);
  }
  $('[data-js="youtube-search-modal__input"]').focus();
};
