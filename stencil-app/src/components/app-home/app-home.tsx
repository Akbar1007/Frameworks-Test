import { Component, h } from '@stencil/core';
import { Router } from '../../';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to this Stencil App. You can click on the link below to check out my other projects in my GitHub profile on <a href="https://github.com/Akbar1007">Akbar1007</a>.
        </p>
        <button onClick={() => Router.push('/profile/stencil')}>Profile Page</button>
      </div>
    );
  }
}
