package com.vrss.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


import java.net.http.*;
import java.net.URI;
import java.time.Duration;
import java.util.Base64;
import javax.net.ssl.SSLContext;


@Service
public class VrssService {

	private RestTemplate restTemplate;

	public VrssService(RestTemplate restTemplate) {
		super();
		this.restTemplate = restTemplate;
	}

	public void connectToASMLServer() {

//		String url = "https://f28ecentre01.intel.com/ecweb/echttpproxy/ASML.TWINSCAN.MEU04.HTTP/AIDwebdav/root/CT/CTRW_log_mEU04.cur";
//		String response = restTemplate.

//		System.out.println(response);

	}

	HttpClient client = HttpClient.newBuilder()
			.sslContext(buildSslContextTrustingPem("C:/.../f28ecentre01-intel-com-chain.pem"))
			.connectTimeout(Duration.ofSeconds(5)).build();

	String basic = Base64.getEncoder().encodeToString("yourUser:yourPassword".getBytes());
	HttpRequest req = HttpRequest.newBuilder().uri(URI.create("https://f28ecentre01.intel.com/your/api"))
			.header("Authorization", "Basic " + basic).GET().build();

	HttpResponse<String> resp = client.send(req, HttpResponse.BodyHandlers.ofString());
	String body = resp.body();

}
