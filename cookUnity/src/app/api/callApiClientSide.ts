export interface CallApiGatewayResponse {
  data: any | null;
  error: any;
  success?: boolean;
  hasError?: boolean;
  rawResponse?: any;
}

export const callApiGatewayClientSide = async (
  url: string,
  options?: {
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';
    body?: RequestInit['body'];
  },
): Promise<CallApiGatewayResponse> => {
  const body = options?.body ? { body: options?.body } : {};
  try {
    const response = await fetch(`/api`, {
      method: options?.method || 'GET',
      ...body,
      headers: {
        'X-Url-Consume': url,
      },
    });

    const parsedBody = await response.json();

    return {
      data: parsedBody,
      rawResponse: parsedBody,
      error: parsedBody?.errors || null,
      success: response?.ok || false,
    };
  } catch (err) {
    /* eslint-disable no-console */
    console.error(err);
    return { data: null, error: err, rawResponse: null, hasError: true };
  }
};
