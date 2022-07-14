import { Controller } from "stimulus"
import Rails from "@rails/ujs"

export default class extends Controller {
  static targets = [ 'q', 'submitBtn', 'results' ]

  submit(event) {
    event.preventDefault();

    const value = this.qTarget.value;

    Rails.ajax({
      type: 'GET',
      url: `/posts/search?q=${value}`,
      success: (_data, _status, xhr) => {
        if (this.hasResultsTarget) {
          this.resultsTarget.innerHTML = xhr.response;
          Rails.enableElement(this.submitBtnTarget);
        }
      }
    })
  }

  reset(event) {
    this.resultsTarget.innerHTML = ''
  }
}
