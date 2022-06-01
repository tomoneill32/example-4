class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.repoData = null;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.repoData = repoData;
        this.display();
        repoInputEl.value = null;
      });
    });
  }

  display() {
    const repoNameEl = document.querySelector('#repo-name');
    const repoDescriptionEl = document.querySelector('#repo-description');
    const repoImage = document.createElement('img');
    repoImage.id = ('#repo-image');
    repoImage.src = this.repoData.organization.avatar_url;
    document.body.append(repoImage);

    repoNameEl.innerText = this.repoData.full_name;
    repoDescriptionEl.innerText = this.repoData.description;
  }
}

module.exports = GithubView;