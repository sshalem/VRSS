package com.vrss.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

@Service
public class VrssService {

	@Autowired
	private RestTemplate restTemplate;

	public String connectToASMLServer() {
		String url = "https://f28ecentre01.intel.com/ecweb/echttpproxy/ASML.TWINSCAN.MEU04.HTTP/AIDwebdav/root/CT/CTRW_log_mEU04.cur";

		String username = "asml_sshalem";
		String password = "Odel1!!";

		HttpHeaders headers = new HttpHeaders();
		headers.setBasicAuth(username, password);

		HttpEntity<Void> request = new HttpEntity<>(headers);

		ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);

		return response.getBody();
	}

}
