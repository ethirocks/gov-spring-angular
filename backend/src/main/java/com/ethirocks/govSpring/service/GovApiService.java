package com.ethirocks.govSpring.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GovApiService {

    private static final String API_URL = "https://api.census.gov/data/2020/acs/acs5?get=NAME,B01001_001E&for=state:*";

    public List<Map<String, Object>> fetchAndFormatData() {
        // Fetch data from the API
        WebClient webClient = WebClient.create();
        String[][] rawData = webClient.get()
                .uri(API_URL)
                .retrieve()
                .bodyToMono(String[][].class)
                .block();

        // Process and format the data
        List<Map<String, Object>> formattedData = new ArrayList<>();
        if (rawData != null && rawData.length > 1) {
            String[] headers = rawData[0]; // First row contains headers
            for (int i = 1; i < rawData.length; i++) { // Start from the second row
                Map<String, Object> row = new HashMap<>();
                for (int j = 0; j < headers.length; j++) {
                    row.put(headers[j], rawData[i][j]);
                }
                formattedData.add(row);
            }
        }

        return formattedData;
    }
}
