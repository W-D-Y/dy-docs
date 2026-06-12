import type { ApiResponse, DocumentSummary } from '@dy-docs/shared';

export class AppService {
  getHello(): ApiResponse<DocumentSummary> {
    return {
      data: {
        id: 'demo-doc',
        title: '第一篇文档',
        updatedAt: new Date().toISOString(),
      },
      message: 'Hello from API',
    };
  }
}
