// vite.config.ts
import react from "file:///D:/Programming/My%20Projects/DevIT/node_modules/.pnpm/@vitejs+plugin-react@4.3.3_vite@5.4.11_@types+node@22.9.1_terser@5.36.0_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///D:/Programming/My%20Projects/DevIT/node_modules/.pnpm/vite@5.4.11_@types+node@22.9.1_terser@5.36.0/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///D:/Programming/My%20Projects/DevIT/node_modules/.pnpm/vite-plugin-pwa@0.20.5_vite@5.4.11_@types+node@22.9.1_terser@5.36.0__workbox-build@7.3.0_@typ_rrkhdfakddqrchzy7at57uevye/node_modules/vite-plugin-pwa/dist/index.js";

// vite.config.paths.ts
import path from "path";
var __vite_injected_original_dirname = "D:\\Programming\\My Projects\\DevIT\\apps\\client";
var alias = {
  "@": path.resolve(__vite_injected_original_dirname, "./src"),
  "@components": path.resolve(__vite_injected_original_dirname, "./src/components"),
  "@pages": path.resolve(__vite_injected_original_dirname, "./src/pages"),
  "@styles": path.resolve(__vite_injected_original_dirname, "./src/styles"),
  "@svgs": path.resolve(__vite_injected_original_dirname, "./src/assets/icons/svgs"),
  "@assets": path.resolve(__vite_injected_original_dirname, "./src/assets"),
  "@utils": path.resolve(__vite_injected_original_dirname, "./src/utils"),
  "@providers": path.resolve(__vite_injected_original_dirname, "./src/providers"),
  "@store": path.resolve(__vite_injected_original_dirname, "./src/store"),
  "@api": path.resolve(__vite_injected_original_dirname, "./src/api")
};
var build = {
  outDir: path.resolve(__vite_injected_original_dirname, "./dist"),
  chunkSizeWarningLimit: 1300,
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes("node_modules")) {
          return "vendor";
        }
      }
    }
  }
};

// vite.config.ts
import macros from "file:///D:/Programming/My%20Projects/DevIT/node_modules/.pnpm/vite-plugin-babel-macros@1.0.6_vite@5.4.11_@types+node@22.9.1_terser@5.36.0_/node_modules/vite-plugin-babel-macros/dist/plugin.js";
import svgr from "file:///D:/Programming/My%20Projects/DevIT/node_modules/.pnpm/vite-plugin-svgr@3.3.0_rollup@2.79.2_typescript@5.6.3_vite@5.4.11_@types+node@22.9.1_terser@5.36.0_/node_modules/vite-plugin-svgr/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    macros(),
    svgr({ exportAsDefault: true }),
    VitePWA({
      manifest: {
        name: "Shmorhun DevIT Client",
        short_name: "SDT",
        theme_color: "#D81B60",
        background_color: "#263238",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: []
      }
    })
  ],
  resolve: {
    alias
  },
  build,
  preview: {
    port: 3e3,
    open: true
  },
  server: {
    host: true,
    port: 3e3,
    open: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS5jb25maWcucGF0aHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9ncmFtbWluZ1xcXFxNeSBQcm9qZWN0c1xcXFxEZXZJVFxcXFxhcHBzXFxcXGNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvZ3JhbW1pbmdcXFxcTXkgUHJvamVjdHNcXFxcRGV2SVRcXFxcYXBwc1xcXFxjbGllbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2dyYW1taW5nL015JTIwUHJvamVjdHMvRGV2SVQvYXBwcy9jbGllbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcbmltcG9ydCB7IGFsaWFzLCBidWlsZCB9IGZyb20gXCIuL3ZpdGUuY29uZmlnLnBhdGhzXCI7XG5pbXBvcnQgbWFjcm9zIGZyb20gXCJ2aXRlLXBsdWdpbi1iYWJlbC1tYWNyb3NcIjtcbmltcG9ydCBzdmdyIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIG1hY3JvcygpLFxuICAgIHN2Z3IoeyBleHBvcnRBc0RlZmF1bHQ6IHRydWUgfSksXG4gICAgVml0ZVBXQSh7XG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiBcIlNobW9yaHVuIERldklUIENsaWVudFwiLFxuICAgICAgICBzaG9ydF9uYW1lOiBcIlNEVFwiLFxuICAgICAgICB0aGVtZV9jb2xvcjogXCIjRDgxQjYwXCIsXG4gICAgICAgIGJhY2tncm91bmRfY29sb3I6IFwiIzI2MzIzOFwiLFxuICAgICAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgc2NvcGU6IFwiL1wiLFxuICAgICAgICBzdGFydF91cmw6IFwiL1wiLFxuICAgICAgICBpY29uczogW10sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXMsXG4gIH0sXG4gIGJ1aWxkLFxuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogMzAwMCxcbiAgICBvcGVuOiB0cnVlLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiB0cnVlLFxuICAgIHBvcnQ6IDMwMDAsXG4gICAgb3BlbjogdHJ1ZSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9ncmFtbWluZ1xcXFxNeSBQcm9qZWN0c1xcXFxEZXZJVFxcXFxhcHBzXFxcXGNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvZ3JhbW1pbmdcXFxcTXkgUHJvamVjdHNcXFxcRGV2SVRcXFxcYXBwc1xcXFxjbGllbnRcXFxcdml0ZS5jb25maWcucGF0aHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2dyYW1taW5nL015JTIwUHJvamVjdHMvRGV2SVQvYXBwcy9jbGllbnQvdml0ZS5jb25maWcucGF0aHMudHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFsaWFzID0ge1xyXG4gIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gIFwiQGNvbXBvbmVudHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9jb21wb25lbnRzXCIpLFxyXG4gIFwiQHBhZ2VzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvcGFnZXNcIiksXHJcbiAgXCJAc3R5bGVzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvc3R5bGVzXCIpLFxyXG4gIFwiQHN2Z3NcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9hc3NldHMvaWNvbnMvc3Znc1wiKSxcclxuICBcIkBhc3NldHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9hc3NldHNcIiksXHJcbiAgXCJAdXRpbHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy91dGlsc1wiKSxcclxuICBcIkBwcm92aWRlcnNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9wcm92aWRlcnNcIiksXHJcbiAgXCJAc3RvcmVcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9zdG9yZVwiKSxcclxuICBcIkBhcGlcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9hcGlcIiksXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYnVpbGQgPSB7XHJcbiAgb3V0RGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vZGlzdFwiKSxcclxuICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEzMDAsXHJcbiAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgb3V0cHV0OiB7XHJcbiAgICAgIG1hbnVhbENodW5rcyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ2ZW5kb3JcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1UsT0FBTyxXQUFXO0FBQ3RWLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsZUFBZTs7O0FDRndULE9BQU8sVUFBVTtBQUFqVyxJQUFNLG1DQUFtQztBQUVsQyxJQUFNLFFBQVE7QUFBQSxFQUNuQixLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsRUFDcEMsZUFBZSxLQUFLLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsRUFDekQsVUFBVSxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLEVBQy9DLFdBQVcsS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxFQUNqRCxTQUFTLEtBQUssUUFBUSxrQ0FBVyx5QkFBeUI7QUFBQSxFQUMxRCxXQUFXLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsRUFDakQsVUFBVSxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLEVBQy9DLGNBQWMsS0FBSyxRQUFRLGtDQUFXLGlCQUFpQjtBQUFBLEVBQ3ZELFVBQVUsS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxFQUMvQyxRQUFRLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQzdDO0FBRU8sSUFBTSxRQUFRO0FBQUEsRUFDbkIsUUFBUSxLQUFLLFFBQVEsa0NBQVcsUUFBUTtBQUFBLEVBQ3hDLHVCQUF1QjtBQUFBLEVBQ3ZCLGVBQWU7QUFBQSxJQUNiLFFBQVE7QUFBQSxNQUNOLGFBQWEsSUFBWTtBQUN2QixZQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7OztBRHZCQSxPQUFPLFlBQVk7QUFDbkIsT0FBTyxVQUFVO0FBRWpCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLEtBQUssRUFBRSxpQkFBaUIsS0FBSyxDQUFDO0FBQUEsSUFDOUIsUUFBUTtBQUFBLE1BQ04sVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2Isa0JBQWtCO0FBQUEsUUFDbEIsU0FBUztBQUFBLFFBQ1QsT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsT0FBTyxDQUFDO0FBQUEsTUFDVjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
