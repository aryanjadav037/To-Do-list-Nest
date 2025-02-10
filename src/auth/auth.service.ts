/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../User/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';  // Fixed the import for bcrypt

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // Method to sign in a user and return a JWT token
  async signIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    // Find the user by name
    const user = await this.userService.findByUsername(username);

    // Check if the user exists and the password matches
    if (user && (await bcrypt.compare(password, user.password))) {
      // Proceed with creating a JWT token
      const payload = { id: user._id, username: user.username };

      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } else {
      // If user not found or password is incorrect, throw an UnauthorizedException
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
