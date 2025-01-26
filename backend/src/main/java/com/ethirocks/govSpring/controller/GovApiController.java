package com.ethirocks.govSpring.controller;

import com.ethirocks.govSpring.service.GovApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class GovApiController {

    @Autowired
    private GovApiService govApiService;

    @GetMapping("/data")
    public List<Map<String, Object>> getGovData() {
        return govApiService.fetchAndFormatData();
    }
}
