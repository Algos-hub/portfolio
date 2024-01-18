import React from "react";
import "../material_3_module/web/iconbutton/filled-tonal-icon-button";
import "../material_3_module/web/iconbutton/filled-icon-button";
import "../material_3_module/web/icon/icon";
import typography from "../styles/themes/typography.module.css";
import color from "../styles/themes/colors.module.css";
import style from "../styles/DrawerButton.module.css";
import { useRouter, usePathname } from "next/navigation";

export default function DrawerButton({ icon = "", name = "", path = "" }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={style.button} onClick={() => router.push(path)}>
      {pathname === path ? (
        <md-filled-icon-button
          onClick={() => {
            router.push(path);
          }}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 303,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: 20,
            }}
          >
            <md-icon filled>{icon}</md-icon>
            <p
              className={`${typography.titleMedium} ${color.onSurfaceVariantText}`}
              style={{
                display: "flex",
                alignItems: "center",
                verticalAlign: "baseline",
                height: 48,
                marginLeft: 20,
              }}
              onClick={() => {
                router.push(path);
              }}
            >
              {name}
            </p>
          </div>
        </md-filled-icon-button>
      ) : (
        <md-filled-tonal-icon-button
          class="drawer"
          toggle
          onClick={() => {
            router.push(path);
          }}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 303,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: 20,
            }}
          >
            <md-icon>{icon}</md-icon>
            <p
              className={`${typography.titleMedium} ${color.onSurfaceVariantText}`}
              style={{
                display: "flex",
                alignItems: "center",
                verticalAlign: "baseline",
                height: "48px",
                marginLeft: 20,
              }}
              onClick={() => router.push(path)}
            >
              {name}
            </p>
          </div>
        </md-filled-tonal-icon-button>
      )}
    </div>
  );
}
