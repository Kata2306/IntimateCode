package com.IntimateCode.backend.service;

import com.IntimateCode.backend.model.classes.ApplicationUser;
import com.IntimateCode.backend.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UserService implements UserDetailsService {


    private final PasswordEncoder encoder;


    private final UserRepository userRepository;

    public UserService(PasswordEncoder encoder, UserRepository userRepository) {
        this.encoder = encoder;
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        System.out.println("In the user details service");

        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("user is not valid"));
    }

    public List<ApplicationUser> getAllUsers () {
        return userRepository.findAll();
    }

    public ApplicationUser getSingleUser(Long id){
        Optional<ApplicationUser> user = userRepository.findById(Math.toIntExact(id));
        return user.orElse(null);
    }

}