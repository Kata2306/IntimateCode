package com.IntimateCode.backend.service;

import com.IntimateCode.backend.model.classes.Enduser;
import com.IntimateCode.backend.repository.EnduserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnduserService {
    private final EnduserRepository enduserRepository;

    public EnduserService(EnduserRepository enduserRepository) {
        this.enduserRepository = enduserRepository;
    }

    public List<Enduser> getAllUsers (){
        return enduserRepository.findAll();
    }
}
