import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true,
})
export class AppProfile {
  @Prop() name: string;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    debugger;
    if (this.name) {
      return (
        <div class="app-profile">
          <p>I will see in my Github profile. My message was passed in through a route param!</p>
        </div>
      );
    }
  }
}
