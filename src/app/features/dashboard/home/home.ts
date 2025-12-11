import { Component } from '@angular/core';

import { Profile } from '../../../shared/components/profile/profile';
import { ThemeToggle } from '../../../shared/components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-home',
  imports: [Profile, ThemeToggle],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
