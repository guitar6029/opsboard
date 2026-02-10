import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from '../../../ui/nav/nav';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, Nav],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {}
